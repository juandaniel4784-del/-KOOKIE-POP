// ==========================================
// KOOKIE POP - SCRIPT.JS
// ==========================================

const ADMIN_PASSWORD = "KookiePop2026";
const WHATSAPP = "573205946508";

// ==========================================
// PRODUCTOS
// ==========================================

const products = [
    {
        id: 1,
        name: "Photocards laminada X1",
        description: "1 photocard totalmente personalizada y laminada.",
        price: 1500,
        emoji: "📸"
    },
    {
        id: 2,
        name: "Photocards sin laminar X1",
        description: "1 photocard totalmente personalizada.",
        price: 1000,
        emoji: "🖼️"
    },
    {
        id: 3,
        name: "Paquete de photocards X5",
        description: "5 photocards totalmente personalizadas.",
        price: 7000,
        emoji: "📸"
    },
    {
        id: 4,
        name: "Paquete de photocards X10",
        description: "10 photocards totalmente personalizadas.",
        price: 13000,
        emoji: "💿"
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

// ==========================================
// COMBOS
// ==========================================

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
            "1 foto strip X5",
        price: 13000,
        emoji: "🎧"
    },
    {
        id: 103,
        name: "BESTIES",
        description:
            "1 Manilla Besties Three Friends X3\n" +
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
            "1 manilla Besties Three Friends X3\n" +
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

// ==========================================
// RAMOS
// ==========================================

const bouquets = [
    {
        id: 201,
        name: "Ramo Básico",
        description:
            "5 photocards + 10 flores eternas.\n" +
            "Photocards totalmente personalizadas y estilo de flores totalmente personalizado.",
        price: 25000,
        emoji: "🌷"
    },
    {
        id: 202,
        name: "Ramo Outro",
        description:
            "10 photocards + 15 flores eternas.\n" +
            "Photocards totalmente personalizadas y estilo de flores totalmente personalizado.",
        price: 35000,
        emoji: "🌸"
    },
    {
        id: 203,
        name: "Ramo Kookie",
        description:
            "14 photocards + 20 flores eternas.\n" +
            "Photocards totalmente personalizadas y estilo de flores totalmente personalizado.",
        price: 45000,
        emoji: "💐"
    },
    {
        id: 204,
        name: "Ramo VIP",
        description:
            "Cantidad de photocards personalizada + cantidad de flores personalizada.\n" +
            "Photocards totalmente personalizadas y estilo de flores totalmente personalizado.",
        price: null,
        emoji: "👑",
        custom: true
    }
];

// ==========================================
// GALERÍA
// ==========================================

const galleryImages = [
    "assets/foto1.jpg",
    "assets/foto2.jpg",
    "assets/foto3.jpg",
    "assets/foto4.jpg",
    "assets/foto5.jpg",
    "assets/foto6.jpg"
];

// ==========================================
// CARRITO
// ==========================================

let cart = JSON.parse(localStorage.getItem("kookiePopCart")) || [];

// ==========================================
// ELEMENTOS DEL HTML
// ==========================================

const productsGrid = document.getElementById("productsGrid");
const combosGrid = document.getElementById("combosGrid");
const bouquetsGrid = document.getElementById("bouquetsGrid");
const galleryGrid = document.getElementById("galleryGrid");

const openCartButton = document.getElementById("openCart");
const closeCartButton = document.getElementById("closeCart");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const sendOrderButton = document.getElementById("sendOrder");
const clearCartButton = document.getElementById("clearCart");

const personalizeButton = document.getElementById("personalizeButton");

const whatsappLink = document.getElementById("whatsappLink");

const adminButton = document.getElementById("adminButton");
const adminModal = document.getElementById("adminModal");
const closeAdmin = document.getElementById("closeAdmin");
const adminPassword = document.getElementById("adminPassword");
const loginAdmin = document.getElementById("loginAdmin");
const adminError = document.getElementById("adminError");

const adminPanel = document.getElementById("adminPanel");
const closePanel = document.getElementById("closePanel");
const adminImages = document.getElementById("adminImages");
const adminPreview = document.getElementById("adminPreview");
const logoutAdmin = document.getElementById("logoutAdmin");

const toastElement = document.getElementById("toast");

// ==========================================
// FORMATO DE DINERO
// ==========================================

function money(value) {
    if (value === null || value === undefined) {
        return "Personalizado";
    }

    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(value);
}

// ==========================================
// TOAST
// ==========================================

function toast(message) {
    if (!toastElement) return;

    toastElement.textContent = message;
    toastElement.classList.add("show");

    setTimeout(() => {
        toastElement.classList.remove("show");
    }, 2500);
}

// ==========================================
// GUARDAR CARRITO
// ==========================================

function saveCart() {
    localStorage.setItem("kookiePopCart", JSON.stringify(cart));
}

// ==========================================
// RENDER PRODUCTOS
// ==========================================

function renderProducts() {
    if (!productsGrid) return;

    productsGrid.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <span>${product.emoji}</span>
            </div>

            <div class="product-content">
                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="product-bottom">
                    <strong>${money(product.price)}</strong>

                    <button
                        class="add-button"
                        onclick="addProduct(${product.id})">
                        Agregar
                    </button>
                </div>
            </div>
        `;

        productsGrid.appendChild(card);
    });
}

// ==========================================
// RENDER COMBOS
// ==========================================

function renderCombos() {
    if (!combosGrid) return;

    combosGrid.innerHTML = "";

    combos.forEach(combo => {
        const card = document.createElement("article");

        card.className = "combo-card";

        const description = combo.description.replace(/\n/g, "<br>");

        card.innerHTML = `
            <div class="combo-image">
                <span>${combo.emoji}</span>
            </div>

            <div class="combo-content">
                <span class="combo-label">COMBO</span>

                <h3>Combo ${combo.name}</h3>

                <p>${description}</p>

                <div class="product-bottom">
                    <strong>${money(combo.price)}</strong>

                    <button
                        class="add-button"
                        onclick="addCombo(${combo.id})">
                        Agregar
                    </button>
                </div>
            </div>
        `;

        combosGrid.appendChild(card);
    });
}

// ==========================================
// RENDER RAMOS
// ==========================================

function renderBouquets() {
    if (!bouquetsGrid) return;

    bouquetsGrid.innerHTML = "";

    bouquets.forEach(bouquet => {
        const card = document.createElement("article");

        card.className = "bouquet-card";

        const description = bouquet.description.replace(/\n/g, "<br>");

        const button = bouquet.custom
            ? `
                <button
                    class="add-button"
                    onclick="customBouquet()">
                    Personalizar
                </button>
            `
            : `
                <button
                    class="add-button"
                    onclick="addBouquet(${bouquet.id})">
                    Agregar
                </button>
            `;

        card.innerHTML = `
            <div class="bouquet-image">
                <span>${bouquet.emoji}</span>
            </div>

            <div class="bouquet-content">
                <h3>${bouquet.name}</h3>

                <p>${description}</p>

                <div class="product-bottom">
                    <strong>
                        ${bouquet.custom ? "Precio personalizado" : money(bouquet.price)}
                    </strong>

                    ${button}
                </div>
            </div>
        `;

        bouquetsGrid.appendChild(card);
    });
}

// ==========================================
// RENDER GALERÍA
// ==========================================

function renderGallery() {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = "";

    galleryImages.forEach((image, index) => {
        const item = document.createElement("div");

        item.className = "gallery-item";

        item.innerHTML = `
            <img
                src="${image}"
                alt="Producto Kookie Pop ${index + 1}"
                loading="lazy"
                onerror="this.parentElement.classList.add('image-error')"
            >
        `;

        galleryGrid.appendChild(item);
    });
}

// ==========================================
// AGREGAR PRODUCTO
// ==========================================

function addProduct(id) {
    const product = products.find(item => item.id === id);

    if (!product) return;

    addToCart({
        id: product.id,
        type: "product",
        name: product.name,
        price: product.price,
        emoji: product.emoji
    });
}

// ==========================================
// AGREGAR COMBO
// ==========================================

function addCombo(id) {
    const combo = combos.find(item => item.id === id);

    if (!combo) return;

    addToCart({
        id: combo.id,
        type: "combo",
        name: `Combo ${combo.name}`,
        price: combo.price,
        emoji: combo.emoji
    });
}

// ==========================================
// AGREGAR RAMO
// ==========================================

function addBouquet(id) {
    const bouquet = bouquets.find(item => item.id === id);

    if (!bouquet || bouquet.custom) return;

    addToCart({
        id: bouquet.id,
        type: "bouquet",
        name: bouquet.name,
        price: bouquet.price,
        emoji: bouquet.emoji
    });
}

// ==========================================
// FUNCIÓN GENERAL DEL CARRITO
// ==========================================

function addToCart(item) {
    const existing = cart.find(
        cartItem =>
            cartItem.id === item.id &&
            cartItem.type === item.type
    );

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    saveCart();
    renderCart();

    toast(`${item.name} agregado al carrito 🛒`);
}

// ==========================================
// RENDER CARRITO
// ==========================================

function renderCart() {
    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div>🛒</div>
                <p>Tu carrito está vacío.</p>
                <small>Agrega tus productos favoritos de Kookie Pop.</small>
            </div>
        `;

        if (cartTotal) {
            cartTotal.textContent = money(0);
        }

        updateCartCount();
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;

        total += subtotal;

        const row = document.createElement("div");

        row.className = "cart-item";

        row.innerHTML = `
            <div class="cart-item-icon">
                ${item.emoji || "🛍️"}
            </div>

            <div class="cart-item-info">
                <h4>${item.name}</h4>

                <p>${money(item.price)} c/u</p>

                <div class="quantity-controls">
                    <button onclick="changeQuantity(${index}, -1)">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            </div>

            <div class="cart-item-right">
                <strong>${money(subtotal)}</strong>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                    aria-label="Eliminar">
                    ×
                </button>
            </div>
        `;

        cartItems.appendChild(row);
    });

    if (cartTotal) {
        cartTotal.textContent = money(total);
    }

    updateCartCount();
}

