/* =========================================
   1. EMBEDDED MENU DATA (Guaranteed Load)
   ========================================= */
const DEFAULT_MENU = [
    { id: "e1", section: "entradas", name: "DEDOS DE QUESO", desc: "5 pz empanizados en panko con salsa de tomate.", price: 100, img: "" },
    { id: "e2", section: "entradas", name: "DEDOS SABANDIJAS", desc: "6 pz empanizados en Flaming Hot + papas fritas.", price: 120, img: "" },
    { id: "e3", section: "entradas", name: "CHILIPOPPERS", desc: "4 chiles rellenos de 3 quesos y tocino.", price: 120, img: "" },
    
    { id: "b1", section: "burros", name: "BURRO EL IGUANO", desc: "Carne asada, guacamole, tocino y queso.", price: 175, img: "" },
    { id: "b2", section: "burros", name: "BURRO EL BUFALO", desc: "Boneless bufalo, tocino y queso monterrey.", price: 150, img: "" },
    
    { id: "h1", section: "hamburguesas", name: "BEEF BURGER", desc: "Carne, vegetales, queso americano + papas.", price: 140, img: "" },
    { id: "h2", section: "hamburguesas", name: "CHEESE BURGER", desc: "Quesos, champiñón, tocino, aderezo + papas.", price: 160, img: "" },
    { id: "h3", section: "hamburguesas", name: "DOUBLE BEEF", desc: "Doble carne, doble sabor + papas.", price: 180, img: "" },
    { id: "h4", section: "hamburguesas", name: "SABANDIJAS BURGER", desc: "Guacamole, morrón, tocino, queso + papas.", price: 180, img: "" },
    { id: "h5", section: "hamburguesas", name: "LA SALADA", desc: "Aros de cebolla BBQ, tocino + papas.", price: 160, options: [{name:"Sencilla",price:0}, {name:"Doble",price:30}], img: "" },
    { id: "h6", section: "hamburguesas", name: "BUFALO BURGER", desc: "Pechuga bufalo, queso monterrey + papas.", price: 170, img: "" },
    { id: "h7", section: "hamburguesas", name: "BBQ BURGER", desc: "Pechuga BBQ, tocino, aros de cebolla + papas.", price: 165, img: "" },
    { id: "h8", section: "hamburguesas", name: "LA ITALIANA", desc: "Salsa tomate, pepperoni, parmesano + papas.", price: 160, options: [{name:"Sencilla",price:0}, {name:"Doble",price:30}], img: "" },
    
    { id: "hd1", section: "hotdogs", name: "HOT DOG CLASICO", desc: "Pavo y tocino.", price: 60, img: "" },
    { id: "hd2", section: "hotdogs", name: "CHILLI DOG", desc: "Con chilli beans y cheddar.", price: 75, img: "" },
    { id: "hd3", section: "hotdogs", name: "1/4 DE LIBRA", desc: "Salchicha res y tocino.", price: 90, img: "" },
    { id: "hd4", section: "hotdogs", name: "SABANDIJAS DOG", desc: "1/4 libra, cheddar y tocino.", price: 110, img: "" },
    { id: "hd5", section: "hotdogs", name: "CHEESE DOG", desc: "3 quesos y tocino.", price: 85, img: "" },
    
    { id: "bn1", section: "boneless", name: "BONELESS BUFALO", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}], img: "" },
    { id: "bn2", section: "boneless", name: "BONELESS BBQ", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}], img: "" },
    { id: "bn3", section: "boneless", name: "MANGO HABANERO", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}], img: "" },
    { id: "bn4", section: "boneless", name: "PAPAS BONELESS", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}], img: "" },
    
    { id: "al1", section: "alitas", name: "ALITAS BUFALO", price: 165, options: [{name:"Chica",price:0},{name:"Grande",price:55}], img: "" },
    { id: "al2", section: "alitas", name: "ALITAS BBQ", price: 165, options: [{name:"Chica",price:0},{name:"Grande",price:55}], img: "" },
    { id: "al3", section: "alitas", name: "ALITAS MANGO", price: 165, options: [{name:"Chica",price:0},{name:"Grande",price:55}], img: "" },
    
    { id: "ex1", section: "extras", name: "NACHOS CON CARNE", desc: "Queso, carne fina, tocino, guacamole.", price: 170, img: "" },
    { id: "ex2", section: "extras", name: "PAPAS SABANDIJAS", desc: "Carne, tocino, guacamole, queso.", price: 160, img: "" },
    { id: "ex3", section: "extras", name: "ORDEN PAPAS", price: 55, img: "" },
    { id: "ex4", section: "extras", name: "GUACAMOLE EXTRA", price: 60, img: "" },
    { id: "ex5", section: "extras", name: "ADEREZO EXTRA", price: 15, img: "" },
    
    { id: "d1", section: "desayunos", name: "CHILAQUILES", price: 120, img: "" },
    { id: "d2", section: "desayunos", name: "CLUB SANDWICH", price: 140, img: "" },
    { id: "d3", section: "desayunos", name: "OMELET SENCILLO", price: 110, img: "" },
    { id: "d4", section: "desayunos", name: "TAMPIQUEÑA", price: 185, img: "" },
    { id: "d5", section: "desayunos", name: "TACO GUISADO", price: 40, img: "" },
    { id: "d6", section: "desayunos", name: "BURRO DESAYUNO", price: 85, img: "" },
    { id: "d7", section: "desayunos", name: "ENCHILADAS (3)", price: 100, img: "" },
    { id: "d8", section: "desayunos", name: "OMELET SABANDIJA", price: 155, img: "" },
    { id: "d9", section: "desayunos", name: "HUEVOS AL GUSTO", price: 120, img: "" },
    { id: "d10", section: "desayunos", name: "CONTINENTAL", price: 140, img: "" },
    
    { id: "dr1", section: "bebidas", name: "PONCHE", price: 45, img: "" },
    { id: "dr2", section: "bebidas", name: "TE NEGRO", price: 45, img: "" },
    { id: "dr3", section: "bebidas", name: "LIMONADA", price: 45, img: "" },
    { id: "dr4", section: "bebidas", name: "AGUA", price: 30, img: "" },
    { id: "dr5", section: "bebidas", name: "FRAPPE OREO", price: 70, img: "" },
    { id: "dr6", section: "bebidas", name: "REFRESCO", price: 45, img: "" },
    { id: "dr7", section: "bebidas", name: "CAFE", price: 45, img: "" },
    { id: "dr8", section: "bebidas", name: "JUGO NARANJA", price: 60, img: "" },
    { id: "dr9", section: "bebidas", name: "MALTEADA", price: 65, img: "" }
];

