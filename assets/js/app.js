/* =========================================
   1. STATIC MENU DATA (BACKUP)
   This data is embedded so it loads INSTANTLY.
   ========================================= */
const STATIC_MENU = [
    { id: "e1", section: "entradas", name: "DEDOS DE QUESO", desc: "5 pz empanizados en panko con salsa de tomate.", price: 100, img: "assets/images/dedos_queso.jpg" },
    { id: "e2", section: "entradas", name: "DEDOS SABANDIJAS", desc: "6 pz empanizados en Flaming Hot + papas fritas.", price: 120 },
    { id: "e3", section: "entradas", name: "CHILIPOPPERS", desc: "4 chiles rellenos de 3 quesos y tocino.", price: 120 },
    
    { id: "b1", section: "burros", name: "BURRO EL IGUANO", desc: "Carne asada, guacamole, tocino y queso.", price: 175 },
    { id: "b2", section: "burros", name: "BURRO EL BUFALO", desc: "Boneless bufalo, tocino y queso monterrey.", price: 150 },
    
    { id: "h1", section: "hamburguesas", name: "BEEF BURGER", desc: "Carne, vegetales, queso americano + papas.", price: 140 },
    { id: "h2", section: "hamburguesas", name: "CHEESE BURGER", desc: "Quesos, champiñón, tocino, aderezo + papas.", price: 160 },
    { id: "h3", section: "hamburguesas", name: "DOUBLE BEEF", desc: "Doble carne, doble sabor + papas.", price: 180 },
    { id: "h4", section: "hamburguesas", name: "SABANDIJAS BURGER", desc: "Guacamole, morrón, tocino, queso + papas.", price: 180 },
    { id: "h5", section: "hamburguesas", name: "LA SALADA", desc: "Aros de cebolla BBQ, tocino + papas.", price: 160, options: [{name:"Sencilla",price:0}, {name:"Doble",price:30}] },
    { id: "h6", section: "hamburguesas", name: "BUFALO BURGER", desc: "Pechuga bufalo, queso monterrey + papas.", price: 170 },
    { id: "h7", section: "hamburguesas", name: "BBQ BURGER", desc: "Pechuga BBQ, tocino, aros de cebolla + papas.", price: 165 },
    { id: "h8", section: "hamburguesas", name: "LA ITALIANA", desc: "Salsa tomate, pepperoni, parmesano + papas.", price: 160, options: [{name:"Sencilla",price:0}, {name:"Doble",price:30}] },
    
    { id: "hd1", section: "hotdogs", name: "HOT DOG CLASICO", desc: "Pavo y tocino.", price: 60 },
    { id: "hd2", section: "hotdogs", name: "CHILLI DOG", desc: "Con chilli beans y cheddar.", price: 75 },
    { id: "hd3", section: "hotdogs", name: "1/4 DE LIBRA", desc: "Salchicha res y tocino.", price: 90 },
    { id: "hd4", section: "hotdogs", name: "SABANDIJAS DOG", desc: "1/4 libra, cheddar y tocino.", price: 110 },
    { id: "hd5", section: "hotdogs", name: "CHEESE DOG", desc: "3 quesos y tocino.", price: 85 },
    
    { id: "bn1", section: "boneless", name: "BONELESS BUFALO", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}] },
    { id: "bn2", section: "boneless", name: "BONELESS BBQ", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}] },
    { id: "bn3", section: "boneless", name: "MANGO HABANERO", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}] },
    { id: "bn4", section: "boneless", name: "PAPAS BONELESS", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}] },
    
    { id: "al1", section: "alitas", name: "ALITAS BUFALO", price: 165, options: [{name:"Chica",price:0},{name:"Grande",price:55}] },
    { id: "al2", section: "alitas", name: "ALITAS BBQ", price: 165, options: [{name:"Chica",price:0},{name:"Grande",price:55}] },
    { id: "al3", section: "alitas", name: "ALITAS MANGO", price: 165, options: [{name:"Chica",price:0},{name:"Grande",price:55}] },
    
    { id: "ex1", section: "extras", name: "NACHOS CON CARNE", desc: "Queso, carne fina, tocino, guacamole.", price: 170 },
    { id: "ex2", section: "extras", name: "PAPAS SABANDIJAS", desc: "Carne, tocino, guacamole, queso.", price: 160 },
    { id: "ex3", section: "extras", name: "ORDEN PAPAS", price: 55 },
    { id: "ex4", section: "extras", name: "GUACAMOLE EXTRA", price: 60 },
    { id: "ex5", section: "extras", name: "ADEREZO EXTRA", price: 15 },
    
    { id: "d1", section: "desayunos", name: "CHILAQUILES", price: 120 },
    { id: "d2", section: "desayunos", name: "CLUB SANDWICH", price: 140 },
    { id: "d3", section: "desayunos", name: "OMELET SENCILLO", price: 110 },
    { id: "d4", section: "desayunos", name: "TAMPIQUEÑA", price: 185 },
    { id: "d5", section: "desayunos", name: "TACO GUISADO", price: 40 },
    { id: "d6", section: "desayunos", name: "BURRO DESAYUNO", price: 85 },
    { id: "d7", section: "desayunos", name: "ENCHILADAS (3)", price: 100 },
    { id: "d8", section: "desayunos", name: "OMELET SABANDIJA", price: 155 },
    { id: "d9", section: "desayunos", name: "HUEVOS AL GUSTO", price: 120 },
    { id: "d10", section: "desayunos", name: "CONTINENTAL", price: 140 },
    
    { id: "dr1", section: "bebidas", name: "PONCHE", price: 45 },
    { id: "dr2", section: "bebidas", name: "TE NEGRO", price: 45 },
    { id: "dr3", section: "bebidas", name: "LIMONADA", price: 45 },
    { id: "dr4", section: "bebidas", name: "AGUA", price: 30 },
    { id: "dr5", section: "bebidas", name: "FRAPPE OREO", price: 70 },
    { id: "dr6", section: "bebidas", name: "REFRESCO", price: 45 },
    { id: "dr7", section: "bebidas", name: "CAFE", price: 45 },
    { id: "dr8", section: "bebidas", name: "JUGO NARANJA", price: 60 },
    { id: "dr9", section: "bebidas", name: "MALTEADA", price: 65 }
];

