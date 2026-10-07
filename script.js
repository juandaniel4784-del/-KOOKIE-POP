/* =========================================================
   KOOKIE POP - SCRIPT.JS
   Carrito + WhatsApp + Reseñas + Galería + Admin
========================================================= */

const ADMIN_PASSWORD = "KookiePop2026";
const WHATSAPP = "573205946508";


/* =========================================================
   FIREBASE
========================================================= */

const firebaseConfig = {
    apiKey: "AIzaSyD9FP1B4c9NlHdINhf-Vb0oMvdaua32zSM",
    authDomain: "kookiepop-ccfb9.firebaseapp.com",
    projectId: "kookiepop-ccfb9",
    storageBucket: "kookiepop-ccfb9.firebasestorage.app",
    messagingSenderId: "397148978428",
    appId: "1:397148978428:web:01db457b0b9946d42ceb79",
    measurementId: "G-FBGWDK31LN"
};

let firebaseReady = false;
let reviewsDB = null;
let reviewsAuth = null;
let galleryStorage = null;

try {
    if (typeof firebase !== "undefined") {

        firebase.initializeApp(firebaseConfig);

        reviewsDB = firebase.database();
        reviewsAuth = firebase.auth();
        galleryStorage = firebase.storage();

        firebaseReady = true;

        console.log("🔥 Firebase conectado correctamente.");

    }
} catch (error) {
    console.error("❌ Error conectando Firebase:", error);
}


/* =========================================================
   PRODUCTOS
========================================================= */

const products = [

    {
        id: 1,
        name: "Photocard laminada X1",
        description: "1 photocard totalmente personalizada y laminada.",
        price: 1500,
        emoji: "📸"
    },

    {
        id: 2,
        name: "Photocard sin laminar X1",
        description: "1 photocard totalmente personalizada.",
        price: 1000,
        emoji: "🖼️"
    },

    {
        id: 3,
        name: "Paquete de photocards X5",
        description: "5 photocards totalmente personalizadas.",
        price: 7000,
        emoji: "💿"
    },

    {
        id: 4,
        name: "Paquete de photocards X10",
        description: "10 photocards totalmente personalizadas.",
        price: 13000,
        emoji: "📸"
    },

    {
        id: 5,
        name: "Laminado sticker X15",
        description: "15 stickers personalizados.",
        price: 10000,
        emoji: "✨"
    },

    {
        id: 6,
        name: "Foto carnet sin laminar X6",
        description: "6 fotos carnet sin laminar.",
        price: 5000,
        emoji: "🪪"
    },

    {
        id: 7,
        name: "Foto strip X5",
        description: "5 fotos strip personalizadas.",
        price: 7000,
        emoji: "🎞️"
    },

    {
        id: 8,
        name: "Separador de libros X1",
        description: "1 separador personalizado.",
        price: 1500,
        emoji: "📖"
    },

    {
        id: 9,
        name: "Manilla X1",
        description: "1 manilla personalizada.",
        price: 4000,
        emoji: "📿"
    },

    {
        id: 10,
        name: "Manilla Bestie Friend X2",
        description: "2 manillas para compartir.",
        price: 7000,
        emoji: "🎀"
    },

    {
        id: 11,
        name: "Manilla Bestie Threefriend X3",
        description: "3 manillas para compartir.",
        price: 10000,
        emoji: "🫶"
    },

    {
        id: 12,
        name: "Collar con perla X1",
        description: "1 collar personalizado con perla.",
        price: 8000,
        emoji: "🤍"
    },

    {
        id: 13,
        name: "Collar con perla y dije X1",
        description: "1 collar personalizado con perla y dije.",
        price: 10000,
        emoji: "💎"
    }

];


/* =========================================================
   COMBOS
========================================================= */

