/* =====================================================
   KOOKIE POP
===================================================== */


/* ================= CONFIGURACIÓN ================= */

const ADMIN_PASSWORD = "KookiePop2026";
const WHATSAPP = "573205946508";


/* ================= FIREBASE ================= */

const firebaseConfig = {
    apiKey: "AIzaSyD9FP1B4c9NlHdINhf-Vb0oMvdaua32zSM",
    authDomain: "kookiepop-ccfb9.firebaseapp.com",
    projectId: "kookiepop-ccfb9",
    storageBucket: "kookiepop-ccfb9.firebasestorage.app",
    messagingSenderId: "397148978428",
    appId: "1:397148978428:web:01db457b0b9946d42ceb79",
    measurementId: "G-FBGWDK31LN"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();


/* ================= AUTENTICACIÓN ================= */

auth.signInAnonymously()
    .then(() => {
        console.log("Firebase conectado correctamente 💜");
    })
    .catch(error => {
        console.error("Firebase Auth:", error);
    });


/* ================= PRODUCTOS ================= */

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
        name: "Paquete de Photocards x5",
        description: "5 photocards personalizadas.",
        price: 7000,
        emoji: "📸"
    },

    {
        id: 4,
        name: "Paquete de Photocards x10",
        description: "10 photocards personalizadas.",
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
        name: "Foto Strip x5",
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


/* ================= COMBOS ================= */

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
            "1 paquete de 5 photocards\n" +
            "1 foto strip x5",
        price: 13000,
        emoji: "🎧"
    },

    {
        id: 103,
        name: "Besties",
        description:
            "1 Manilla Besties Three Friends x3\n" +
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
            "15 photocards totalmente laminadas\n" +
            "5 flores eternas\n" +
            "1 postal\n" +
            "2 separadores de libros\n" +
            "2 photo strip\n" +
            "5 photo carnet",
        price: 55000,
        emoji: "👑"
    }

];


/* ================= RAMOS ================= */

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


/* ================= VARIABLES ================= */

const productsGrid =
    document.getElementById("productsGrid");

const combosGrid =
    document.getElementById("combosGrid");

const bouquetsGrid =
    document.getElementById("bouquetsGrid");

const galleryGrid =
    document.getElementById("galleryGrid");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.getElementById("cartCount");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

let cart =
    JSON.parse(localStorage.getItem("kookiePopCart") || "[]");


/* ================= DINERO ================= */

function money(value) {

    return "$" +
        Number(value).toLocaleString("es-CO");

}


/* ================= PRODUCTOS ================= */

function renderProducts() {

    productsGrid.innerHTML = "";

    products.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="card-icon">
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


/* ================= COMBOS ================= */

function renderCombos() {

    combosGrid.innerHTML = "";

    combos.forEach(combo => {

        const card =
            document.createElement("article");

        card.className = "combo-card";

        card.innerHTML = `

            <div class="card-icon">
                ${combo.emoji}
            </div>

            <h3>
                Combo ${combo.name}
            </h3>

            <p>
                ${combo.description}
            </p>

            <div class="product-price">
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


/* ================= RAMOS ================= */

function renderBouquets() {

    bouquetsGrid.innerHTML = "";

    bouquets.forEach(bouquet => {

        const card =
            document.createElement("article");

        card.className = "bouquet-card";

        const price =
            bouquet.price === null
                ? "Personalizado"
                : money(bouquet.price);

        const button =
            bouquet.custom

                ? `
                    <button
                        class="product-button"
                        onclick="customBouquet()">

                        💬 Cotizar ramo

                    </button>
                `

                : `
                    <button
                        class="product-button"
                        onclick="addBouquet(${bouquet.id})">

                        🛒 Agregar al carrito

                    </button>
                `;

        card.innerHTML = `

            <div class="card-icon">
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


/* ================= CARRITO ================= */

function addToCart(item) {

    const existing =
        cart.find(product => product.id === item.id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...item,
            quantity: 1
        });

    }

    saveCart();

    showToast("✨ Agregado al carrito");

    openCart();

}


function addProduct(id) {

    const product =
        products.find(item => item.id === id);

    if (product) {
        addToCart(product);
    }

}


function addCombo(id) {

    const combo =
        combos.find(item => item.id === id);

    if (combo) {
        addToCart(combo);
    }

}


function addBouquet(id) {

    const bouquet =
        bouquets.find(item => item.id === id);

    if (bouquet) {
        addToCart(bouquet);
    }

}


function saveCart() {

    localStorage.setItem(
        "kookiePopCart",
        JSON.stringify(cart)
    );

    renderCart();

}


function renderCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let quantityTotal = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="gallery-empty">
                🛒 Tu carrito está vacío.
            </div>
        `;

    }

    cart.forEach((item, index) => {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        quantityTotal += item.quantity;

        const div =
            document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <div class="cart-item-top">

                <strong>
                    ${item.emoji || "💜"}
                    ${item.name}
                </strong>

                <b>
                    ${money(subtotal)}
                </b>

            </div>

            <div class="quantity-controls">

                <button onclick="changeQuantity(${index}, -1)">
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button onclick="changeQuantity(${index}, 1)">
                    +
                </button>

                <button onclick="removeItem(${index})">
                    🗑️
                </button>

            </div>

        `;

        cartItems.appendChild(div);

    });

    cartTotal.textContent =
        money(total);

    cartCount.textContent =
        quantityTotal;

}


