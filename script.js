/* =========================================================
   KOOKIE POP - SCRIPT PRINCIPAL
   Sin Firebase / Sin Galería / Sin Reseñas
========================================================= */


/* ================= CONFIGURACIÓN ================= */

const WHATSAPP = "573205946508";

const CART_KEY = "kookiePopCart";


/* ================= PRODUCTOS ================= */

const products = [

    {
        id: 1,
        name: "Photocard laminada",
        price: 1500,
        icon: "📸"
    },

    {
        id: 2,
        name: "Photocard sin laminar",
        price: 1000,
        icon: "🖼️"
    },

    {
        id: 3,
        name: "Paquete de Photocards x5",
        price: 7000,
        icon: "📸"
    },

    {
        id: 4,
        name: "Paquete de Photocards x10",
        price: 13000,
        icon: "💿"
    },

    {
        id: 5,
        name: "Lámina de stickers x15",
        price: 10000,
        icon: "✨"
    },

    {
        id: 6,
        name: "Foto carnet x6",
        price: 5000,
        icon: "🪪"
    },

    {
        id: 7,
        name: "Foto Strip x5",
        price: 7000,
        icon: "🎞️"
    },

    {
        id: 8,
        name: "Separador de libros",
        price: 1500,
        icon: "📖"
    },

    {
        id: 9,
        name: "Manilla",
        price: 4000,
        icon: "📿"
    },

    {
        id: 10,
        name: "Manilla Bestie Friend x2",
        price: 7000,
        icon: "🎀"
    },

    {
        id: 11,
        name: "Manilla Bestie Three Friends x3",
        price: 10000,
        icon: "🫶"
    },

    {
        id: 12,
        name: "Collar con perla",
        price: 8000,
        icon: "🤍"
    },

    {
        id: 13,
        name: "Collar con perla y dije",
        price: 10000,
        icon: "💎"
    }

];


/* ================= COMBOS ================= */

const combos = [

    {
        id: 101,
        name: "KOOKIE",
        price: 6000,
        icon: "🐰"
    },

    {
        id: 102,
        name: "K-POP",
        price: 13000,
        icon: "🎧"
    },

    {
        id: 103,
        name: "BESTIES",
        price: 15000,
        icon: "🎀"
    },

    {
        id: 104,
        name: "HOBI",
        price: 12000,
        icon: "🌻"
    },

    {
        id: 105,
        name: "KOOKIE POP",
        price: 25000,
        icon: "🐰"
    },

    {
        id: 106,
        name: "VIP",
        price: 55000,
        icon: "👑"
    }

];


/* ================= RAMOS ================= */

const bouquets = [

    {
        id: 201,
        name: "Ramo Básico",
        price: 25000,
        icon: "🌷"
    },

    {
        id: 202,
        name: "Ramo Outro",
        price: 35000,
        icon: "🌸"
    },

    {
        id: 203,
        name: "Ramo Kookie",
        price: 45000,
        icon: "💐"
    },

    {
        id: 204,
        name: "Ramo VIP",
        price: null,
        icon: "👑"
    }

];


/* ================= VARIABLES ================= */

let cart = [];


/* ================= ELEMENTOS ================= */

const productsGrid = document.getElementById("productsGrid");
const combosGrid = document.getElementById("combosGrid");
const bouquetsGrid = document.getElementById("bouquetsGrid");

const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");

const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const sendOrder = document.getElementById("sendOrder");
const clearCart = document.getElementById("clearCart");

const toast = document.getElementById("toast");

const whatsappLink = document.getElementById("whatsappLink");
const personalizeButton = document.getElementById("personalizeButton");


/* ================= FORMATO DE DINERO ================= */

function formatPrice(price) {

    if (price === null || price === undefined) {
        return "Precio personalizado";
    }

    return "$" + price.toLocaleString("es-CO");

}


/* ================= GUARDAR CARRITO ================= */

function saveCart() {

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

}


/* ================= CARGAR CARRITO ================= */

function loadCart() {

    try {

        const savedCart = localStorage.getItem(CART_KEY);

        if (savedCart) {
            cart = JSON.parse(savedCart);
        }

    } catch (error) {

        console.error(
            "No se pudo cargar el carrito:",
            error
        );

        cart = [];

    }

}


