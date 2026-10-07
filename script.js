/* =====================================================
   KOOKIE POP - JAVASCRIPT
===================================================== */


/* ================= CONFIGURACIÓN ================= */

const WHATSAPP = "573205946508";

const ADMIN_PASSWORD = "KookiePop2026";


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


/*
    Firebase NO debe impedir que el resto de la página
    funcione.
*/

let db = null;
let auth = null;
let storage = null;

try {

    if (typeof firebase !== "undefined") {

        firebase.initializeApp(firebaseConfig);

        db = firebase.database();

        auth = firebase.auth();

        storage = firebase.storage();

        auth.signInAnonymously()
            .catch(error => {
                console.error(
                    "Firebase Auth:",
                    error
                );
            });

    }

} catch (error) {

    console.error(
        "Firebase no pudo iniciarse:",
        error
    );

}


/* ================= DATOS ================= */

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
            "1 photocard totalmente personalizada.",
        price: 1000,
        emoji: "🖼️"
    },

    {
        id: 3,
        name: "Paquete de Photocards x5",
        description:
            "5 photocards totalmente personalizadas.",
        price: 7000,
        emoji: "📸"
    },

    {
        id: 4,
        name: "Paquete de Photocards x10",
        description:
            "10 photocards totalmente personalizadas.",
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
            "1 separador personalizado.",
        price: 1500,
        emoji: "📖"
    },

    {
        id: 9,
        name: "Manilla",
        description:
            "1 manilla personalizada.",
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
            "1 collar personalizado con perla.",
        price: 8000,
        emoji: "🤍"
    },

    {
        id: 13,
        name: "Collar con perla y dije",
        description:
            "1 collar personalizado con perla y dije.",
        price: 10000,
        emoji: "💎"
    }

];


const combos = [

    {
        id: 101,
        name: "KOOKIE",
        description:
            "1 manilla\n" +
            "1 photocard laminada\n" +
            "1 separador de libro",
        price: 6000,
        emoji: "🐰"
    },

    {
        id: 102,
        name: "K-POP",
        description:
            "1 paquete de 5 photocards\n" +
            "1 foto strip x5",
        price: 13000,
        emoji: "🎧"
    },

    {
        id: 103,
        name: "BESTIES",
        description:
            "1 Manilla Besties Three Friends x3\n" +
            "1 paquete de 5 photocards",
        price: 15000,
        emoji: "🎀"
    },

    {
        id: 104,
        name: "HOBI",
        description:
            "1 collar con perla\n" +
            "1 manilla\n" +
            "1 photocard laminada",
        price: 12000,
        emoji: "🌻"
    },

    {
        id: 105,
        name: "KOOKIE POP",
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


/* ================= ELEMENTOS ================= */

const productsGrid =
    document.getElementById("productsGrid");

const combosGrid =
    document.getElementById("combosGrid");

const bouquetsGrid =
    document.getElementById("bouquetsGrid");

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


/* ================= DINERO ================= */

function money(value) {

    return "$" +
        Number(value).toLocaleString("es-CO");

}


/* ================= PRODUCTOS ================= */

function renderProducts() {

    productsGrid.innerHTML = "";

    products.forEach(product => {

        productsGrid.innerHTML += `

            <article class="product-card">

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
                    onclick="addProduct(${product.id})"
                >
                    🛒 Agregar al carrito
                </button>

            </article>

        `;

    });

}


/* ================= COMBOS ================= */

function renderCombos() {

    combosGrid.innerHTML = "";

    combos.forEach(combo => {

        combosGrid.innerHTML += `

            <article class="combo-card">

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
                    onclick="addCombo(${combo.id})"
                >
                    🛒 Agregar al carrito
                </button>

            </article>

        `;

    });

}


/* ================= RAMOS ================= */

function renderBouquets() {

    bouquetsGrid.innerHTML = "";

    bouquets.forEach(item => {

        const price =
            item.price === null
                ? "Personalizado"
                : money(item.price);

        const button =
            item.custom

                ? `
                    <button
                        class="product-button"
                        onclick="customBouquet()"
                    >
                        💬 Cotizar ramo
                    </button>
                `

                : `
                    <button
                        class="product-button"
                        onclick="addBouquet(${item.id})"
                    >
                        🛒 Agregar al carrito
                    </button>
                `;

        bouquetsGrid.innerHTML += `

            <article class="bouquet-card">

                <div class="card-icon">
                    ${item.emoji}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

                <div class="product-price">
                    ${price}
                </div>

                ${button}

            </article>

        `;

    });

}


/* ================= CARRITO ================= */

let cart =
    JSON.parse(
        localStorage.getItem("kookiePopCart") || "[]"
    );


function saveCart() {

    localStorage.setItem(
        "kookiePopCart",
        JSON.stringify(cart)
    );

    renderCart();

}


function addProduct(id) {

    const item =
        products.find(p => p.id === id);

    if (item) addToCart(item);

}


function addCombo(id) {

    const item =
        combos.find(p => p.id === id);

    if (item) addToCart(item);

}


function addBouquet(id) {

    const item =
        bouquets.find(p => p.id === id);

    if (item) addToCart(item);

}


function addToCart(item) {

    const existing =
        cart.find(p => p.id === item.id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...item,
            quantity: 1
        });

    }

    saveCart();

    showToast("💜 Agregado al carrito");

    openCart();

}


function renderCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let quantity = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-gallery">
                🛒 Tu carrito está vacío.
            </div>
        `;

    }


    cart.forEach((item,index) => {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        quantity += item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div class="cart-item-top">

                    <strong>
                        ${item.emoji} ${item.name}
                    </strong>

                    <b>
                        ${money(subtotal)}
                    </b>

                </div>

                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(${index},-1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${index},1)"
                    >
                        +
                    </button>

                    <button
                        onclick="removeItem(${index})"
                    >
                        🗑️
                    </button>

                </div>

            </div>
        `;

    });

    cartTotal.textContent =
        money(total);

    cartCount.textContent =
        quantity;

}


function changeQuantity(index,change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {

        cart.splice(index,1);

    }

    saveCart();

}


function removeItem(index) {

    cart.splice(index,1);

    saveCart();

}


function openCart() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("show");

}


function closeCart() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("show");

}


function clearCart() {

    cart = [];

    saveCart();

    showToast("🗑️ Carrito vacío");

}


/* ================= WHATSAPP ================= */

function sendOrder() {

    if (!cart.length) {

        showToast("🛒 Tu carrito está vacío");

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

    window.open(
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

}


function personalize() {

    const message =
        "Hola Kookie Pop 💜 quiero personalizar un pedido.";

    window.open(
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

}


function customBouquet() {

    const message =
        "Hola Kookie Pop 🌸💜 quiero cotizar un Ramo VIP personalizado.";

    window.open(
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

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

        button.addEventListener(
            "click",
            () => {

                selectedRating =
                    Number(button.dataset.rating);

                reviewStars
                    .querySelectorAll("button")
                    .forEach(star => {

                        star.classList.toggle(
                            "active",
                            Number(
                                star.dataset.rating
                            ) <= selectedRating
                        );

                    });

            }
        );

    });


/* PUBLICAR RESEÑA */

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
                "⚠️ Selecciona una calificación.";

            return;

        }


        if (!text) {

            reviewMessage.textContent =
                "⚠️ Escribe tu reseña.";

            return;

        }


        if (!db || !auth) {

            reviewMessage.textContent =
                "❌ Firebase no está conectado.";

            return;

        }


        publishReview.disabled = true;

        publishReview.textContent =
            "Publicando...";


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
                "💜 ¡Reseña publicada correctamente!";

            showToast("⭐ Reseña publicada");

        }

        catch(error) {

            console.error(error);

            reviewMessage.textContent =
                "❌ Firebase rechazó la reseña.";

        }


        publishReview.disabled = false;

        publishReview.textContent =
            "⭐ Publicar reseña";

    }
);


/* LEER RESEÑAS */

if (db) {

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


                if (!reviews.length) {

                    reviewsContainer.innerHTML = `
                        <div class="empty-gallery">
                            ✨ Todavía no hay reseñas públicas.
                        </div>
                    `;

                    return;

                }


                reviews.forEach(review => {

                    const card =
                        document.createElement("article");

                    card.className =
                        "public-review";


                    const rating =
                        Number(review.rating) || 0;


                    const stars =
                        "★".repeat(rating) +
                        "☆".repeat(5-rating);


                    const date =
                        review.createdAt
                            ? new Date(
                                review.createdAt
                              ).toLocaleDateString(
                                "es-CO"
                              )
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

            }
        );

}


/* PROTECCIÓN */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");

}


/* ================= GALERÍA ================= */

const galleryGrid =
    document.getElementById("galleryGrid");


if (db) {

    db.ref("gallery")
        .orderByChild("createdAt")
        .on(
            "value",
            snapshot => {

                galleryGrid.innerHTML = "";

                let found = false;


                snapshot.forEach(child => {

                    const data =
                        child.val();


                    if (!data.url) return;


                    found = true;


                    const img =
                        document.createElement("img");


                    img.src =
                        data.url;


                    img.alt =
                        "Kookie Pop";


                    galleryGrid.appendChild(img);

                });


                if (!found) {

                    galleryGrid.innerHTML = `
                        <div class="empty-gallery">
                            ✨ Todavía no hay fotos en la galería.
                        </div>
                    `;

                }

            }
        );

}


/* ================= ADMIN ================= */

const adminModal =
    document.getElementById("adminModal");

const adminPanel =
    document.getElementById("adminPanel");