const combos = [

    {
        id: 101,
        name: "KOOKIE",
        description: "1 manilla · 1 photocard laminada · 1 separador de libro",
        price: 6000,
        emoji: "🐰"
    },

    {
        id: 102,
        name: "K-POP",
        description: "1 paquete de 5 photocards · 1 foto strip X5",
        price: 13000,
        emoji: "🎧"
    },

    {
        id: 103,
        name: "BESTIES",
        description: "1 Manilla Besties Three Friends X3 · 1 paquete de 5 photocards",
        price: 15000,
        emoji: "🎀"
    },

    {
        id: 104,
        name: "HOBI",
        description: "1 collar con perla · 1 manilla · 1 photocard laminada",
        price: 12000,
        emoji: "🌻"
    },

    {
        id: 105,
        name: "KOOKIE POP",
        description: "1 collar con perla y dije · 1 manilla Besties Three Friends X3 · 1 paquete de 5 photocards · 1 separador",
        price: 25000,
        emoji: "🐰"
    },

    {
        id: 106,
        name: "VIP",
        description: "4 manillas · 3 collares · 2 láminas de stickers · 15 photocards laminadas · 5 flores eternas · 1 postal · 2 separadores · 2 photo strips · 5 fotos carnet",
        price: 55000,
        emoji: "👑"
    }

];


/* =========================================================
   RAMOS
========================================================= */