/* ================= TOAST ================= */

let toastTimeout;

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* ================= CREAR TARJETA ================= */

function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card";

    const priceText =
        product.price === null
            ? "Precio personalizado"
            : formatPrice(product.price);

    card.innerHTML = `

        <div class="product-icon">
            ${product.icon}
        </div>

        <h3>
            ${product.name}
        </h3>

        <p>
            Producto Kookie Pop
            disponible para pedido.
        </p>

        <div class="product-price">
            ${priceText}
        </div>

        <div class="product-actions">

            <button
                class="add-cart"
                data-id="${product.id}"
            >
                🛒 Agregar al carrito
            </button>

        </div>

    `;

    const button =
        card.querySelector(".add-cart");

    button.addEventListener(
        "click",
        () => {

            addToCart(product);

        }
    );

    return card;

}


/* ================= MOSTRAR PRODUCTOS ================= */

function renderProducts() {

    if (!productsGrid) return;

    productsGrid.innerHTML = "";

    products.forEach(product => {

        productsGrid.appendChild(
            createProductCard(product)
        );

    });

}


/* ================= MOSTRAR COMBOS ================= */

function renderCombos() {

    if (!combosGrid) return;

    combosGrid.innerHTML = "";

    combos.forEach(combo => {

        combosGrid.appendChild(
            createProductCard(combo)
        );

    });

}


/* ================= MOSTRAR RAMOS ================= */

function renderBouquets() {

    if (!bouquetsGrid) return;

    bouquetsGrid.innerHTML = "";

    bouquets.forEach(bouquet => {

        bouquetsGrid.appendChild(
            createProductCard(bouquet)
        );

    });

}


/* ================= BUSCAR PRODUCTO ================= */

function findProduct(id) {

    const allProducts = [
        ...products,
        ...combos,
        ...bouquets
    ];

    return allProducts.find(
        product => product.id === id
    );

}


/* ================= AGREGAR AL CARRITO ================= */

function addToCart(product) {

    if (!product) return;

    if (product.price === null) {

        personalizeProduct(product);

        return;

    }

    const existingItem = cart.find(
        item => item.id === product.id
    );

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            quantity: 1

        });

    }

    saveCart();

    renderCart();

    updateCartCount();

    showToast(
        `${product.name} fue agregado al carrito 💜`
    );

}


/* ================= PERSONALIZAR PRODUCTO ================= */

function personalizeProduct(product) {

    const message =
        `Hola Kookie Pop 💜\n\n` +
        `Quiero personalizar el producto:\n` +
        `👑 ${product.name}\n\n` +
        `Quisiera conocer el precio y las opciones disponibles.`;

    openWhatsApp(message);

}


/* ================= ELIMINAR PRODUCTO ================= */

function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== id
    );

    saveCart();

    renderCart();

    updateCartCount();

}


/* ================= CAMBIAR CANTIDAD ================= */