/* =========================================
   2. CONFIG: PASTE YOUR KEYS BELOW
   ========================================= */
const firebaseConfig = {
  apiKey: "AIzaSyDAtElJUPzlT2rsKzQOC_e4mtQN9EgL_TY",
  authDomain: "sabandijasurbanfood-aa0f2.firebaseapp.com",
  projectId: "sabandijasurbanfood-aa0f2",
  storageBucket: "sabandijasurbanfood-aa0f2.firebasestorage.app",
  messagingSenderId: "976944413697",
  appId: "1:976944413697:web:5d23af6d6dcb376d1bd400"
};

/* =========================================
   3. APP STATE
   ========================================= */
let MENU_DATA = [...DEFAULT_MENU];
let CART = [];
let db, auth;
let isAdmin = false;

/* =========================================
   4. INIT SEQUENCE
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Render immediately with static data (Bulletproof)
    renderMenu();
    try { renderGallery(); } catch(e) {}

    // 2. Try Firebase (Async)
    setTimeout(initFirebase, 200);
});

function initFirebase() {
    if (typeof firebase !== 'undefined' && firebase.apps.length === 0) {
        try {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            auth = firebase.auth();
            
            // AUTH STATE LISTENER
            auth.onAuthStateChanged(user => {
                if (user) {
                    console.log("Admin Connected");
                    isAdmin = true;
                    // Show "Logout" view in modal
                    document.getElementById('view-login-form').style.display = 'none';
                    document.getElementById('view-logout-form').style.display = 'block';
                    // Show floating + button
                    document.getElementById('admin-add-btn').classList.add('visible');
                    // Hide lock button (optional, or keep it to allow logout access)
                    // document.getElementById('admin-lock-btn').style.display = 'none'; 
                    
                    // Load Live Data
                    loadFromDatabase(); 
                } else {
                    console.log("User Guest");
                    isAdmin = false;
                    // Show "Login" view in modal
                    document.getElementById('view-login-form').style.display = 'block';
                    document.getElementById('view-logout-form').style.display = 'none';
                    // Hide floating + button
                    document.getElementById('admin-add-btn').classList.remove('visible');
                    
                    renderMenu(); // Re-render to hide edit buttons
                }
            });

            // Initial Load (even if not logged in)
            loadFromDatabase();

        } catch (e) {
            console.warn("Firebase Init Error (AdBlock?):", e);
        }
    }
}

async function loadFromDatabase() {
    if(!db) return;
    try {
        const snapshot = await db.collection('menu').get();
        if (!snapshot.empty) {
            MENU_DATA = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            renderMenu();
            console.log("Menu synced with Database");
        }
    } catch (e) {
        console.log("DB Offline/Blocked. Using Static.");
    }
}

/* =========================================
   5. RENDER LOGIC
   ========================================= */
