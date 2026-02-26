/* 
   --------------------------------------------------
   FIREBASE CONFIGURATION
   Paste your Firebase Project keys here to enable 
   Admin features permanently.
   --------------------------------------------------
*/
const firebaseConfig = {
  apiKey: "AIzaSyDAtElJUPzlT2rsKzQOC_e4mtQN9EgL_TY",
  authDomain: "sabandijasurbanfood-aa0f2.firebaseapp.com",
  projectId: "sabandijasurbanfood-aa0f2",
  storageBucket: "sabandijasurbanfood-aa0f2.firebasestorage.app",
  messagingSenderId: "976944413697",
  appId: "1:976944413697:web:5d23af6d6dcb376d1bd400"
};

/* --- VARIABLES --- */
let db, auth;
let MENU_DATA = []; // Will hold the menu items
let CART = [];
let isAdmin = false;

/* --- INITIALIZATION --- */
document.addEventListener("DOMContentLoaded", () => {
    initFirebase();
    renderGallery(); // Load 1.jpeg - 15.jpeg
    loadMenu();      // Load items
});

function initFirebase() {
    try {
        if(firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        db = firebase.firestore();
        auth = firebase.auth();
        
        // Listen for Login State
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log("Admin Logged In");
                isAdmin = true;
                document.getElementById('admin-login-btn').style.display = 'none';
                document.getElementById('admin-add-btn').classList.add('visible');
                renderMenu(); // Re-render to show edit/delete buttons
            }
        });
    } catch (e) {
        console.warn("Firebase not configured. Using local JSON mode.");
    }
}

/* --- GALLERY RENDERER --- */
function renderGallery() {
    const wrapper = document.getElementById('gallery-wrapper');
    wrapper.innerHTML = '';
    
    // Loop for 1.jpeg to 15.jpeg
    for (let i = 1; i <= 15; i++) {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        // Visual reference images
        slide.innerHTML = `<img src="assets/images/${i}.jpeg" onclick="openLightbox(this.src)" onerror="this.style.display='none'">`;
        wrapper.appendChild(slide);
    }

    // Initialize Swiper
    new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 15,
        loop: true,
        autoplay: { delay: 3000 },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 20 }
        }
    });
}

/* --- MENU DATA LOADING --- */
async function loadMenu() {
    // 1. Try Firestore first if available
    if (db) {
        try {
            const snapshot = await db.collection('menu').get();
            if (!snapshot.empty) {
                MENU_DATA = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                renderMenu();
                return;
            }
        } catch (e) {
            console.log("Firestore empty or error, falling back to local JSON.");
        }
    }

    // 2. Fallback to local JSON (Initial Data)
    try {
        const response = await fetch('assets/data/menu.json');
        const json = await response.json();
        
        // Flatten JSON structure to simple array for easier Firestore compatibility later
        MENU_DATA = [];
        json.sections.forEach(sec => {
            sec.items.forEach(item => {
                MENU_DATA.push({
                    id: item.id,
                    section: sec.id, // e.g., 'burros'
                    sectionTitle: sec.title,
                    name: item.name,
                    desc: item.desc || "",
                    price: item.price,
                    options: item.options || null
                });
            });
        });
        renderMenu();
    } catch (error) {
        console.error("Error loading menu:", error);
    }
}

/* --- RENDER MENU --- */
function renderMenu() {
    const container = document.getElementById('menu-list');
    container.innerHTML = '';

    // Group items by section
    const sections = {
        entradas: "Entradas",
        burros: "Burros",
        hamburguesas: "Hamburguesas",
        hotdogs: "Hot Dogs",
        boneless: "Boneless",
        alitas: "Alitas",
        desayunos: "Desayunos",
        bebidas: "Bebidas",
        extras: "Extras"
    };

    // Iterate through defined sections order
    Object.keys(sections).forEach(key => {
        // Filter items for this section
        const items = MENU_DATA.filter(i => i.section === key);
        
        if (items.length > 0) {
            const secDiv = document.createElement('div');
            secDiv.innerHTML = `<h3 class="section-title">${sections[key]}</h3><div class="menu-grid"></div>`;
            container.appendChild(secDiv);
            
            const grid = secDiv.querySelector('.menu-grid');
            
            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'item-card';
                
                // Admin Buttons
                let adminHtml = '';
                if (isAdmin) {
                    adminHtml = `
                        <div class="admin-controls">
                            <button class="btn-edit" onclick="openEditModal('${item.id}')">Editar</button>
                            <button class="btn-delete" onclick="deleteItem('${item.id}')">Borrar</button>
                        </div>
                    `;
                }

                // Options Select
                let selectHtml = '';
                if(item.options && item.options.length > 0) {
                    selectHtml = `<select class="modern-select" id="opt-${item.id}">`;
                    item.options.forEach((opt, idx) => {
                        let p = opt.price > 0 ? `(+$${opt.price})` : '';
                        selectHtml += `<option value="${idx}">${opt.name} ${p}</option>`;
                    });
                    selectHtml += `</select>`;
                }

                card.innerHTML = `
                    <div class="item-header">
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">$${item.price}</span>
                    </div>
                    <p class="item-desc">${item.desc}</p>
                    ${selectHtml}
                    <button class="btn-add" onclick="addToCart('${item.id}')">Agregar</button>
                    ${adminHtml}
                `;
                grid.appendChild(card);
            });
        }
    });
}