function changeQuantity(id, change) {

    const item = cart.find(
        item => item.id === id
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    renderCart();

    updateCartCount();

}


/* ================= TOTAL ================= */

function calculateTotal() {

    return cart.reduce(
        (total, item) => {

            return total +
                (item.price * item.quantity);

        },
        0
    );

}


/* ================= CANTIDAD TOTAL ================= */

function calculateCartCount() {

    return cart.reduce(
        (total, item) => {

            return total + item.quantity;

        },
        0
    );

}


/* ================= ACTUALIZAR CONTADOR ================= */

function updateCartCount() {

    if (!cartCount) return;

    cartCount.textContent =
        calculateCartCount();

}


/* ================= MOSTRAR CARRITO ================= */

function renderCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                🛒

                <p>
                    Tu carrito está vacío.
                </p>

                <span>
                    Agrega algunos productos 💜
                </span>

            </div>

        `;

    } else {

        cart.forEach(item => {

            const cartItem =
                document.createElement("div");

            cartItem.className =
                "cart-item";

            cartItem.innerHTML = `

                <div class="product-icon">
                    ${item.icon}
                </div>

                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${formatPrice(item.price)}
                    </p>

                </div>

                <div class="cart-item-controls">

                    <button
                        data-action="decrease"
                        data-id="${item.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-action="increase"
                        data-id="${item.id}"
                    >
                        +
                    </button>

                    <button
                        data-action="remove"
                        data-id="${item.id}"
                        title="Eliminar"
                    >
                        🗑️
                    </button>

                </div>

            `;

            cartItems.appendChild(
                cartItem
            );

        });

    }

    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(calculateTotal());

    }

    updateCartCount();

}


/* ================= EVENTOS DEL CARRITO ================= */

if (cartItems) {

    cartItems.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest("button");

            if (!button) return;

            const id =
                Number(button.dataset.id);

            const action =
                button.dataset.action;

            if (action === "increase") {

                changeQuantity(id, 1);

            }

            if (action === "decrease") {

                changeQuantity(id, -1);

            }

            if (action === "remove") {

                removeFromCart(id);

            }

        }
    );

}


/* ================= ABRIR CARRITO ================= */

function openCartDrawer() {

    if (!cartDrawer) return;

    cartDrawer.classList.add("active");

    if (cartOverlay) {
        cartOverlay.classList.add("active");
    }

    document.body.style.overflow = "hidden";

}


/* ================= CERRAR CARRITO ================= */

function closeCartDrawer() {

    if (!cartDrawer) return;

    cartDrawer.classList.remove("active");

    if (cartOverlay) {
        cartOverlay.classList.remove("active");
    }

    document.body.style.overflow = "";

}


/* ================= BOTÓN ABRIR ================= */

if (openCart) {

    openCart.addEventListener(
        "click",
        openCartDrawer
    );

}


/* ================= BOTÓN CERRAR ================= */

if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );

}


/* ================= OVERLAY ================= */

if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCartDrawer
    );

}


/* ================= ESCAPE ================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeCartDrawer();

        }

    }
);


/* ================= VACIAR CARRITO ================= */

if (clearCart) {

    clearCart.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "El carrito ya está vacío 🛒"
                );

                return;

            }

            cart = [];

            saveCart();

            renderCart();

            updateCartCount();

            showToast(
                "Carrito vaciado 🗑️"
            );

        }
    );

}


/* ================= WHATSAPP ================= */

function openWhatsApp(message) {

    const url =
        `https://wa.me/${WHATSAPP}?text=` +
        encodeURIComponent(message);

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ================= LINK WHATSAPP ================= */

if (whatsappLink) {

    const message =
        "Hola Kookie Pop 💜 Quiero hacer un pedido.";

    whatsappLink.href =
        `https://wa.me/${WHATSAPP}?text=` +
        encodeURIComponent(message);

}


/* ================= PERSONALIZACIÓN ================= */

if (personalizeButton) {

    personalizeButton.addEventListener(
        "click",
        () => {

            const message =
                `Hola Kookie Pop 💜\n\n` +
                `Quiero hacer un pedido personalizado.\n` +
                `Me gustaría conocer las opciones disponibles.`;

            openWhatsApp(message);

        }
    );

}


/* ================= ENVIAR PEDIDO ================= */

if (sendOrder) {

    sendOrder.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Primero agrega productos al carrito 🛒"
                );

                return;

            }

            let message =
                "Hola Kookie Pop 💜\n\n" +
                "Quiero realizar el siguiente pedido:\n\n";

            cart.forEach(item => {

                message +=
                    `• ${item.name}\n` +
                    `  Cantidad: ${item.quantity}\n` +
                    `  Precio: ${formatPrice(item.price)}\n\n`;

            });

            message +=
                `💰 Total: ${formatPrice(calculateTotal())}\n\n` +
                "Quedo atento/a. ¡Gracias! 💜";

            openWhatsApp(message);

        }
    );

}


/* ================= INICIO ================= */

function init() {

    loadCart();

    renderProducts();

    renderCombos();

    renderBouquets();

    renderCart();

    updateCartCount();

}


/* ================= EJECUTAR ================= */

document.addEventListener(
    "DOMContentLoaded",
    init
);