function renderMenu() {
    const container = document.getElementById('menu-list');
    if(!container) return;
    
    container.innerHTML = ''; 

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

    Object.keys(sections).forEach(key => {
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
                        </div>`;
                }

                // Options
                let selectHtml = '';
                if(item.options && item.options.length > 0) {
                    selectHtml = `<select class="modern-select" id="opt-${item.id}">`;
                    item.options.forEach((opt, idx) => {
                        let p = opt.price > 0 ? `(+$${opt.price})` : '';
                        selectHtml += `<option value="${idx}">${opt.name} ${p}</option>`;
                    });
                    selectHtml += `</select>`;
                }

                // Image
                let imgHtml = '';
                if(item.img && item.img.trim().length > 5) {
                    imgHtml = `<div style="height:180px; overflow:hidden; border-radius:12px 12px 0 0; margin:-15px -15px 10px -15px;">
                        <img src="${item.img}" style="width:100%; height:100%; object-fit:cover;" onclick="openLightbox('${item.img}')" onerror="this.style.display='none'">
                    </div>`;
                }

                card.innerHTML = `
                    ${imgHtml}
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

function renderGallery() {
    const wrapper = document.getElementById('gallery-wrapper');
    if(!wrapper) return;
    wrapper.innerHTML = '';
    
    for (let i = 1; i <= 15; i++) {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        // 'onerror' is crucial to hide broken images
        slide.innerHTML = `<img src="assets/images/${i}.jpeg" onclick="openLightbox(this.src)" onerror="this.parentElement.style.display='none'">`;
        wrapper.appendChild(slide);
    }

    if(typeof Swiper !== 'undefined') {
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
}

/* =========================================
   6. CART SYSTEM
   ========================================= */
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
    window.open(`https://wa.me/5216868798922?text=${msg}`, '_blank');
}

/* =========================================
   7. ADMIN AUTH & LOGIC
   ========================================= */
function openLoginModal() { document.getElementById('login-modal').classList.add('open'); }
function closeLoginModal() { document.getElementById('login-modal').classList.remove('open'); }

function loginAdmin() {
    const e = document.getElementById('admin-email').value;
    const p = document.getElementById('admin-pass').value;
    if(auth) {
        auth.signInWithEmailAndPassword(e, p)
            .then(() => closeLoginModal())
            .catch(err => alert("Error: " + err.message));
    } else {
        alert("Firebase no conectado (Revise Keys o Bloqueador de Anuncios)");
    }
}

function logoutAdmin() {
    if(auth) {
        auth.signOut().then(() => {
            alert("Sesión Cerrada");
            closeLoginModal();
        });
    }
}

function openEditModal(id) {
    if(id) {
        const item = MENU_DATA.find(i => i.id === id);
        if(item) {
            document.getElementById('edit-id').value = item.id;
            document.getElementById('edit-section').value = item.section;
            document.getElementById('edit-name').value = item.name;
            document.getElementById('edit-desc').value = item.desc || "";
            document.getElementById('edit-price').value = item.price;
            document.getElementById('edit-img').value = item.img || "";
            document.getElementById('modal-title').innerText = "Editar Platillo";
        }
    } else {
        document.getElementById('edit-id').value = '';
        document.getElementById('edit-name').value = '';
        document.getElementById('edit-desc').value = '';
        document.getElementById('edit-price').value = '';
        document.getElementById('edit-img').value = '';
        document.getElementById('modal-title').innerText = "Nuevo Platillo";
    }
    document.getElementById('item-modal').classList.add('open');
}

function saveItem() {
    if(!db) { alert("Base de datos no conectada."); return; }
    
    const id = document.getElementById('edit-id').value;
    const itemData = {
        section: document.getElementById('edit-section').value,
        name: document.getElementById('edit-name').value,
        desc: document.getElementById('edit-desc').value,
        price: Number(document.getElementById('edit-price').value),
        img: document.getElementById('edit-img').value
    };
    // Only set options to null for new items to preserve existing options on edits
    if (!id) {
        itemData.options = null;
    }

    const action = id 
        ? db.collection('menu').doc(id).update(itemData)
        : db.collection('menu').add(itemData);

    action.then(() => {
        document.getElementById('item-modal').classList.remove('open');
        loadFromDatabase(); // Force Refresh
    }).catch(e => alert(e.message));
}

function deleteItem(id) {
    if(confirm("¿Eliminar?") && db) {
        db.collection('menu').doc(id).delete().then(() => loadFromDatabase());
    }
}

/* =========================================
   8. UTILS
   ========================================= */
function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}