/* =========================================
   2. CONFIGURATION
   ========================================= */
const firebaseConfig = {
  apiKey: "AIzaSyDAtElJUPzlT2rsKzQOC_e4mtQN9EgL_TY",
  authDomain: "sabandijasurbanfood-aa0f2.firebaseapp.com",
  projectId: "sabandijasurbanfood-aa0f2",
  storageBucket: "sabandijasurbanfood-aa0f2.firebasestorage.app",
  messagingSenderId: "976944413697",
  appId: "1:976944413697:web:5d23af6d6dcb376d1bd400"
};

let db, auth;
let MENU_DATA = [...STATIC_MENU]; 
let CART = [];
let isAdmin = false;

/* =========================================
   3. INIT
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Show the static menu immediately (Fast & Safe)
    renderMenu();
    try { renderGallery(); } catch(e) {}

    // 2. Try to connect to Firebase in the background
    initFirebase();
});

/* =========================================
   4. CORE FUNCTIONS
   ========================================= */
function renderMenu() {
    const container = document.getElementById('menu-list');
    if(!container) return;
    
    container.innerHTML = ''; // Clear loading

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

                // Image Logic
                let imgHtml = '';
                if(item.img) {
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
   5. CART SYSTEM
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
   6. ADMIN & FIREBASE
   ========================================= */
function initFirebase() {
    if (typeof firebase !== 'undefined' && firebase.apps.length === 0) {
        try {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            auth = firebase.auth();
            
            auth.onAuthStateChanged(user => {
                if (user) {
                    isAdmin = true;
                    document.getElementById('admin-login-btn').style.display = 'none';
                    document.getElementById('admin-add-btn').classList.add('visible');
                    renderMenu();
                }
            });

            // Load data from DB (Overwrite static)
            db.collection('menu').get().then(snapshot => {
                if (!snapshot.empty) {
                    MENU_DATA = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    renderMenu();
                    console.log("Database Loaded");
                }
            });
        } catch (e) { console.log("Firebase not configured"); }
    }
}

function loginAdmin() {
    const e = document.getElementById('admin-email').value;
    const p = document.getElementById('admin-pass').value;
    if(auth) {
        auth.signInWithEmailAndPassword(e, p)
            .then(() => closeLoginModal())
            .catch(err => alert("Error: " + err.message));
    } else {
        alert("Firebase no conectado.");
    }
}

function saveItem() {
    if(!db) { alert("Error: No hay conexión a base de datos."); return; }
    
    const id = document.getElementById('edit-id').value;
    const itemData = {
        section: document.getElementById('edit-section').value,
        name: document.getElementById('edit-name').value,
        desc: document.getElementById('edit-desc').value,
        price: Number(document.getElementById('edit-price').value),
        img: document.getElementById('edit-img').value, // SAVES THE IMAGE URL
        options: null
    };

    const action = id 
        ? db.collection('menu').doc(id).update(itemData)
        : db.collection('menu').add(itemData);

    action.then(() => {
        document.getElementById('item-modal').classList.remove('open');
        db.collection('menu').get().then(snapshot => {
            MENU_DATA = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            renderMenu();
        });
    }).catch(e => alert(e.message));
}

function deleteItem(id) {
    if(confirm("¿Eliminar?") && db) {
        db.collection('menu').doc(id).delete().then(() => {
            MENU_DATA = MENU_DATA.filter(i => i.id !== id);
            renderMenu();
        });
    }
}

// Modal Helpers
function openLoginModal() { document.getElementById('login-modal').classList.add('open'); }
function closeLoginModal() { document.getElementById('login-modal').classList.remove('open'); }

function openAdminModal() {
    document.getElementById('edit-id').value = '';
    document.getElementById('edit-name').value = '';
    document.getElementById('edit-desc').value = '';
    document.getElementById('edit-price').value = '';
    document.getElementById('edit-img').value = '';
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
        document.getElementById('edit-img').value = item.img || "";
        document.getElementById('modal-title').innerText = "Editar Platillo";
        document.getElementById('item-modal').classList.add('open');
    }
}

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}
