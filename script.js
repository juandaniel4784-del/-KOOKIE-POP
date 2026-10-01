/* ==================================================
   GOLDEN HOPE
   JAVASCRIPT COMPLETO
================================================== */

const WHATSAPP = "573205946508";

/* ==================================================
   PRODUCTOS
================================================== */

const products = [

    {
        id: 0,
        name: "Photocard laminada",
        description: "Photocard individual para tu colección K-POP.",
        price: 0,
        emoji: "📸",
        available: false
    },

    {
        id: 1,
        name: "Pulsera K-POP",
        description: "Manilla para llevar tu fandom contigo.",
        price: 0,
        emoji: "💜",
        available: false
    },

    {
        id: 2,
        name: "Hoja de stickers",
        description: "Stickers para decorar tus libretas y accesorios.",
        price: 0,
        emoji: "✨",
        available: false
    },

    {
        id: 3,
        name: "Postcard K-POP",
        description: "Postal decorativa para tu colección.",
        price: 0,
        emoji: "💌",
        available: false
    },

    {
        id: 4,
        name: "Caja SUPER FAN",
        description:
            "1 sticker sheet + 1 postcard + 5 photocards + 2 bracelets + decoración K-POP.",
        price: 30000,
        emoji: "👑",
        available: true
    }

];


/* ==================================================
   COMBOS
================================================== */

const combos = [

    {
        id: 0,
        name: "BORAHAE",
        description: "3 photocards laminadas.",
        price: 4000,
        emoji: "💜"
    },

    {
        id: 1,
        name: "BESTIE",
        description: "2 letter bracelets para compartir.",
        price: 7000,
        emoji: "🎀"
    },

    {
        id: 2,
        name: "GOLDEN HOPE",
        description: "1 bracelet + 2 photocards.",
        price: 6000,
        emoji: "👑"
    },

    {
        id: 3,
        name: "CAJA FAN",
        description:
            "5 photocards + 2 bracelets + decoración K-POP.",
        price: 14000,
        emoji: "🎁"
    }

];


/* ==================================================
   CARRITO
================================================== */

let cart = JSON.parse(
    localStorage.getItem("goldenHopeCart")
) || [];


/* ==================================================
   ELEMENTOS
================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const combosGrid =
    document.getElementById("combosGrid");

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


/* ==================================================
   FORMATO DE PRECIO
================================================== */

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


/* ==================================================
   RENDER PRODUCTOS
================================================== */

function renderProducts() {

    productsGrid.innerHTML = "";

    products
        .filter(product => product.id !== 4)
        .forEach(product => {

            const priceHTML =
                product.available
                    ? money(product.price)
                    : "Precio por definir";

            const buttonHTML =
                product.available
                    ?
                    `
                    <button
                        class="product-button add-product"
                        data-add="${product.id}">
                        🛒 Agregar
                    </button>
                    `
                    :
                    `
                    <button
                        class="product-button"
                        onclick="askProduct('${product.name}')">
                        💬 Consultar precio
                    </button>
                    `;

            const card = document.createElement("article");

            card.className = "product-card";

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
                    ${priceHTML}
                </div>

                ${buttonHTML}

            `;

            productsGrid.appendChild(card);

        });

}


/* ==================================================
   RENDER COMBOS
================================================== */

function renderCombos() {

    combosGrid.innerHTML = "";

    combos.forEach((combo, index) => {

        const card =
            document.createElement("article");

        card.className =
            "combo-card " +
            (index === 2 ? "featured" : "");

        card.innerHTML = `

            ${
                index === 2
                ?
                `<span class="combo-tag">
                    ✦ MÁS GOLDEN ✦
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
                class="product-button add-combo"
                data-combo="${combo.id}">
                🛒 Agregar al carrito
            </button>

        `;

        combosGrid.appendChild(card);

    });

}


/* ==================================================
   AGREGAR PRODUCTO
================================================== */

function addProduct(id) {

    const product =
        products.find(
            item => item.id === Number(id)
        );

    if (!product) return;

    if (!product.available) {

        askProduct(product.name);

        return;
    }

    const existing =
        cart.find(
            item =>
                item.type === "product" &&
                item.id === product.id
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            type: "product",

            id: product.id,

            name: product.name,

            price: product.price,

            quantity: 1

        });

    }

    saveCart();

    showToast(
        `${product.name} agregado 💜`
    );

}