// ==========================================
// CONTADOR DEL CARRITO
// ==========================================

function updateCartCount() {
    if (!cartCount) return;

    const quantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = quantity;

    if (quantity > 0) {
        cartCount.style.display = "inline-flex";
    } else {
        cartCount.style.display = "none";
    }
}

// ==========================================
// CAMBIAR CANTIDAD
// ==========================================

function changeQuantity(index, amount) {
    if (!cart[index]) return;

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    renderCart();
}

// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

function removeFromCart(index) {
    if (!cart[index]) return;

    const removed = cart[index];

    cart.splice(index, 1);

    saveCart();
    renderCart();

    toast(`${removed.name} eliminado`);
}

// ==========================================
// ABRIR CARRITO
// ==========================================

function openCart() {
    if (cartOverlay) {
        cartOverlay.classList.add("active");
    }

    if (cartDrawer) {
        cartDrawer.classList.add("active");
    }

    document.body.classList.add("cart-open");
}

// ==========================================
// CERRAR CARRITO
// ==========================================

function closeCart() {
    if (cartOverlay) {
        cartOverlay.classList.remove("active");
    }

    if (cartDrawer) {
        cartDrawer.classList.remove("active");
    }

    document.body.classList.remove("cart-open");
}

// ==========================================
// ENVIAR PEDIDO POR WHATSAPP
// ==========================================

