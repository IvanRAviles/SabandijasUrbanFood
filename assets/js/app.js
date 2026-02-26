/* --- FIREBASE CONFIGURATION --- */
// Paste your keys here if you want admin to work. 
// If not, the site still works with the data file above.
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
let MENU_DATA = [];
let CART = [];
let isAdmin = false;

/* --- INITIALIZATION --- */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Render Gallery (Images 1-15)
    renderGallery();
    
    // 2. Load Local Data IMMEDIATELY (No fetch, no waiting)
    if(typeof DEFAULT_MENU_DATA !== 'undefined') {
        MENU_DATA = DEFAULT_MENU_DATA;
        renderMenu(); // Shows menu instantly
    } else {
        console.error("Critical: menu-data.js not loaded.");
    }

    // 3. Try connecting to Firebase (Silently)
    initFirebase();
});

function initFirebase() {
    try {
        // Check if Firebase script loaded (wasn't blocked by AdBlock)
        if (typeof firebase !== 'undefined' && firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            auth = firebase.auth();
            
            // Listener for Admin Login
            auth.onAuthStateChanged(user => {
                if (user) {
                    console.log("Admin Logged In");
                    isAdmin = true;
                    document.getElementById('admin-login-btn').style.display = 'none';
                    document.getElementById('admin-add-btn').classList.add('visible');
                    renderMenu(); // Re-render to show edit buttons
                }
            });

            // Try to sync with Database (Overwrites local data if successful)
            loadFromDatabase();
        }
    } catch (e) {
        console.warn("Firebase blocked or failed. Running in static mode.");
    }
}

async function loadFromDatabase() {
    try {
        const snapshot = await db.collection('menu').get();
        if (!snapshot.empty) {
            MENU_DATA = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            renderMenu();
            console.log("Updated with Live Database Data");
        }
    } catch (e) {
        console.log("Database offline or blocked.");
    }
}

/* --- RENDER FUNCTIONS --- */
function renderGallery() {
    const wrapper = document.getElementById('gallery-wrapper');
    wrapper.innerHTML = '';
    
    // Loop 1 to 15
    for (let i = 1; i <= 15; i++) {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        // onerror hides broken images automatically
        slide.innerHTML = `<img src="assets/images/${i}.jpeg" onclick="openLightbox(this.src)" onerror="this.style.display='none'">`;
        wrapper.appendChild(slide);
    }

    new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 15,
        loop: true,
        autoplay: { delay: 3000 },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: { 768: { slidesPerView: 3, spaceBetween: 20 } }
    });
}

function renderMenu() {
    const container = document.getElementById('menu-list');
    container.innerHTML = '';

    const sectionMap = {
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

    Object.keys(sectionMap).forEach(key => {
        const items = MENU_DATA.filter(i => i.section === key);
        if (items.length > 0) {
            const secDiv = document.createElement('div');
            secDiv.innerHTML = `<h3 class="section-title">${sectionMap[key]}</h3><div class="menu-grid"></div>`;
            container.appendChild(secDiv);
            
            const grid = secDiv.querySelector('.menu-grid');
            
            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'item-card';
                
                let adminHtml = '';
                if (isAdmin) {
                    adminHtml = `
                        <div class="admin-controls">
                            <button class="btn-edit" onclick="openEditModal('${item.id}')">Editar</button>
                            <button class="btn-delete" onclick="deleteItem('${item.id}')">Borrar</button>
                        </div>`;
                }

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
                    ${item.desc ? `<p class="item-desc">${item.desc}</p>` : ''}
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
    
    const select = document.getElementById(`opt-${itemId}`);
    if(select) {
        const idx = select.value;
        if(item.options[idx]) {
            variant = `(${item.options[idx].name})`;
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
        totalEl.innerText = "$0";
    } else {
        CART.forEach(item => {
            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <div>${item.name} <small>${item.variant}</small></div>
                <div style="display:flex; gap:10px; align-items:center;">
                    <div style="font-weight:bold;">$${item.price}</div>
                    <button class="delete-btn" onclick="removeFromCart(${item.cartId})"><i class="fas fa-trash"></i></button>
                </div>
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
    let msg = "¡Hola Sabandijas! Quiero pedir:%0A%0A";
    CART.forEach(i => {
        msg += `- ${i.name} ${i.variant} ($${i.price})%0A`;
    });
    const total = CART.reduce((sum, i) => sum + i.price, 0);
    msg += `%0A*TOTAL: $${total}*`;
    
    // Change number here
    window.open(`https://wa.me/5216868798922?text=${msg}`, '_blank');
}

/* --- ADMIN FUNCTIONS --- */
function loginAdmin() {
    const e = document.getElementById('admin-email').value;
    const p = document.getElementById('admin-pass').value;
    if(auth) {
        auth.signInWithEmailAndPassword(e, p)
            .then(() => document.getElementById('login-modal').classList.remove('open'))
            .catch(err => alert("Error: " + err.message));
    } else {
        alert("Firebase no está conectado (Bloqueado por navegador o no configurado).");
    }
}

function openAdminModal() {
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
        document.getElementById('edit-desc').value = item.desc || "";
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
        options: null
    };

    if(!db) {
        alert("Error: Base de datos no conectada.");
        return;
    }

    const promise = id 
        ? db.collection('menu').doc(id).update(itemData)
        : db.collection('menu').add(itemData);

    promise.then(() => {
        document.getElementById('item-modal').classList.remove('open');
        loadFromDatabase(); 
    }).catch(e => alert("Error al guardar: " + e.message));
}

function deleteItem(id) {
    if(confirm("¿Eliminar este platillo?") && db) {
        db.collection('menu').doc(id).delete().then(() => loadFromDatabase());
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
