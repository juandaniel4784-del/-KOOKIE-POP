/* =====================================================
   KOOKIE POP
   JAVASCRIPT COMPLETO
===================================================== */


/* =====================================================
   CONFIGURACIÓN
===================================================== */

const WHATSAPP = "573205946508";

const ADMIN_PASSWORD = "KookiePop2026";


/* =====================================================
   PRODUCTOS
===================================================== */

const products = [

    {
        id: 1,
        name: "Photocard laminada",
        description:
            "1 photocard totalmente personalizada y laminada.",
        price: 1500,
        emoji: "📸"
    },

    {
        id: 2,
        name: "Photocard sin laminar",
        description:
            "1 photocard personalizada.",
        price: 1000,
        emoji: "🖼️"
    },

    {
        id: 3,
        name: "Paquete de Photocards x5",
        description:
            "5 photocards personalizadas.",
        price: 7000,
        emoji: "📸"
    },

    {
        id: 4,
        name: "Paquete de Photocards x10",
        description:
            "10 photocards personalizadas.",
        price: 13000,
        emoji: "💿"
    },

    {
        id: 5,
        name: "Lámina de stickers x15",
        description:
            "15 stickers personalizados.",
        price: 10000,
        emoji: "✨"
    },

    {
        id: 6,
        name: "Foto carnet x6",
        description:
            "6 fotos carnet sin laminar.",
        price: 5000,
        emoji: "🪪"
    },

    {
        id: 7,
        name: "Foto Strip x5",
        description:
            "5 fotos strip personalizadas.",
        price: 7000,
        emoji: "🎞️"
    },

    {
        id: 8,
        name: "Separador de libros",
        description:
            "Separador personalizado.",
        price: 1500,
        emoji: "📖"
    },

    {
        id: 9,
        name: "Manilla",
        description:
            "Manilla personalizada.",
        price: 4000,
        emoji: "📿"
    },

    {
        id: 10,
        name: "Manilla Bestie Friend x2",
        description:
            "2 manillas para compartir.",
        price: 7000,
        emoji: "🎀"
    },

    {
        id: 11,
        name: "Manilla Bestie Three Friends x3",
        description:
            "3 manillas para compartir.",
        price: 10000,
        emoji: "🫶"
    },

    {
        id: 12,
        name: "Collar con perla",
        description:
            "Collar personalizado con perla.",
        price: 8000,
        emoji: "🤍"
    },

    {
        id: 13,
        name: "Collar con perla y dije",
        description:
            "Collar con perla y dije.",
        price: 10000,
        emoji: "💎"
    }

];


/* =====================================================
   COMBOS
===================================================== */

const combos = [

    {
        id: 101,
        name: "BORAHAE",
        description:
            "3 photocards laminadas.",
        price: 4000,
        emoji: "💜"
    },

    {
        id: 102,
        name: "BESTIE",
        description:
            "2 manillas para compartir.",
        price: 7000,
        emoji: "🎀"
    },

    {
        id: 103,
        name: "GOLDEN HOPE",
        description:
            "1 manilla + 2 photocards.",
        price: 6000,
        emoji: "👑"
    },

    {
        id: 104,
        name: "CAJA FAN",
        description:
            "5 photocards + 2 manillas + decoración K-Pop.",
        price: 14000,
        emoji: "🎁"
    }

];


/* =====================================================
   RAMOS
===================================================== */

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
        emoji: "💜"
    },

    {
        id: 204,
        name: "Ramo VIP",
        description:
            "Cantidad de photocards y flores totalmente personalizada.",
        price: 0,
        emoji: "👑",
        custom: true
    }

];


/* =====================================================
   CARRITO
===================================================== */

let cart =
    JSON.parse(
        localStorage.getItem("kookiePopCart")
    ) || [];


/* =====================================================
   ELEMENTOS
===================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const combosGrid =
    document.getElementById("combosGrid");

const bouquetsGrid =
    document.getElementById("bouquetsGrid");

const galleryGrid =
    document.getElementById("galleryGrid");

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

const toast =
    document.getElementById("toast");


/* =====================================================
   DINERO
===================================================== */

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


/* =====================================================
   TOAST
===================================================== */

let toastTimer;

function showToast(message) {

    toast.textContent =
        "✦ " + message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

}