function sendOrder() {
    if (cart.length === 0) {
        toast("Tu carrito está vacío 🛒");
        return;
    }

    let message = "Hola Kookie Pop 💜✨\n";
    message += "Quiero realizar el siguiente pedido:\n\n";

    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;

        total += subtotal;

        message += `• ${item.name} x${item.quantity} - ${money(subtotal)}\n`;
    });

    message += `\nTOTAL: ${money(total)}\n\n`;
    message += "Quiero confirmar mi pedido. 💜";

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

// ==========================================
// VACIAR CARRITO
// ==========================================

function clearCart() {
    if (cart.length === 0) {
        toast("El carrito ya está vacío.");
        return;
    }

    cart = [];

    saveCart();
    renderCart();

    toast("Carrito vaciado 🛒");
}

// ==========================================
// PERSONALIZACIÓN
// ==========================================

function personalize() {
    const message =
        "Hola Kookie Pop 💜✨ Quiero personalizar un producto. Quisiera saber cómo puedo enviar mi diseño y solicitar mi pedido.";

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

// ==========================================
// RAMO PERSONALIZADO
// ==========================================

function customBouquet() {
    const message =
        "Hola Kookie Pop 💐💜 Quiero cotizar un Ramo VIP personalizado. Quiero elegir la cantidad de photocards y flores, además del estilo.";

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

// ==========================================
// ADMIN - ABRIR MODAL
// ==========================================

function openAdminModal() {
    if (!adminModal) return;

    adminModal.classList.add("active");

    if (adminPassword) {
        adminPassword.value = "";
        setTimeout(() => adminPassword.focus(), 100);
    }

    if (adminError) {
        adminError.textContent = "";
    }
}

// ==========================================
// ADMIN - CERRAR MODAL
// ==========================================

function closeAdminModal() {
    if (!adminModal) return;

    adminModal.classList.remove("active");
}

// ==========================================
// ADMIN - LOGIN
// ==========================================

function adminLogin() {
    if (!adminPassword) return;

    const password = adminPassword.value;

    if (password === ADMIN_PASSWORD) {
        closeAdminModal();

        if (adminPanel) {
            adminPanel.classList.add("active");
        }

        if (adminError) {
            adminError.textContent = "";
        }

        toast("Panel de administrador abierto 🔐");
    } else {
        if (adminError) {
            adminError.textContent = "Contraseña incorrecta.";
        }

        adminPassword.value = "";
        adminPassword.focus();
    }
}

// ==========================================
// ADMIN - CERRAR PANEL
// ==========================================

function closeAdminPanel() {
    if (!adminPanel) return;

    adminPanel.classList.remove("active");
}

// ==========================================
// ADMIN - LOGOUT
// ==========================================

function logoutAdminPanel() {
    closeAdminPanel();

    if (adminPassword) {
        adminPassword.value = "";
    }

    toast("Sesión cerrada.");
}

// ==========================================
// ADMIN - PREVISUALIZAR IMÁGENES
// ==========================================

function previewAdminImages(event) {
    if (!adminPreview) return;

    adminPreview.innerHTML = "";

    const files = Array.from(event.target.files || []);

    if (files.length === 0) {
        return;
    }

    files.forEach(file => {
        if (!file.type.startsWith("image/")) {
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            const wrapper = document.createElement("div");

            wrapper.className = "admin-preview-item";

            wrapper.innerHTML = `
                <img
                    src="${e.target.result}"
                    alt="Vista previa"
                >
                <span>${file.name}</span>
            `;

            adminPreview.appendChild(wrapper);
        };

        reader.readAsDataURL(file);
    });
}

// ==========================================
// EVENTOS DEL CARRITO
// ==========================================

if (openCartButton) {
    openCartButton.addEventListener("click", openCart);
}

if (closeCartButton) {
    closeCartButton.addEventListener("click", closeCart);
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCart);
}

if (sendOrderButton) {
    sendOrderButton.addEventListener("click", sendOrder);
}

if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
}