const bouquets = [

    {
        id: 201,
        name: "Ramo Básico",
        description: "5 photocards + 10 flores eternas. Photocards y flores totalmente personalizadas.",
        price: 25000,
        emoji: "🌷"
    },

    {
        id: 202,
        name: "Ramo Outro",
        description: "10 photocards + 15 flores eternas. Photocards y flores totalmente personalizadas.",
        price: 35000,
        emoji: "🌸"
    },

    {
        id: 203,
        name: "Ramo Kookie",
        description: "14 photocards + 20 flores eternas. Photocards y flores totalmente personalizadas.",
        price: 45000,
        emoji: "💐"
    },

    {
        id: 204,
        name: "Ramo VIP",
        description: "Cantidad de photocards y flores totalmente personalizada.",
        price: null,
        emoji: "👑",
        custom: true
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let cart = JSON.parse(
    localStorage.getItem("kookiePopCart") || "[]"
);

let selectedRating = 0;
let adminFiles = [];


/* =========================================================
   FUNCIONES CORTAS
========================================================= */

const $ = selector =>
    document.querySelector(selector);

const $$ = selector =>
    [...document.querySelectorAll(selector)];


function money(value) {
    return `$${Number(value).toLocaleString("es-CO")}`;
}


function safe(text) {

    return String(text).replace(
        /[&<>"']/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        }[char])
    );

}


function toast(message) {

    const element = $("#toast");

    if (!element) return;

    element.textContent = message;

    element.classList.add("show");

    clearTimeout(window.kookieToast);

    window.kookieToast = setTimeout(() => {
        element.classList.remove("show");
    }, 2800);

}


/* =========================================================
   TODOS LOS ARTÍCULOS
========================================================= */

function getAllItems() {

    return [
        ...products,
        ...combos,
        ...bouquets.filter(
            item => item.price !== null
        )
    ];

}


/* =========================================================
   CREAR TARJETAS
========================================================= */

function createCard(item, type) {

    const price = item.custom
        ? "Personalizado"
        : money(item.price);

    const buttonText = item.custom
        ? "Consultar"
        : "Agregar +";

    return `

        <article class="product-card">

            <div class="card-icon">
                ${item.emoji}
            </div>

            <small>
                ${type}
            </small>

            <h3>
                ${safe(item.name)}
            </h3>

            <p>
                ${safe(item.description)}
            </p>

            <div class="product-card-bottom">

                <strong class="price">
                    ${price}
                </strong>

                <button
                    class="add-to-cart"
                    type="button"
                    data-id="${item.id}"
                >
                    ${buttonText}
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   MOSTRAR CATÁLOGO
========================================================= */

function renderCatalog() {

    const productsGrid = $("#productsGrid");
    const combosGrid = $("#combosGrid");
    const bouquetsGrid = $("#bouquetsGrid");

    if (productsGrid) {

        productsGrid.innerHTML =
            products.map(
                item => createCard(item, "PRODUCTO")
            ).join("");

    }

    if (combosGrid) {

        combosGrid.innerHTML =
            combos.map(
                item => createCard(item, "COMBO")
            ).join("");

    }

    if (bouquetsGrid) {

        bouquetsGrid.innerHTML =
            bouquets.map(
                item => createCard(item, "RAMO")
            ).join("");

    }

    $$(".add-to-cart").forEach(button => {

        button.addEventListener("click", () => {

            addToCart(
                Number(button.dataset.id)
            );

        });

    });

}


/* =========================================================
   AGREGAR AL CARRITO
========================================================= */

function addToCart(id) {

    const item =
        getAllItems().find(
            product => product.id === id
        );

    if (!item) return;

    if (item.custom) {

        sendWhatsApp(
            `Hola Kookie Pop 💜 Quiero cotizar el ${item.name}.`
        );

        return;

    }

    const existing =
        cart.find(
            product => product.id === id
        );

    if (existing) {

        existing.qty++;

    } else {

        cart.push({
            id: id,
            qty: 1
        });

    }

    saveCart();

    renderCart();

    toast(
        `✨ ${item.name} agregado`
    );

}


/* =========================================================
   GUARDAR CARRITO
========================================================= */

function saveCart() {

    localStorage.setItem(
        "kookiePopCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   MOSTRAR CARRITO
========================================================= */

function renderCart() {

    const container = $("#cartItems");

    if (!container) return;

    const allItems = getAllItems();

    cart = cart.filter(row =>
        allItems.some(item =>
            item.id === row.id
        )
    );

    if (!cart.length) {

        container.innerHTML = `

            <div class="empty-cart">

                <div>🛍️</div>

                <h3>
                    Tu carrito está vacío
                </h3>

                <p>
                    Agrega tus favoritos para comenzar.
                </p>

            </div>

        `;

        if ($("#cartTotal"))
            $("#cartTotal").textContent = "$0";

        if ($("#cartCount"))
            $("#cartCount").textContent = "0";

        return;

    }

    let total = 0;
    let quantity = 0;

    container.innerHTML =
        cart.map(row => {

            const item =
                allItems.find(
                    product => product.id === row.id
                );

            if (!item) return "";

            const subtotal =
                item.price * row.qty;

            total += subtotal;
            quantity += row.qty;

            return `

                <div class="cart-item">

                    <div class="cart-item-icon">
                        ${item.emoji}
                    </div>

                    <div class="cart-info">

                        <strong>
                            ${safe(item.name)}
                        </strong>

                        <small>
                            ${money(item.price)}
                        </small>

                        <div class="qty">

                            <button
                                type="button"
                                data-qty-id="${item.id}"
                                data-change="-1"
                            >
                                −
                            </button>

                            <b>
                                ${row.qty}
                            </b>

                            <button
                                type="button"
                                data-qty-id="${item.id}"
                                data-change="1"
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <button
                        type="button"
                        class="remove-item"
                        data-remove-id="${item.id}"
                    >
                        ×
                    </button>

                </div>

            `;

        }).join("");

    if ($("#cartCount"))
        $("#cartCount").textContent = quantity;

    if ($("#cartTotal"))
        $("#cartTotal").textContent = money(total);

    $$("[data-qty-id]").forEach(button => {

        button.addEventListener("click", () => {

            changeQuantity(
                Number(button.dataset.qtyId),
                Number(button.dataset.change)
            );

        });

    });

    $$("[data-remove-id]").forEach(button => {

        button.addEventListener("click", () => {

            removeFromCart(
                Number(button.dataset.removeId)
            );

        });

    });

    saveCart();

}


/* =========================================================
   CANTIDAD
========================================================= */

function changeQuantity(id, change) {

    const item =
        cart.find(
            product => product.id === id
        );

    if (!item) return;

    item.qty += change;

    if (item.qty <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }

    saveCart();

    renderCart();

}


/* =========================================================
   ELIMINAR
========================================================= */

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    renderCart();

    toast("🗑️ Producto eliminado");

}


/* =========================================================
   CARRITO
========================================================= */

function openCart() {

    $("#cartDrawer")
        ?.classList.add("open");

    $("#cartOverlay")
        ?.classList.add("show");

}


function closeCart() {

    $("#cartDrawer")
        ?.classList.remove("open");

    $("#cartOverlay")
        ?.classList.remove("show");

}


/* =========================================================
   WHATSAPP
========================================================= */

function sendWhatsApp(message) {

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   ENVIAR PEDIDO
========================================================= */

function sendOrder() {

    if (!cart.length) {

        toast(
            "🛒 Tu carrito está vacío"
        );

        return;

    }

    const allItems =
        getAllItems();

    let total = 0;

    const lines =
        cart.map(row => {

            const item =
                allItems.find(
                    product =>
                        product.id === row.id
                );

            const subtotal =
                item.price * row.qty;

            total += subtotal;

            return `• ${item.name} x${row.qty} — ${money(subtotal)}`;

        });

    const message = `

Hola Kookie Pop 💜

Quiero hacer este pedido:

${lines.join("\n")}

💰 Total: ${money(total)}

Quiero confirmar disponibilidad y personalización.

`.trim();

    sendWhatsApp(message);

}


/* =========================================================
   RESEÑAS - ESTRELLAS
========================================================= */

function setupReviewStars() {

    const buttons =
        $$("#reviewStars button");

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectedRating =
                    Number(
                        button.dataset.rating
                    );

                buttons.forEach(star => {

                    const value =
                        Number(
                            star.dataset.rating
                        );

                    star.classList.toggle(
                        "active",
                        value <= selectedRating
                    );

                });

            }
        );

    });

}


/* =========================================================
   PUBLICAR RESEÑA
========================================================= */

async function publishReview() {

    const nameInput =
        $("#reviewName");

    const textInput =
        $("#reviewText");

    const message =
        $("#reviewMessage");

    if (!nameInput ||
        !textInput ||
        !message) return;

    const name =
        nameInput.value.trim();

    const text =
        textInput.value.trim();

    if (name.length < 2) {

        message.textContent =
            "⚠️ Escribe tu nombre.";

        return;

    }

    if (selectedRating < 1) {

        message.textContent =
            "⭐ Selecciona una calificación.";

        return;

    }

    if (text.length < 4) {

        message.textContent =
            "💬 Escribe tu reseña.";

        return;

    }

    if (!firebaseReady) {

        message.textContent =
            "❌ Firebase no está conectado.";

        return;

    }

    try {

        message.textContent =
            "⏳ Publicando...";

        if (!reviewsAuth.currentUser) {

            await reviewsAuth
                .signInAnonymously();

        }

        await reviewsDB
            .ref("reviews")
            .push({

                name:
                    name.substring(0, 30),

                rating:
                    selectedRating,

                text:
                    text.substring(0, 300),

                createdAt:
                    Date.now()

            });

        nameInput.value = "";
        textInput.value = "";

        selectedRating = 0;

        $$("#reviewStars button")
            .forEach(star => {

                star.classList.remove(
                    "active"
                );

            });

        message.textContent =
            "💜 ¡Reseña publicada para todos!";

        toast(
            "⭐ Reseña publicada"
        );

    } catch (error) {

        console.error(error);

        message.textContent =
            "❌ No se pudo publicar la reseña.";

    }

}


/* =========================================================
   CARGAR RESEÑAS
========================================================= */

function loadReviews() {

    const container =
        $("#reviewsContainer");

    if (!container) return;

    if (!firebaseReady) {

        container.innerHTML = `

            <div class="no-reviews">

                ⚠️ Firebase no está conectado.

            </div>

        `;

        return;

    }

    reviewsDB
        .ref("reviews")
        .limitToLast(100)
        .on(
            "value",
            snapshot => {

                const data =
                    snapshot.val() || {};

                const reviews =
                    Object.values(data)
                        .sort(
                            (a, b) =>
                                (b.createdAt || 0) -
                                (a.createdAt || 0)
                        );

                renderReviews(
                    reviews
                );

            }
        );

}


/* =========================================================
   MOSTRAR RESEÑAS
========================================================= */

function renderReviews(reviews) {

    const container =
        $("#reviewsContainer");

    if (!container) return;

    if (!reviews.length) {

        container.innerHTML = `

            <div class="no-reviews">

                💌

                <br><br>

                <strong>
                    Aún no hay reseñas públicas.
                </strong>

                <br>

                ¡Sé la primera en dejar una!

            </div>

        `;

        return;

    }

    container.innerHTML =
        reviews.map(review => {

            const name =
                safe(
                    review.name ||
                    "Cliente"
                );

            const text =
                safe(
                    review.text ||
                    ""
                );

            const rating =
                Math.max(
                    1,
                    Math.min(
                        5,
                        Number(
                            review.rating
                        ) || 5
                    )
                );

            const date =
                review.createdAt
                    ? new Date(
                        review.createdAt
                    ).toLocaleDateString(
                        "es-CO"
                    )
                    : "";

            return `

                <article
                    class="public-review-card"
                >

                    <div class="head">

                        <div class="avatar">
                            ${name
                                .charAt(0)
                                .toUpperCase()}
                        </div>

                        <div>

                            <strong>
                                ${name}
                            </strong>

                            <small>
                                ${date}
                            </small>

                        </div>

                    </div>

                    <div class="stars">

                        ${"★".repeat(rating)}

                        <span
                            style="color:#3e3845"
                        >
                            ${"★".repeat(
                                5 - rating
                            )}
                        </span>

                    </div>

                    <p>
                        ${text}
                    </p>

                </article>

            `;

        }).join("");

}


/* =========================================================
   GALERÍA
========================================================= */

function loadGallery() {

    const gallery =
        $("#galleryGrid");

    if (!gallery) return;

    if (!firebaseReady) {

        showGalleryEmpty(
            "Firebase todavía no está conectado."
        );

        return;

    }

    reviewsDB
        .ref("gallery")
        .limitToLast(100)
        .on(
            "value",
            snapshot => {

                const data =
                    snapshot.val() || {};

                const images =
                    Object.values(data)
                        .sort(
                            (a, b) =>
                                (b.createdAt || 0) -
                                (a.createdAt || 0)
                        );

                renderGallery(
                    images
                );

            }
        );

}


/* =========================================================
   MOSTRAR GALERÍA
========================================================= */

function renderGallery(images) {

    const gallery =
        $("#galleryGrid");

    if (!gallery) return;

    if (!images.length) {

        showGalleryEmpty(
            "Todavía no hay fotos. Sube las primeras desde el panel administrador."
        );

        return;

    }

    gallery.innerHTML =
        images.map(image => {

            return `

                <a
                    href="${safe(image.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <img
                        src="${safe(image.url)}"
                        alt="Diseño Kookie Pop"
                        loading="lazy"
                        onerror="this.parentElement.remove()"
                    >

                </a>

            `;

        }).join("");

}


/* =========================================================
   GALERÍA VACÍA
========================================================= */

function showGalleryEmpty(message) {

    const gallery =
        $("#galleryGrid");

    if (!gallery) return;

    gallery.innerHTML = `

        <div
            class="gallery-empty"
            style="grid-column:1/-1"
        >

            <div class="gallery-empty-icon">
                📸
            </div>

            <h3>
                Galería de Kookie Pop
            </h3>

            <p>
                ${safe(message)}
            </p>

        </div>

    `;

}


/* =========================================================
   ADMIN
========================================================= */

function setupAdmin() {

    $("#adminButton")
        ?.addEventListener(
            "click",
            () => {

                $("#adminModal")
                    ?.classList.add("show");

            }
        );

    $("#closeAdmin")
        ?.addEventListener(
            "click",
            () => {

                $("#adminModal")
                    ?.classList.remove("show");

            }
        );

    $("#loginAdmin")
        ?.addEventListener(
            "click",
            loginAdmin
        );

    $("#adminPassword")
        ?.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {

                    loginAdmin();

                }

            }
        );

    $("#closePanel")
        ?.addEventListener(
            "click",
            closeAdminPanel
        );

    $("#logoutAdmin")
        ?.addEventListener(
            "click",
            closeAdminPanel
        );

    $("#adminImages")
        ?.addEventListener(
            "change",
            event => {

                adminFiles =
                    [...event.target.files]
                        .filter(
                            file =>
                                file.type.startsWith(
                                    "image/"
                                )
                        )
                        .filter(
                            file =>
                                file.size <=
                                5 * 1024 * 1024
                        );

                previewAdminImages();

            }
        );

    $("#uploadGallery")
        ?.addEventListener(
            "click",
            uploadGalleryImages
        );

}


/* =========================================================
   LOGIN
========================================================= */

function loginAdmin() {

    const password =
        $("#adminPassword")
            ?.value || "";

    const error =
        $("#adminError");

    if (
        password ===
        ADMIN_PASSWORD
    ) {

        $("#adminModal")
            ?.classList.remove(
                "show"
            );

        $("#adminPanel")
            ?.classList.add(
                "show"
            );

        if (error)
            error.textContent = "";

    } else {

        if (error) {

            error.textContent =
                "❌ Contraseña incorrecta.";

        }

    }

}


/* =========================================================
   CERRAR ADMIN
========================================================= */

function closeAdminPanel() {

    $("#adminPanel")
        ?.classList.remove(
            "show"
        );

    adminFiles = [];

    const preview =
        $("#adminPreview");

    if (preview)
        preview.innerHTML = "";

    const input =
        $("#adminImages");

    if (input)
        input.value = "";

}


/* =========================================================
   PREVISUALIZAR FOTOS
========================================================= */

function previewAdminImages() {

    const preview =
        $("#adminPreview");

    if (!preview) return;

    preview.innerHTML = "";

    adminFiles.forEach(file => {

        const url =
            URL.createObjectURL(file);

        const box =
            document.createElement("div");

        box.className =
            "preview-item";

        const img =
            document.createElement("img");

        img.src = url;

        img.alt =
            "Vista previa";

        box.appendChild(img);

        preview.appendChild(box);

    });

}


/* =========================================================
   SUBIR FOTOS
========================================================= */

async function uploadGalleryImages() {

    const message =
        $("#uploadMessage");

    if (!adminFiles.length) {

        if (message)
            message.textContent =
                "📸 Selecciona una o varias fotos.";

        return;

    }

    if (!firebaseReady) {

        if (message)
            message.textContent =
                "❌ Firebase no está conectado.";

        return;

    }

    try {

        if (!reviewsAuth.currentUser) {

            await reviewsAuth
                .signInAnonymously();

        }

        message.textContent =
            "🚀 Subiendo fotos...";

        const total =
            adminFiles.length;

        let uploaded = 0;

        for (const file of adminFiles) {

            const safeName =
                file.name.replace(
                    /[^\w.\-]+/g,
                    "_"
                );

            const filePath =
                `gallery/${Date.now()}_${Math.random()
                    .toString(36)
                    .substring(2, 8)}_${safeName}`;

            const storageRef =
                galleryStorage.ref(filePath);

            const uploadTask =
                storageRef.put(file);

            await new Promise(
                (resolve, reject) => {

                    uploadTask.on(

                        "state_changed",

                        snapshot => {

                            const current =
                                (
                                    snapshot.bytesTransferred /
                                    snapshot.totalBytes
                                ) * 100;

                            const totalProgress =
                                (
                                    (
                                        uploaded +
                                        current / 100
                                    ) /
                                    total
                                ) * 100;

                            updateProgress(
                                totalProgress
                            );

                        },

                        error => {

                            reject(error);

                        },

                        async () => {

                            try {

                                const url =
                                    await uploadTask
                                        .snapshot
                                        .ref
                                        .getDownloadURL();

                                await reviewsDB
                                    .ref("gallery")
                                    .push({

                                        url:
                                            url,

                                        name:
                                            file.name,

                                        createdAt:
                                            Date.now()

                                    });

                                uploaded++;

                                resolve();

                            } catch (error) {

                                reject(error);

                            }

                        }

                    );

                }
            );

        }

        updateProgress(100);

        message.textContent =
            "💜 ¡Fotos publicadas correctamente!";

        toast(
            "📸 ¡Fotos subidas a la galería!"
        );

        adminFiles = [];

        if ($("#adminImages"))
            $("#adminImages").value = "";

        if ($("#adminPreview"))
            $("#adminPreview").innerHTML = "";

        setTimeout(() => {

            closeAdminPanel();

        }, 1500);

    } catch (error) {

        console.error(
            "Error subiendo:",
            error
        );

        if (message) {

            message.textContent =
                "❌ Error al subir. Revisa Firebase Storage.";

        }

    }

}


/* =========================================================
   PROGRESO
========================================================= */

function updateProgress(percent) {

    const bar =
        $(".upload-progress-bar");

    const text =
        $("#uploadProgressText");

    if (bar) {

        bar.style.width =
            `${percent}%`;

    }

    if (text) {

        text.textContent =
            `${Math.round(percent)}%`;

    }

}


/* =========================================================
   PERSONALIZACIÓN
========================================================= */

function setupPersonalization() {

    $("#personalizeButton")
        ?.addEventListener(
            "click",
            () => {

                sendWhatsApp(
                    "Hola Kookie Pop 💜 Quiero personalizar un pedido."
                );

            }
        );

}


/* =========================================================
   WHATSAPP
========================================================= */

function setupWhatsApp() {

    const link =
        $("#whatsappLink");

    if (!link) return;

    link.href =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
            "Hola Kookie Pop 💜 Quiero hacer un pedido."
        )}`;

}


/* =========================================================
   EVENTOS
========================================================= */

function setupEvents() {

    $("#openCart")
        ?.addEventListener(
            "click",
            openCart
        );

    $("#closeCart")
        ?.addEventListener(
            "click",
            closeCart
        );

    $("#cartOverlay")
        ?.addEventListener(
            "click",
            closeCart
        );

    $("#sendOrder")
        ?.addEventListener(
            "click",
            sendOrder
        );

    $("#clearCart")
        ?.addEventListener(
            "click",
            () => {

                cart = [];

                saveCart();

                renderCart();

                toast(
                    "🛒 Carrito vaciado"
                );

            }
        );

    $("#publishReview")
        ?.addEventListener(
            "click",
            publishReview
        );

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeCart();

                $("#adminModal")
                    ?.classList.remove(
                        "show"
                    );

                $("#adminPanel")
                    ?.classList.remove(
                        "show"
                    );

            }

        }
    );

}


/* =========================================================
   INICIAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCatalog();

        renderCart();

        setupEvents();

        setupReviewStars();

        setupAdmin();

        setupPersonalization();

        setupWhatsApp();

        loadReviews();

        loadGallery();

        console.log(
            "💜 KOOKIE POP funcionando"
        );

    }
);