/* =====================================================
   PRODUCTOS
===================================================== */

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

                🛒 Agregar al carrito

            </button>

        `;

        productsGrid.appendChild(card);

    });

}


/* =====================================================
   COMBOS
===================================================== */

function renderCombos() {

    combosGrid.innerHTML = "";

    combos.forEach((combo, index) => {

        const card =
            document.createElement("article");

        card.className =
            "combo-card";

        card.innerHTML = `

            ${
                index === 0
                ?
                `<span class="combo-tag">
                    ✦ FAVORITO ✦
                 </span>`
                :
                ""
            }

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

                🛒 Agregar al carrito

            </button>

        `;

        combosGrid.appendChild(card);

    });

}


/* =====================================================
   RAMOS
===================================================== */

function renderBouquets() {

    bouquetsGrid.innerHTML = "";

    bouquets.forEach(bouquet => {

        const card =
            document.createElement("article");

        card.className =
            "bouquet";

        if (bouquet.custom) {

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

                <div class="combo-price">
                    Cotizar
                </div>

                <button
                    class="product-button"
                    onclick="customBouquet()">

                    💬 Personalizar

                </button>

            `;

        } else {

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

                <div class="combo-price">
                    ${money(bouquet.price)}
                </div>

                <button
                    class="product-button"
                    onclick="addBouquet(${bouquet.id})">

                    🛒 Agregar al carrito

                </button>

            `;

        }

        bouquetsGrid.appendChild(card);

    });

}


/* =====================================================
   AGREGAR PRODUCTO
===================================================== */

function addProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    addToCart(
        product.name,
        product.price
    );

}


/* =====================================================
   AGREGAR COMBO
===================================================== */

function addCombo(id) {

    const combo =
        combos.find(
            item => item.id === id
        );

    if (!combo) return;

    addToCart(
        `Combo ${combo.name}`,
        combo.price
    );

}


/* =====================================================
   AGREGAR RAMO
===================================================== */

function addBouquet(id) {

    const bouquet =
        bouquets.find(
            item => item.id === id
        );

    if (!bouquet) return;

    addToCart(
        bouquet.name,
        bouquet.price
    );

}


/* =====================================================
   AGREGAR AL CARRITO
===================================================== */

function addToCart(name, price) {

    const existing =
        cart.find(
            item => item.name === name
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }

    saveCart();

    showToast(
        `${name} agregado al carrito 💜`
    );

}


/* =====================================================
   GUARDAR
===================================================== */

function saveCart() {

    localStorage.setItem(
        "kookiePopCart",
        JSON.stringify(cart)
    );

    renderCart();

}


/* =====================================================
   CARRITO
===================================================== */

function renderCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div style="font-size:50px;">
                    🛒
                </div>

                <p>
                    Tu carrito está vacío.
                </p>

                <small>
                    Agrega algo de Kookie Pop 💜
                </small>

            </div>

        `;

        cartTotal.textContent =
            money(0);

        cartCount.textContent =
            "0";

        return;
    }


    let total = 0;

    let quantityTotal = 0;


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

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="cart-item-price">
                        ${money(item.price)}
                    </div>

                    <button
                        class="remove-item"
                        onclick="removeItem(${index})">

                        🗑️ Eliminar

                    </button>

                </div>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(${index}, -1)">

                        −

                    </button>

                    <strong>
                        ${item.quantity}
                    </strong>

                    <button
                        onclick="changeQuantity(${index}, 1)">

                        +

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


/* =====================================================
   CAMBIAR CANTIDAD
===================================================== */

function changeQuantity(
    index,
    amount
) {

    if (!cart[index]) return;

    cart[index].quantity +=
        amount;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

    }


    saveCart();

}


/* =====================================================
   ELIMINAR
===================================================== */

function removeItem(index) {

    cart.splice(
        index,
        1
    );

    saveCart();

    showToast(
        "Producto eliminado"
    );

}


/* =====================================================
   ABRIR CARRITO
===================================================== */