const adminPassword =
    document.getElementById("adminPassword");

const adminError =
    document.getElementById("adminError");


document
    .getElementById("adminButton")
    .addEventListener(
        "click",
        () => {

            adminModal.classList.add("show");

        }
    );


document
    .getElementById("closeAdmin")
    .addEventListener(
        "click",
        () => {

            adminModal.classList.remove("show");

        }
    );


document
    .getElementById("closePanel")
    .addEventListener(
        "click",
        () => {

            adminPanel.classList.remove("show");

        }
    );


document
    .getElementById("loginAdmin")
    .addEventListener(
        "click",
        loginAdmin
    );


function loginAdmin() {

    if (
        adminPassword.value ===
        ADMIN_PASSWORD
    ) {

        adminModal.classList.remove("show");

        adminPanel.classList.add("show");

        adminError.textContent = "";

    } else {

        adminError.textContent =
            "❌ Contraseña incorrecta.";

    }

}


/* ================= PREVISUALIZAR FOTOS ================= */

const adminImages =
    document.getElementById("adminImages");

const adminPreview =
    document.getElementById("adminPreview");


adminImages.addEventListener(
    "change",
    () => {

        adminPreview.innerHTML = "";


        Array
            .from(adminImages.files)
            .forEach(file => {

                const reader =
                    new FileReader();


                reader.onload =
                    event => {

                        adminPreview.innerHTML += `

                            <img
                                src="${event.target.result}"
                                alt="Vista previa"
                            >

                        `;

                    };


                reader.readAsDataURL(file);

            });

    }
);


/* ================= SUBIR FOTOS ================= */

const uploadGallery =
    document.getElementById("uploadGallery");

const progressBar =
    document.querySelector(".progress-bar");

const progressText =
    document.getElementById("uploadProgressText");


uploadGallery.addEventListener(
    "click",
    async () => {

        const files =
            Array.from(
                adminImages.files
            );


        if (!files.length) {

            showToast(
                "📸 Selecciona alguna foto."
            );

            return;

        }


        if (!storage || !db || !auth) {

            progressText.textContent =
                "❌ Firebase no está disponible.";

            return;

        }


        uploadGallery.disabled = true;


        try {

            if (!auth.currentUser) {

                await auth.signInAnonymously();

            }


            let count = 0;


            for (const file of files) {

                if (
                    !file.type.startsWith("image/")
                ) {

                    continue;

                }


                if (
                    file.size >
                    5 * 1024 * 1024
                ) {

                    continue;

                }


                const safeName =
                    file.name.replace(
                        /[^a-zA-Z0-9._-]/g,
                        "_"
                    );


                const path =
                    "gallery/" +
                    Date.now() +
                    "_" +
                    safeName;


                const ref =
                    storage.ref(path);


                const task =
                    ref.put(file);


                await new Promise(
                    (resolve,reject) => {

                        task.on(
                            "state_changed",

                            snapshot => {

                                const percent =
                                    Math.round(
                                        (
                                            snapshot.bytesTransferred /
                                            snapshot.totalBytes
                                        ) * 100
                                    );


                                progressBar.style.width =
                                    percent + "%";


                                progressText.textContent =
                                    `Subiendo ${count + 1} de ${files.length}: ${percent}%`;

                            },

                            reject,

                            async () => {

                                const url =
                                    await task
                                        .snapshot
                                        .ref
                                        .getDownloadURL();


                                await db
                                    .ref("gallery")
                                    .push({

                                        url: url,

                                        name: file.name,

                                        createdAt:
                                            Date.now()

                                    });


                                resolve();

                            }
                        );

                    }
                );


                count++;

            }


            progressBar.style.width =
                "100%";


            progressText.textContent =
                `✨ ${count} foto(s) publicadas.`;


            adminImages.value = "";

            adminPreview.innerHTML = "";


            showToast(
                "📸 Galería actualizada"
            );

        }

        catch(error) {

            console.error(error);

            progressText.textContent =
                "❌ Error al subir las fotos.";

        }


        uploadGallery.disabled = false;

    }
);


/* ================= BOTONES ================= */

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
    .getElementById("clearCart")
    .addEventListener(
        "click",
        clearCart
    );


document
    .getElementById("sendOrder")
    .addEventListener(
        "click",
        sendOrder
    );


document
    .getElementById("personalizeButton")
    .addEventListener(
        "click",
        personalize
    );


document
    .getElementById("logoutAdmin")
    .addEventListener(
        "click",
        () => {

            adminPanel.classList.remove("show");

        }
    );


/* ================= WHATSAPP ================= */

document
    .getElementById("whatsappLink")
    .href =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(
            "Hola Kookie Pop 💜 quiero información sobre sus productos."
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
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* ================= INICIAR ================= */

renderProducts();

renderCombos();

renderBouquets();

renderCart();