/* ==================================================
   AGREGAR COMBO
================================================== */

function addCombo(id) {

    const combo =
        combos.find(
            item => item.id === Number(id)
        );

    if (!combo) return;

    const existing =
        cart.find(
            item =>
                item.type === "combo" &&
                item.id === combo.id
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            type: "combo",

            id: combo.id,

            name: `Combo ${combo.name}`,

            price: combo.price,

            quantity: 1

        });

    }

    saveCart();

    showToast(
        `${combo.name} agregado al carrito 💜`
    );

}


/* ==================================================
   GUARDAR CARRITO
================================================== */

function saveCart() {

    localStorage.setItem(
        "goldenHopeCart",
        JSON.stringify(cart)
    );

    renderCart();

}


/* ==================================================
   RENDER CARRITO
================================================== */

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
                    Agrega algo de Golden Hope 💜
                </small>

            </div>

        `;

        cartTotal.textContent =
            money(0);

        cartCount.textContent = "0";

        return;
    }

    let total = 0;
    let quantityTotal = 0;

    cart.forEach((item, index) => {

        total +=
            item.price *
            item.quantity;

        quantityTotal +=
            item.quantity;

        const div =
            document.createElement("div");

        div.className = "cart-item";

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
                    data-remove="${index}">
                    Eliminar
                </button>

            </div>

            <div class="quantity">

                <button
                    data-minus="${index}">
                    −
                </button>

                <strong>
                    ${item.quantity}
                </strong>

                <button
                    data-plus="${index}">
                    +
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


/* ==================================================
   CANTIDAD
================================================== */

function changeQuantity(index, amount) {

    if (!cart[index]) return;

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    saveCart();

}


/* ==================================================
   ELIMINAR
================================================== */

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    showToast(
        "Producto eliminado"
    );

}


/* ==================================================
   ABRIR CARRITO
================================================== */

function openCart() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


/* ==================================================
   CERRAR CARRITO
================================================== */

function closeCart() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("show");

    document.body.style.overflow =
        "";

}


/* ==================================================
   TOAST
================================================== */

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


/* ==================================================
   PREGUNTAR PRECIO
================================================== */

function askProduct(name) {

    const message =
        `Hola Golden Hope 💜\n\nEstoy interesado/a en: ${name}\n\n¿Me pueden decir el precio y disponibilidad?`;

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


/* ==================================================
   WHATSAPP CARRITO
================================================== */

function sendOrder() {

    if (cart.length === 0) {

        showToast(
            "Primero agrega algo al carrito 🛒"
        );

        return;
    }

    let message =
        "✨ PEDIDO GOLDEN HOPE ✨\n\n";

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
        `\n💰 TOTAL: ${money(total)}\n\n`;

    message +=
        "Hola 💜 quisiera realizar este pedido. ¿Me indican cómo continuar?";

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


/* ==================================================
   PERSONALIZACIÓN
================================================== */

function personalize() {

    const message =
        `Hola Golden Hope 💜\n\nQuiero personalizar un pedido.\n\nQuisiera preguntar por las opciones disponibles de K-POP, colores y diseños.`;

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


/* ==================================================
   GALERÍA
================================================== */

const imageUpload =
    document.getElementById("imageUpload");

const galleryGrid =
    document.getElementById("galleryGrid");


imageUpload.addEventListener(
    "change",
    function(event) {

        const files =
            Array.from(event.target.files);

        if (!files.length) return;

        const empty =
            galleryGrid.querySelector(
                ".gallery-empty"
            );

        if (empty) {
            empty.remove();
        }

        files.forEach(file => {

            if (!file.type.startsWith("image/")) {
                return;
            }

            const reader =
                new FileReader();

            reader.onload = function(e) {

                const item =
                    document.createElement("div");

                item.className =
                    "gallery-item";

                item.innerHTML = `

                    <img
                        src="${e.target.result}"
                        alt="Producto Golden Hope">

                `;

                galleryGrid.appendChild(item);

            };

            reader.readAsDataURL(file);

        });

        showToast(
            "Fotos agregadas a la galería 📸"
        );

    }
);


/* ==================================================
   RESEÑAS
================================================== */

let selectedStars = 0;

const starsSelector =
    document.getElementById(
        "starsSelector"
    );

const reviewName =
    document.getElementById(
        "reviewName"
    );

const reviewText =
    document.getElementById(
        "reviewText"
    );

const reviewsList =
    document.getElementById(
        "reviewsList"
    );

const addReviewButton =
    document.getElementById(
        "addReview"
    );


starsSelector.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "[data-star]"
            );

        if (!button) return;

        selectedStars =
            Number(
                button.dataset.star
            );

        updateStars();

    }
);


function updateStars() {

    const buttons =
        starsSelector.querySelectorAll(
            "button"
        );

    buttons.forEach(button => {

        const number =
            Number(
                button.dataset.star
            );

        button.classList.toggle(
            "active",
            number <= selectedStars
        );

    });

}


/* ==================================================
   CARGAR RESEÑAS
================================================== */

let reviews =
    JSON.parse(
        localStorage.getItem(
            "goldenHopeReviews"
        )
    ) || [

        {
            name: "Sofi",
            text:
                "Me encantó mi pedido, todo llegó muy bonito 💜",
            stars: 5
        },

        {
            name: "Valentina",
            text:
                "Las photocards están hermosas y el combo está precioso.",
            stars: 5
        }

    ];


function renderReviews() {

    reviewsList.innerHTML = "";

    reviews.forEach(review => {

        const article =
            document.createElement(
                "article"
            );

        article.className =
            "review";

        const stars =
            "★".repeat(review.stars) +
            "☆".repeat(5 - review.stars);

        article.innerHTML = `

            <div class="review-stars">
                ${stars}
            </div>

            <p>
                “${review.text}”
            </p>

            <strong>
                — ${review.name}
            </strong>

        `;

        reviewsList.appendChild(
            article
        );

    });

}


addReviewButton.addEventListener(
    "click",
    function() {

        const name =
            reviewName.value.trim();

        const text =
            reviewText.value.trim();

        if (!name) {

            showToast(
                "Escribe tu nombre 💜"
            );

            return;
        }

        if (!text) {

            showToast(
                "Escribe tu reseña ✍️"
            );

            return;
        }

        if (selectedStars === 0) {

            showToast(
                "Selecciona tus estrellas ⭐"
            );

            return;
        }

        reviews.unshift({

            name: name,

            text: text,

            stars: selectedStars

        });

        localStorage.setItem(
            "goldenHopeReviews",
            JSON.stringify(reviews)
        );

        reviewName.value = "";

        reviewText.value = "";

        selectedStars = 0;

        updateStars();

        renderReviews();

        showToast(
            "¡Reseña publicada! 💜"
        );

    }
);


/* ==================================================
   EVENTOS GENERALES
================================================== */

document.addEventListener(
    "click",
    function(event) {

        const addButton =
            event.target.closest(
                "[data-add]"
            );

        if (addButton) {

            addProduct(
                addButton.dataset.add
            );

            return;
        }


        const comboButton =
            event.target.closest(
                "[data-combo]"
            );

        if (comboButton) {

            addCombo(
                comboButton.dataset.combo
            );

            return;
        }


        const plusButton =
            event.target.closest(
                "[data-plus]"
            );

        if (plusButton) {

            changeQuantity(
                Number(
                    plusButton.dataset.plus
                ),
                1
            );

            return;
        }


        const minusButton =
            event.target.closest(
                "[data-minus]"
            );

        if (minusButton) {

            changeQuantity(
                Number(
                    minusButton.dataset.minus
                ),
                -1
            );

            return;
        }


        const removeButton =
            event.target.closest(
                "[data-remove]"
            );

        if (removeButton) {

            removeItem(
                Number(
                    removeButton.dataset.remove
                )
            );

        }

    }
);


/* ==================================================
   BOTONES
================================================== */

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
        function() {

            cart = [];

            saveCart();

            showToast(
                "Carrito vaciado"
            );

        }
    );


document
    .getElementById("personalizeButton")
    .addEventListener(
        "click",
        personalize
    );


/* ==================================================
   MENÚ MÓVIL
================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const nav =
    document.getElementById(
        "nav"
    );


menuButton.addEventListener(
    "click",
    function() {

        nav.classList.toggle(
            "show"
        );

    }
);


nav.addEventListener(
    "click",
    function(event) {

        if (
            event.target.tagName === "A"
        ) {

            nav.classList.remove(
                "show"
            );

        }

    }
);


/* ==================================================
   INICIO
================================================== */

renderProducts();

renderCombos();

renderCart();

renderReviews();

console.log(
    "✨ Golden Hope cargado correctamente"
);