function changeQuantity(index, change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();

}


function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    showToast("Producto eliminado");

}


function openCart() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeCart() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("show");

    document.body.style.overflow = "";

}


function clearCart() {

    cart = [];

    saveCart();

    showToast("🛒 Carrito vacío");

}


/* ================= WHATSAPP ================= */

function sendOrder() {

    if (cart.length === 0) {

        showToast("Primero agrega algo al carrito 🛒");

        return;
    }

    let message =
        "✨ *PEDIDO KOOKIE POP* ✨\n\n";

    let total = 0;

    cart.forEach(item => {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        message +=
            `• ${item.name} x${item.quantity} — ${money(subtotal)}\n`;

    });

    message +=
        `\n💜 *TOTAL: ${money(total)}*`;

    message +=
        "\n\nHola Kookie Pop 💜 quiero realizar este pedido.";

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


/* ================= PERSONALIZAR ================= */

function personalize() {

    const message =
        "Hola Kookie Pop 💜\n\n" +
        "Quiero personalizar un pedido.\n\n" +
        "Quiero elegir grupo/artista, colores, " +
        "photocards y diseño.";

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


function customBouquet() {

    const message =
        "Hola Kookie Pop 🌸💜\n\n" +
        "Quiero cotizar un Ramo VIP personalizado.";

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


/* ================= RESEÑAS ================= */

let selectedRating = 0;

const reviewStars =
    document.getElementById("reviewStars");

const reviewName =
    document.getElementById("reviewName");

const reviewText =
    document.getElementById("reviewText");

const publishReview =
    document.getElementById("publishReview");

const reviewMessage =
    document.getElementById("reviewMessage");

const reviewsContainer =
    document.getElementById("reviewsContainer");


/* ESTRELLAS */

reviewStars
    .querySelectorAll("button")
    .forEach(button => {

        button.addEventListener("click", () => {

            selectedRating =
                Number(button.dataset.rating);

            reviewStars
                .querySelectorAll("button")
                .forEach(star => {

                    star.classList.toggle(
                        "active",
                        Number(star.dataset.rating) <= selectedRating
                    );

                });

        });

    });


/* PUBLICAR */

publishReview.addEventListener(
    "click",
    async () => {

        const name =
            reviewName.value.trim();

        const text =
            reviewText.value.trim();

        if (!name) {

            reviewMessage.textContent =
                "⚠️ Escribe tu nombre.";

            return;
        }

        if (!selectedRating) {

            reviewMessage.textContent =
                "⚠️ Selecciona las estrellas.";

            return;
        }

        if (!text) {

            reviewMessage.textContent =
                "⚠️ Escribe tu reseña.";

            return;
        }

        publishReview.disabled = true;

        publishReview.textContent =
            "Publicando... ⏳";

        try {

            if (!auth.currentUser) {

                await auth.signInAnonymously();

            }

            await db
                .ref("reviews")
                .push({

                    name: name,
                    rating: selectedRating,
                    text: text,
                    createdAt: Date.now()

                });

            reviewName.value = "";

            reviewText.value = "";

            selectedRating = 0;

            reviewStars
                .querySelectorAll("button")
                .forEach(star => {

                    star.classList.remove("active");

                });

            reviewMessage.textContent =
                "💜 ¡Tu reseña fue publicada!";

            showToast("⭐ Reseña publicada");

        }

        catch(error) {

            console.error(error);

            reviewMessage.textContent =
                "❌ No se pudo publicar. Revisa Firebase.";

        }

        finally {

            publishReview.disabled = false;

            publishReview.textContent =
                "⭐ Publicar reseña";

        }

    }
);


/* LEER RESEÑAS EN TIEMPO REAL */

db.ref("reviews")
    .orderByChild("createdAt")
    .on(
        "value",
        snapshot => {

            reviewsContainer.innerHTML = "";

            const reviews = [];

            snapshot.forEach(child => {

                reviews.push({
                    id: child.key,
                    ...child.val()
                });

            });

            reviews.reverse();

            if (reviews.length === 0) {

                reviewsContainer.innerHTML = `
                    <div class="gallery-empty">
                        ✨ Sé la primera persona en dejar una reseña.
                    </div>
                `;

                return;
            }

            reviews.forEach(review => {

                const card =
                    document.createElement("article");

                card.className =
                    "public-review-card";

                const stars =
                    "★".repeat(Number(review.rating)) +
                    "☆".repeat(5 - Number(review.rating));

                const date =
                    review.createdAt
                        ? new Date(review.createdAt)
                            .toLocaleDateString("es-CO")
                        : "";

                card.innerHTML = `

                    <div class="stars">
                        ${stars}
                    </div>

                    <p>
                        "${escapeHTML(review.text)}"
                    </p>

                    <strong>
                        — ${escapeHTML(review.name)} 💜
                    </strong>

                    <br>

                    <small>
                        ${date}
                    </small>

                `;

                reviewsContainer.appendChild(card);

            });

        },
        error => {

            console.error(
                "Error leyendo reseñas:",
                error
            );

        }
    );


/* PROTECCIÓN HTML */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* ================= GALERÍA FIREBASE ================= */

function renderGallery(snapshot) {

    galleryGrid.innerHTML = "";

    let hasImages = false;

    snapshot.forEach(child => {

        const data = child.val();

        if (!data.url) return;

        hasImages = true;

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "gallery-item";

        const img =
            document.createElement("img");

        img.src = data.url;

        img.alt =
            "Diseño Kookie Pop";

        wrapper.appendChild(img);

        galleryGrid.appendChild(wrapper);

    });

    if (!hasImages) {

        galleryGrid.innerHTML = `
            <div class="gallery-empty">
                ✨ Aquí aparecerán las fotos de Kookie Pop ✨
            </div>
        `;

    }

}


/* GALERÍA EN TIEMPO REAL */

db.ref("gallery")
    .orderByChild("createdAt")
    .on(
        "value",
        snapshot => {

            renderGallery(snapshot);

        }
    );


/* ================= ADMIN ================= */

const adminModal =
    document.getElementById("adminModal");

const adminPanel =
    document.getElementById("adminPanel");

const adminPassword =
    document.getElementById("adminPassword");

const adminError =
    document.getElementById("adminError");

const adminImages =
    document.getElementById("adminImages");

const adminPreview =
    document.getElementById("adminPreview");

const uploadGallery =
    document.getElementById("uploadGallery");

const uploadProgressBar =
    document.querySelector(".upload-progress-bar");

const uploadProgressText =
    document.getElementById("uploadProgressText");


document
    .getElementById("adminButton")
    .addEventListener("click", () => {

        adminModal.classList.add("show");

        adminPassword.focus();

    });


document
    .getElementById("closeAdmin")
    .addEventListener("click", () => {

        adminModal.classList.remove("show");

    });


document
    .getElementById("closePanel")
    .addEventListener("click", () => {

        adminPanel.classList.remove("show");

    });


document
    .getElementById("loginAdmin")
    .addEventListener("click", loginAdmin);


adminPassword.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            loginAdmin();

        }

    }
);