// ==========================================
// PERSONALIZAR
// ==========================================

if (personalizeButton) {
    personalizeButton.addEventListener("click", personalize);
}

// ==========================================
// WHATSAPP
// ==========================================

if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${WHATSAPP}`;
    whatsappLink.target = "_blank";
}

// ==========================================
// ADMIN
// ==========================================

if (adminButton) {
    adminButton.addEventListener("click", openAdminModal);
}

if (closeAdmin) {
    closeAdmin.addEventListener("click", closeAdminModal);
}

if (loginAdmin) {
    loginAdmin.addEventListener("click", adminLogin);
}

if (closePanel) {
    closePanel.addEventListener("click", closeAdminPanel);
}

if (logoutAdmin) {
    logoutAdmin.addEventListener("click", logoutAdminPanel);
}

if (adminImages) {
    adminImages.addEventListener("change", previewAdminImages);
}

// ==========================================
// ENTER EN CONTRASEÑA
// ==========================================

if (adminPassword) {
    adminPassword.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            adminLogin();
        }
    });
}

// ==========================================
// ESC PARA CERRAR
// ==========================================

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    closeCart();
    closeAdminModal();
    closeAdminPanel();
});

// ==========================================
// CLIC FUERA DE MODALES
// ==========================================

if (adminModal) {
    adminModal.addEventListener("click", event => {
        if (event.target === adminModal) {
            closeAdminModal();
        }
    });
}

// ==========================================
// INICIALIZAR
// ==========================================

renderProducts();
renderCombos();
renderBouquets();
renderGallery();
renderCart();

console.log("Kookie Pop cargado correctamente 💜✨");