/* --- CART FUNCTIONS --- */
function addToCart(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if(!item) return;

    let finalPrice = item.price;
    let variant = "";
    
    // Check for options
    const select = document.getElementById(`opt-${itemId}`);
    if(select) {
        const idx = select.value;
        if(item.options[idx]) {
            variant = item.options[idx].name;
            finalPrice += (item.options[idx].price || 0);
        }
    }

    CART.push({
        name: item.name,
        variant: variant,
        price: finalPrice,
        cartId: Date.now()
    });
    
    updateCartUI();
}

function updateCartUI() {
    const floater = document.getElementById('cart-floater');
    const badge = document.getElementById('cart-count');
    const totalEl = document.getElementById('cart-total');
    
    if(CART.length > 0) {
        floater.classList.add('active');
        badge.innerText = CART.length;
        const total = CART.reduce((sum, i) => sum + i.price, 0);
        totalEl.innerText = `$${total}`;
    } else {
        floater.classList.remove('active');
    }
}

function openCart() {
    const list = document.getElementById('cart-items');
    const totalEl = document.getElementById('modal-total');
    list.innerHTML = '';
    
    if(CART.length === 0) {
        list.innerHTML = "<p class='empty-msg'>Nada por aquí...</p>";
        document.getElementById('modal-total').innerText = "$0";
    } else {
        CART.forEach(item => {
            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <div>
                    <div>${item.name} <small>${item.variant}</small></div>
                    <button class="delete-btn" onclick="removeFromCart(${item.cartId})">Eliminar</button>
                </div>
                <div>$${item.price}</div>
            `;
            list.appendChild(row);
        });
        const total = CART.reduce((sum, i) => sum + i.price, 0);
        totalEl.innerText = `$${total}`;
    }
    
    document.getElementById('cart-modal').classList.add('open');
}

function removeFromCart(id) {
    CART = CART.filter(i => i.cartId !== id);
    openCart();
    updateCartUI();
    if(CART.length === 0) closeCart();
}

function closeCart() { document.getElementById('cart-modal').classList.remove('open'); }

function sendOrder() {
    if(CART.length === 0) return;
    let msg = "¡Hola Sabandijas! Quiero pedir:%0A";
    CART.forEach(i => {
        msg += `- ${i.name} ${i.variant} ($${i.price})%0A`;
    });
    const total = CART.reduce((sum, i) => sum + i.price, 0);
    msg += `%0A*Total: $${total}*`;
    
    window.open(`https://wa.me/5216868798922?text=${msg}`, '_blank');
}

/* --- ADMIN FUNCTIONS --- */
function loginAdmin() {
    const e = document.getElementById('admin-email').value;
    const p = document.getElementById('admin-pass').value;
    if(auth) {
        auth.signInWithEmailAndPassword(e, p)
            .then(() => {
                document.getElementById('login-modal').classList.remove('open');
            })
            .catch(err => alert("Error: " + err.message));
    } else {
        alert("Firebase no configurado.");
    }
}

function openAdminModal() {
    // Clear fields for new item
    document.getElementById('edit-id').value = '';
    document.getElementById('edit-name').value = '';
    document.getElementById('edit-desc').value = '';
    document.getElementById('edit-price').value = '';
    document.getElementById('modal-title').innerText = "Nuevo Platillo";
    document.getElementById('item-modal').classList.add('open');
}

function openEditModal(id) {
    const item = MENU_DATA.find(i => i.id === id);
    if(item) {
        document.getElementById('edit-id').value = item.id;
        document.getElementById('edit-section').value = item.section;
        document.getElementById('edit-name').value = item.name;
        document.getElementById('edit-desc').value = item.desc;
        document.getElementById('edit-price').value = item.price;
        document.getElementById('modal-title').innerText = "Editar Platillo";
        document.getElementById('item-modal').classList.add('open');
    }
}

function saveItem() {
    const id = document.getElementById('edit-id').value;
    const itemData = {
        section: document.getElementById('edit-section').value,
        name: document.getElementById('edit-name').value,
        desc: document.getElementById('edit-desc').value,
        price: Number(document.getElementById('edit-price').value),
        options: null // Simplified for admin UI stability
    };

    if(!db) {
        alert("Modo Demo: No se guardará en base de datos sin Firebase.");
        return;
    }

    if(id) {
        // Edit existing
        db.collection('menu').doc(id).update(itemData).then(() => {
            document.getElementById('item-modal').classList.remove('open');
            loadMenu(); // Refresh
        });
    } else {
        // Add new
        db.collection('menu').add(itemData).then(() => {
            document.getElementById('item-modal').classList.remove('open');
            loadMenu(); // Refresh
        });
    }
}

function deleteItem(id) {
    if(confirm("¿Eliminar este platillo?") && db) {
        db.collection('menu').doc(id).delete().then(() => loadMenu());
    }
}

/* --- UTILS --- */
function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}