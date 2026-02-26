// This file acts as the backup database so the site works offline/locally
const DEFAULT_MENU_DATA = [
    { section: "entradas", name: "DEDOS DE QUESO", desc: "5 pz empanizados en panko con salsa de tomate.", price: 100 },
    { section: "entradas", name: "DEDOS SABANDIJAS", desc: "6 pz empanizados en Flaming Hot + papas fritas.", price: 120 },
    { section: "entradas", name: "CHILIPOPPERS", desc: "4 chiles rellenos de 3 quesos y tocino.", price: 120 },
    
    { section: "burros", name: "BURRO EL IGUANO", desc: "Carne asada, guacamole, tocino y queso.", price: 175 },
    { section: "burros", name: "BURRO EL BUFALO", desc: "Boneless bufalo, tocino y queso monterrey.", price: 150 },
    
    { section: "hamburguesas", name: "BEEF BURGER", desc: "Carne, vegetales, queso americano + papas.", price: 140 },
    { section: "hamburguesas", name: "CHEESE BURGER", desc: "Quesos, champiñón, tocino, aderezo + papas.", price: 160 },
    { section: "hamburguesas", name: "DOUBLE BEEF", desc: "Doble carne, doble sabor + papas.", price: 180 },
    { section: "hamburguesas", name: "SABANDIJAS BURGER", desc: "Guacamole, morrón, tocino, queso + papas.", price: 180 },
    { section: "hamburguesas", name: "LA SALADA", desc: "Aros de cebolla BBQ, tocino + papas.", price: 160, options: [{name:"Sencilla",price:0}, {name:"Doble",price:30}] },
    { section: "hamburguesas", name: "BUFALO BURGER", desc: "Pechuga bufalo, queso monterrey + papas.", price: 170 },
    { section: "hamburguesas", name: "BBQ BURGER", desc: "Pechuga BBQ, tocino, aros de cebolla + papas.", price: 165 },
    { section: "hamburguesas", name: "LA ITALIANA", desc: "Salsa tomate, pepperoni, parmesano + papas.", price: 160, options: [{name:"Sencilla",price:0}, {name:"Doble",price:30}] },
    
    { section: "hotdogs", name: "HOT DOG CLASICO", desc: "Pavo y tocino.", price: 60 },
    { section: "hotdogs", name: "CHILLI DOG", desc: "Con chilli beans y cheddar.", price: 75 },
    { section: "hotdogs", name: "1/4 DE LIBRA", desc: "Salchicha res y tocino.", price: 90 },
    { section: "hotdogs", name: "SABANDIJAS DOG", desc: "1/4 libra, cheddar y tocino.", price: 110 },
    { section: "hotdogs", name: "CHEESE DOG", desc: "3 quesos y tocino.", price: 85 },
    
    { section: "boneless", name: "BONELESS BUFALO", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}] },
    { section: "boneless", name: "BONELESS BBQ", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}] },
    { section: "boneless", name: "MANGO HABANERO", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}] },
    { section: "boneless", name: "PAPAS BONELESS", price: 160, options: [{name:"Chica",price:0},{name:"Grande",price:40}] },
    
    { section: "alitas", name: "ALITAS BUFALO", price: 165, options: [{name:"Chica",price:0},{name:"Grande",price:55}] },
    { section: "alitas", name: "ALITAS BBQ", price: 165, options: [{name:"Chica",price:0},{name:"Grande",price:55}] },
    { section: "alitas", name: "ALITAS MANGO", price: 165, options: [{name:"Chica",price:0},{name:"Grande",price:55}] },
    
    { section: "extras", name: "NACHOS CON CARNE", desc: "Queso, carne fina, tocino, guacamole.", price: 170 },
    { section: "extras", name: "PAPAS SABANDIJAS", desc: "Carne, tocino, guacamole, queso.", price: 160 },
    { section: "extras", name: "ORDEN PAPAS", price: 55 },
    { section: "extras", name: "GUACAMOLE EXTRA", price: 60 },
    { section: "extras", name: "ADEREZO EXTRA", price: 15 },
    
    { section: "desayunos", name: "CHILAQUILES", price: 120 },
    { section: "desayunos", name: "CLUB SANDWICH", price: 140 },
    { section: "desayunos", name: "OMELET SENCILLO", price: 110 },
    { section: "desayunos", name: "TAMPIQUEÑA", price: 185 },
    { section: "desayunos", name: "TACO GUISADO", price: 40 },
    { section: "desayunos", name: "BURRO DESAYUNO", price: 85 },
    { section: "desayunos", name: "ENCHILADAS (3)", price: 100 },
    { section: "desayunos", name: "OMELET SABANDIJA", price: 155 },
    { section: "desayunos", name: "HUEVOS AL GUSTO", price: 120 },
    { section: "desayunos", name: "CONTINENTAL", price: 140 },
    
    { section: "bebidas", name: "PONCHE", price: 45 },
    { section: "bebidas", name: "TE NEGRO", price: 45 },
    { section: "bebidas", name: "LIMONADA", price: 45 },
    { section: "bebidas", name: "AGUA", price: 30 },
    { section: "bebidas", name: "FRAPPE OREO", price: 70 },
    { section: "bebidas", name: "REFRESCO", price: 45 },
    { section: "bebidas", name: "CAFE", price: 45 },
    { section: "bebidas", name: "JUGO NARANJA", price: 60 },
    { section: "bebidas", name: "MALTEADA", price: 65 }
].map((item, index) => ({...item, id: 'static_' + index})); // Assign IDs automatically