function openCart() {

    cartDrawer.classList.add(
        "open"
    );

    cartOverlay.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CERRAR CARRITO
===================================================== */

function closeCart() {

    cartDrawer.classList.remove(
        "open"
    );

    cartOverlay.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


/* =====================================================
   VACIAR
===================================================== */

function clearCart() {

    if (cart.length === 0) return;

    cart = [];

    saveCart();

    showToast(
        "Carrito vacío 🛒"
    );

}


/* =====================================================
   WHATSAPP
===================================================== */

function sendOrder() {

    if (cart.length === 0) {

        showToast(
            "Primero agrega algo al carrito 🛒"
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
        `\n💜 TOTAL: ${money(total)}`;


    message +=
        "\n\nHola Kookie Pop 💜 quiero realizar este pedido.";


    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   PERSONALIZAR
===================================================== */

function personalize() {

    const message =
        "Hola Kookie Pop 💜\n\n" +
        "Quiero personalizar un pedido.\n\n" +
        "Quiero elegir grupo/artista, colores, " +
        "photocards y diseño.";


    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   RAMO VIP
===================================================== */

function customBouquet() {

    const message =
        "Hola Kookie Pop 🌸💜\n\n" +
        "Quiero cotizar un Ramo VIP personalizado.\n\n" +
        "Quiero elegir la cantidad de photocards, " +
        "flores y el estilo.";


    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   ROSA
===================================================== */

function customRose() {

    const message =
        "Hola Kookie Pop 🌹💜\n\n" +
        "Quiero información sobre la Rosa personalizada.\n\n" +
        "Quiero conocer las opciones disponibles.";


    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   GALERÍA
===================================================== */

const defaultGallery = [

    "assets/foto1.jpg",
    "assets/foto2.jpg",
    "assets/foto3.jpg",
    "assets/foto4.jpg",
    "assets/foto5.jpg",
    "assets/foto6.jpg"

];


function renderGallery() {

    galleryGrid.innerHTML = "";

    defaultGallery.forEach(
        src => {

            const img =
                document.createElement("img");

            img.src = src;

            img.alt =
                "Diseño Kookie Pop";

            img.onerror =
                function () {

                    this.style.display =
                        "none";

                };


            galleryGrid.appendChild(img);

        }
    );

}


renderGallery();


/* =====================================================
   ADMIN
===================================================== */

const adminModal =
    document.getElementById(
        "adminModal"
    );

const adminPanel =
    document.getElementById(
        "adminPanel"
    );

const adminPassword =
    document.getElementById(
        "adminPassword"
    );

const adminError =
    document.getElementById(
        "adminError"
    );

const adminImages =
    document.getElementById(
        "adminImages"
    );

const adminPreview =
    document.getElementById(
        "adminPreview"
    );


document
    .getElementById("adminButton")
    .addEventListener(
        "click",
        () => {

            adminModal.classList.add(
                "show"
            );

            adminPassword.focus();

        }
    );


document
    .getElementById("closeAdmin")
    .addEventListener(
        "click",
        () => {

            adminModal.classList.remove(
                "show"
            );

        }
    );


document
    .getElementById("loginAdmin")
    .addEventListener(
        "click",
        loginAdmin
    );


adminPassword.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            loginAdmin();

        }

    }
);


function loginAdmin() {

    if (
        adminPassword.value ===
        ADMIN_PASSWORD
    ) {

        adminModal.classList.remove(
            "show"
        );

        adminPanel.classList.add(
            "show"
        );

        adminError.textContent =
            "";

        adminPassword.value =
            "";

    } else {

        adminError.textContent =
            "❌ Contraseña incorrecta.";

    }

}


/* =====================================================
   PANEL ADMIN
===================================================== */

document
    .getElementById("closePanel")
    .addEventListener(
        "click",
        () => {

            adminPanel.classList.remove(
                "show"
            );

        }
    );


document
    .getElementById("logoutAdmin")
    .addEventListener(
        "click",
        () => {

            adminPanel.classList.remove(
                "show"
            );

            adminPreview.innerHTML =
                "";

        }
    );


adminImages.addEventListener(
    "change",
    event => {

        adminPreview.innerHTML =
            "";

        const files =
            Array.from(
                event.target.files
            );


        files.forEach(file => {

            const reader =
                new FileReader();


            reader.onload =
                e => {

                    const img =
                        document.createElement(
                            "img"
                        );

                    img.src =
                        e.target.result;

                    img.alt =
                        "Vista previa";

                    adminPreview.appendChild(
                        img
                    );

                };


            reader.readAsDataURL(file);

        });

    }
);


/* =====================================================
   EVENTOS
===================================================== */

document
    .getElementById("openCart")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


cartOverlay.addEventListener(
    "click",
    closeCart
);


document
    .getElementById("sendOrder")
    .addEventListener(
        "click",
        sendOrder
    );


document
    .getElementById("clearCart")
    .addEventListener(
        "click",
        clearCart
    );


document
    .getElementById("personalizeButton")
    .addEventListener(
        "click",
        personalize
    );


document
    .getElementById("whatsappLink")
    .addEventListener(
        "click",
        personalize
    );


/* =====================================================
   ESC PARA CERRAR
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeCart();

            adminModal.classList.remove(
                "show"
            );

            adminPanel.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   INICIO
===================================================== */

renderProducts();

renderCombos();

renderBouquets();

renderCart();
