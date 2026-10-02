/* =========================================
   KOOKIE POP
========================================= */

const WHATSAPP = "573205946508";


/* =========================================
   PRODUCTOS
========================================= */

const products = [

    {
        id: 1,
        name: "Photocard laminada",
        description: "1 photocard totalmente personalizada y laminada.",
        price: 1500,
        emoji: "📸"
    },

    {
        id: 2,
        name: "Photocard sin laminar",
        description: "1 photocard personalizada.",
        price: 1000,
        emoji: "🖼️"
    },

    {
        id: 3,
        name: "Paquete de photocards x5",
        description: "5 photocards totalmente personalizadas.",
        price: 7000,
        emoji: "📸"
    },

    {
        id: 4,
        name: "Paquete de photocards x10",
        description: "10 photocards totalmente personalizadas.",
        price: 13000,
        emoji: "💿"
    },

    {
        id: 5,
        name: "Lámina de stickers x15",
        description: "15 stickers personalizados.",
        price: 10000,
        emoji: "✨"
    },

    {
        id: 6,
        name: "Foto carnet x6",
        description: "6 fotos carnet sin laminar.",
        price: 5000,
        emoji: "🪪"
    },

    {
        id: 7,
        name: "Foto strip x5",
        description: "5 fotos strip personalizadas.",
        price: 7000,
        emoji: "🎞️"
    },

    {
        id: 8,
        name: "Separador de libros",
        description: "Separador personalizado.",
        price: 1500,
        emoji: "📖"
    },

    {
        id: 9,
        name: "Manilla",
        description: "Manilla personalizada.",
        price: 4000,
        emoji: "📿"
    },

    {
        id: 10,
        name: "Manilla Bestie Friend x2",
        description: "2 manillas para compartir.",
        price: 7000,
        emoji: "🎀"
    },

    {
        id: 11,
        name: "Manilla Bestie Three Friends x3",
        description: "3 manillas para compartir.",
        price: 10000,
        emoji: "🫶"
    },

    {
        id: 12,
        name: "Collar con perla",
        description: "Collar personalizado con perla.",
        price: 8000,
        emoji: "🤍"
    },

    {
        id: 13,
        name: "Collar con perla y dije",
        description: "Collar con perla y dije.",
        price: 10000,
        emoji: "💎"
    }

];


/* =========================================
   COMBOS
========================================= */

const combos = [

    {
        id: 101,
        name: "Kookie",
        description:
            "1 manilla\n" +
            "1 photocard laminada\n" +
            "1 separador de libro",
        price: 6000,
        emoji: "🐰"
    },

    {
        id: 102,
        name: "K-Pop",
        description:
            "Paquete de 5 photocards\n" +
            "1 foto strip x5",
        price: 13000,
        emoji: "🎧"
    },

    {
        id: 103,
        name: "Besties",
        description:
            "1 manilla Besties Three Friends x3\n" +
            "1 paquete de 5 photocards",
        price: 15000,
        emoji: "🎀"
    },

    {
        id: 104,
        name: "Hobi",
        description:
            "1 collar con perla\n" +
            "1 manilla\n" +
            "1 photocard laminada",
        price: 12000,
        emoji: "🌻"
    },

    {
        id: 105,
        name: "Kookie Pop",
        description:
            "1 collar con perla y dije\n" +
            "1 manilla Besties Three Friends x3\n" +
            "1 paquete de 5 photocards\n" +
            "1 separador de libro",
        price: 25000,
        emoji: "🐰"
    },

    {
        id: 106,
        name: "VIP",
        description:
            "4 manillas\n" +
            "3 collares\n" +
            "2 láminas de stickers\n" +
            "15 photocards laminadas\n" +
            "5 flores eternas\n" +
            "1 postal\n" +
            "2 separadores\n" +
            "2 photo strip\n" +
            "5 photo carnet",
        price: 55000,
        emoji: "👑"
    }

];


/* =========================================
   RAMOS
========================================= */

const bouquets = [

    {
        id: 201,
        name: "Ramo Básico",
        description:
            "5 photocards + 10 flores eternas.",
        price: 25000,
        emoji: "🌷"
    },

    {
        id: 202,
        name: "Ramo Outro",
        description:
            "10 photocards + 15 flores eternas.",
        price: 35000,
        emoji: "🌸"
    },

    {
        id: 203,
        name: "Ramo Kookie",
        description:
            "14 photocards + 20 flores eternas.",
        price: 45000,
        emoji: "💐"
    },

    {
        id: 204,
        name: "Ramo VIP",
        description:
            "Cantidad de photocards y flores personalizada.",
        price: null,
        emoji: "👑",
        custom: true
    }

];