function loginAdmin() {

    if (adminPassword.value === ADMIN_PASSWORD) {

        adminModal.classList.remove("show");

        adminPanel.classList.add("show");

        adminError.textContent = "";

        adminPassword.value = "";

    } else {

        adminError.textContent =
            "❌ Contraseña incorrecta.";

    }

}


/* PREVISUALIZACIÓN */

adminImages.addEventListener(
    "change",
    () => {

        adminPreview.innerHTML = "";

        const files =
            Array.from(adminImages.files);

        files.forEach(file => {

            const reader =
                new FileReader();

            reader.onload = event => {

                const img =
                    document.createElement("img");

                img.src =
                    event.target.result;

                adminPreview.appendChild(img);

            };

            reader.readAsDataURL(file);

        });

    }
);


/* SUBIR FOTOS */

uploadGallery.addEventListener(
    "click",
    async () => {

        const files =
            Array.from(adminImages.files);

        if (!files.length) {

            showToast("Selecciona alguna foto 📸");

            return;
        }

        if (adminPassword.value !== "" &&
            adminPassword.value !== ADMIN_PASSWORD) {

            return;
        }

        uploadGallery.disabled = true;

        let uploaded = 0;

        try {

            if (!auth.currentUser) {

                await auth.signInAnonymously();

            }

            for (const file of files) {

                if (!file.type.startsWith("image/")) {

                    continue;

                }

                if (file.size > 5 * 1024 * 1024) {

                    showToast(
                        `${file.name} supera los 5 MB`
                    );

                    continue;

                }

                const safeName =
                    file.name
                        .replace(/[^a-zA-Z0-9._-]/g, "_");

                const path =
                    `gallery/${Date.now()}_${safeName}`;

                const storageRef =
                    storage.ref(path);

                const task =
                    storageRef.put(file);

                await new Promise(
                    (resolve, reject) => {

                        task.on(
                            "state_changed",

                            snapshot => {

                                const percent =
                                    Math.round(
                                        snapshot.bytesTransferred /
                                        snapshot.totalBytes *
                                        100
                                    );

                                uploadProgressBar.style.width =
                                    percent + "%";

                                uploadProgressText.textContent =
                                    `Subiendo ${uploaded + 1} de ${files.length}: ${percent}%`;

                            },

                            reject,

                            async () => {

                                const url =
                                    await task.snapshot
                                        .ref.getDownloadURL();

                                await db
                                    .ref("gallery")
                                    .push({

                                        url: url,
                                        name: file.name,
                                        createdAt: Date.now()

                                    });

                                resolve();

                            }
                        );

                    }
                );

                uploaded++;

            }

            uploadProgressBar.style.width = "100%";

            uploadProgressText.textContent =
                `✨ ${uploaded} foto(s) publicada(s) correctamente.`;

            adminImages.value = "";

            adminPreview.innerHTML = "";

            showToast("📸 Galería actualizada");

        }

        catch(error) {

            console.error(error);

            uploadProgressText.textContent =
                "❌ No se pudo subir la foto.";

        }

        finally {

            uploadGallery.disabled = false;

        }

    }
);


/* ================= WHATSAPP ================= */

document
    .getElementById("whatsappLink")
    .href =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hola Kookie Pop 💜 quiero información sobre sus productos."
    )}`;


document
    .getElementById("personalizeButton")
    .addEventListener(
        "click",
        personalize
    );


/* ================= CARRITO EVENTOS ================= */

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
    .getElementById("logoutAdmin")
    .addEventListener(
        "click",
        () => {

            adminPanel.classList.remove("show");

            showToast(
                "Administrador cerrado 🔐"
            );

        }
    );


/* ================= TOAST ================= */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

}


/* ================= INICIAR ================= */

renderProducts();

renderCombos();

renderBouquets();

renderCart();