/* =========================================
   CARRITO
========================================= */

let cart =
    JSON.parse(
        localStorage.getItem("kookiePopCart")
    ) || [];


/* =========================================
   ELEMENTOS
========================================= */

const productsGrid =
    document.getElementById("productsGrid");

const combosGrid =
    document.getElementById("combosGrid");

const bouquetsGrid =
    document.getElementById("bouquetsGrid");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.getElementById("cartCount");


/* =========================================
   PRECIO
========================================= */

function money(number) {

    return new Intl.NumberFormat(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }
    ).format(number);

}


/* =========================================
   GUARDAR
========================================= */

function saveCart() {

    localStorage.setItem(
        "kookiePopCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   PRODUCTOS
========================================= */

function renderProducts() {

    productsGrid.innerHTML = "";

    products.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";

        card.innerHTML = `

            <div class="product-image">
                ${product.emoji}
            </div>

            <h3>
                ${product.name}
            </h3>

            <p>
                ${product.description}
            </p>

            <div class="product-price">
                ${money(product.price)}
            </div>

            <button
                class="product-button"
                onclick="addProduct(${product.id})">

                🛒 Agregar

            </button>

        `;

        productsGrid.appendChild(card);

    });

}


/* =========================================
   COMBOS
========================================= */

function renderCombos() {

    combosGrid.innerHTML = "";

    combos.forEach(combo => {

        const card =
            document.createElement("article");

        card.className =
            "combo-card";

        card.innerHTML = `

            <div class="combo-icon">
                ${combo.emoji}
            </div>

            <h3>
                Combo "${combo.name}"
            </h3>

            <p>
                ${combo.description}
            </p>

            <div class="combo-price">
                ${money(combo.price)}
            </div>

            <button
                class="product-button"
                onclick="addCombo(${combo.id})">

                🛒 Agregar

            </button>

        `;

        combosGrid.appendChild(card);

    });

}


/* =========================================
   RAMOS
========================================= */

function renderBouquets() {

    bouquetsGrid.innerHTML = "";

    bouquets.forEach(bouquet => {

        const card =
            document.createElement("article");

        card.className =
            "bouquet";

        const price =
            bouquet.price === null
                ? "Personalizado"
                : money(bouquet.price);

        const button =
            bouquet.custom

                ?

                `<button
                    class="product-button"
                    onclick="customBouquet()">

                    💬 Cotizar

                </button>`

                :

                `<button
                    class="product-button"
                    onclick="addBouquet(${bouquet.id})">

                    🛒 Agregar

                </button>`;


        card.innerHTML = `

            <div class="bouquet-visual">
                ${bouquet.emoji}
            </div>

            <h3>
                ${bouquet.name}
            </h3>

            <p>
                ${bouquet.description}
            </p>

            <div class="product-price">
                ${price}
            </div>

            ${button}

        `;

        bouquetsGrid.appendChild(card);

    });

}


/* =========================================
   AGREGAR PRODUCTO
========================================= */

function addProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );

    addToCart(
        "producto",
        product.id,
        product.name,
        product.price
    );

}


/* =========================================
   AGREGAR COMBO
========================================= */

function addCombo(id) {

    const combo =
        combos.find(
            item => item.id === id
        );

    addToCart(
        "combo",
        combo.id,
        `Combo ${combo.name}`,
        combo.price
    );

}


/* =========================================
   AGREGAR RAMO
========================================= */

function addBouquet(id) {

    const bouquet =
        bouquets.find(
            item => item.id === id
        );

    addToCart(
        "ramo",
        bouquet.id,
        bouquet.name,
        bouquet.price
    );

}


/* =========================================
   CARRITO
========================================= */

function addToCart(
    type,
    id,
    name,
    price
) {

    const existing =
        cart.find(
            item =>
                item.type === type &&
                item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            type,
            id,
            name,
            price,
            quantity: 1

        });

    }


    saveCart();

    renderCart();

    openCart();

}


/* =========================================
   MOSTRAR CARRITO
========================================= */

function renderCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let quantityTotal = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>
                Tu carrito está vacío 🛒
            </p>
        `;

    }


    cart.forEach(
        (item, index) => {

            const subtotal =
                item.price *
                item.quantity;

            total += subtotal;

            quantityTotal +=
                item.quantity;


            const div =
                document.createElement("div");

            div.className =
                "cart-item";


            div.innerHTML = `

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p>
                        ${money(item.price)}
                    </p>

                    <button
                        onclick="changeQuantity(${index},-1)">
                        −
                    </button>

                    <b>
                        ${item.quantity}
                    </b>

                    <button
                        onclick="changeQuantity(${index},1)">
                        +
                    </button>

                    <br>

                    <button
                        onclick="removeItem(${index})">

                        Eliminar

                    </button>

                </div>

            `;


            cartItems.appendChild(div);

        }
    );


    cartTotal.textContent =
        money(total);

    cartCount.textContent =
        quantityTotal;

}


/* =========================================
   CANTIDAD
========================================= */

function changeQuantity(
    index,
    amount
) {

    if (!cart[index])
        return;


    cart[index].quantity +=
        amount;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(index,1);

    }


    saveCart();

    renderCart();

}


/* =========================================
   ELIMINAR
========================================= */

function removeItem(index) {

    cart.splice(index,1);

    saveCart();

    renderCart();

}


/* =========================================
   ABRIR CARRITO
========================================= */

function openCart() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("show");

}


/* =========================================
   CERRAR CARRITO
========================================= */

function closeCart() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("show");

}


/* =========================================
   WHATSAPP
========================================= */

function sendOrder() {

    if (cart.length === 0) {

        alert(
            "Agrega algo al carrito primero 🛒"
        );

        return;

    }


    let message =
        "✨ PEDIDO KOOKIE POP ✨\n\n";

    let total = 0;


    cart.forEach(item => {

        const subtotal =
            item.price *
            item.quantity;

        total += subtotal;


        message +=
            `• ${item.name} x${item.quantity} — ${money(subtotal)}\n`;

    });


    message +=
        `\n💜 TOTAL: ${money(total)}\n\n`;

    message +=
        "Hola Kookie Pop 💜 quiero realizar este pedido.";


    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================
   PERSONALIZACIÓN
========================================= */

function personalize() {

    const message =
        "Hola Kookie Pop 💜\n\n" +
        "Quiero personalizar un pedido.\n" +
        "Quiero contarles mi idea, colores, grupo/artista y fotos.";

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank"
    );

}


/* =========================================
   RAMO VIP
========================================= */

function customBouquet() {

    const message =
        "Hola Kookie Pop 🌸💜\n\n" +
        "Quiero cotizar un Ramo VIP personalizado.\n\n" +
        "Quiero elegir la cantidad de photocards, " +
        "la cantidad de flores y el estilo.";

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank"
    );

}


/* =========================================
   GALERÍA
========================================= */

const imageUpload =
    document.getElementById(
        "imageUpload"
    );

const galleryGrid =
    document.getElementById(
        "galleryGrid"
    );


imageUpload.addEventListener(
    "change",
    function(event) {

        const files =
            event.target.files;


        [...files].forEach(
            file => {

                const reader =
                    new FileReader();


                reader.onload =
                    function(e) {

                        const img =
                            document.createElement(
                                "img"
                            );

                        img.src =
                            e.target.result;

                        galleryGrid.appendChild(
                            img
                        );

                    };


                reader.readAsDataURL(
                    file
                );

            }
        );

    }
);


/* =========================================
   BOTONES
========================================= */

document
    .getElementById("openCart")
    .onclick =
    openCart;


document
    .getElementById("closeCart")
    .onclick =
    closeCart;


document
    .getElementById("cartOverlay")
    .onclick =
    closeCart;


document
    .getElementById("sendOrder")
    .onclick =
    sendOrder;


document
    .getElementById("clearCart")
    .onclick =
    function() {

        cart = [];

        saveCart();

        renderCart();

    };


document
    .getElementById("personalizeButton")
    .onclick =
    personalize;


/* =========================================
   WHATSAPP DIRECTO
========================================= */

document
    .getElementById("whatsappLink")
    .href =
    `https://wa.me/${WHATSAPP}`;


/* =========================================
   INICIAR
========================================= */

renderProducts();

renderCombos();

renderBouquets();

renderCart();
