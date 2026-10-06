/* =====================================================
   KOOKIE POP
   PRODUCTOS + COMBOS + RAMOS
===================================================== */


/* ================= CARRITO ================= */

let cart = [];


/* ================= PRODUCTOS ================= */

const products = [

    {
        name: "Photocard laminada",
        quantity: "X1",
        price: 1500,
        icon: "📸"
    },

    {
        name: "Photocard sin laminar",
        quantity: "X1",
        price: 1000,
        icon: "🖼️"
    },

    {
        name: "Paquete de photocards",
        quantity: "X5",
        price: 7000,
        icon: "📸"
    },

    {
        name: "Paquete de photocards",
        quantity: "X10",
        price: 13000,
        icon: "📸"
    },

    {
        name: "Laminado sticker",
        quantity: "X15",
        price: 10000,
        icon: "✨"
    },

    {
        name: "Foto carnet sin laminar",
        quantity: "X6",
        price: 5000,
        icon: "🪪"
    },

    {
        name: "Foto strip",
        quantity: "X5",
        price: 7000,
        icon: "🎞️"
    },

    {
        name: "Separador de libros",
        quantity: "X1",
        price: 1500,
        icon: "📖"
    },

    {
        name: "Manilla",
        quantity: "X1",
        price: 4000,
        icon: "💜"
    },

    {
        name: "Manilla Bestie Friend",
        quantity: "X2",
        price: 7000,
        icon: "🫶"
    },

    {
        name: "Manilla Bestie Threefriend",
        quantity: "X3",
        price: 10000,
        icon: "💖"
    },

    {
        name: "Collar con perla",
        quantity: "X1",
        price: 8000,
        icon: "📿"
    },

    {
        name: "Collar con perla y dije",
        quantity: "X1",
        price: 10000,
        icon: "💎"
    }

];


/* ================= COMBOS ================= */

const combos = [

    {
        name: "Combo Kookie",
        quantity: "3 cosas",
        price: 6000,
        icon: "💜",

        items: [
            "1 manilla",
            "1 photocard laminada",
            "1 separador de libro"
        ]
    },

    {
        name: "Combo K-Pop",
        quantity: "2 cosas",
        price: 13000,
        icon: "🎤",

        items: [
            "Paquete de 5 photocards",
            "1 foto strip x5"
        ]
    },

    {
        name: "Combo Besties",
        quantity: "2 cosas",
        price: 15000,
        icon: "🫶",

        items: [
            "Manilla Besties Three Friends x3",
            "Paquete de 5 photocards"
        ]
    },

    {
        name: "Combo Hobi",
        quantity: "3 cosas",
        price: 12000,
        icon: "💎",

        items: [
            "Collar con perlas",
            "1 manilla",
            "1 photocard laminada"
        ]
    },

    {
        name: "Combo Kookie Pop",
        quantity: "4 cosas",
        price: 25000,
        icon: "👑",

        items: [
            "Collar con perla y dije",
            "Manilla Besties Three Friends x3",
            "Paquete de 5 photocards",
            "Separador de libro"
        ]
    },

    {
        name: "Combo VIP",
        quantity: "9 cosas",
        price: 55000,
        icon: "🔥",

        items: [
            "4 manillas",
            "3 collares",
            "2 láminas de stickers",
            "15 photocards totalmente laminadas",
            "5 flores eternas",
            "1 postal",
            "2 separadores de libros",
            "2 photo strip",
            "5 photo carnet"
        ]
    }

];


/* ================= FORMATO PRECIO ================= */

function formatPrice(price) {

    return new Intl.NumberFormat("es-CO", {

        style: "currency",

        currency: "COP",

        maximumFractionDigits: 0

    }).format(price);

}


/* ================= MOSTRAR PRODUCTOS ================= */

function renderProducts() {

    const grid =
        document.getElementById("productsGrid");

    grid.innerHTML = "";

    products.forEach((product, index) => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-icon">
                ${product.icon}
            </div>

            <h3>
                ${product.name}
            </h3>

            <div class="quantity">
                Cantidad: ${product.quantity}
            </div>

            <div class="price">
                ${formatPrice(product.price)}
            </div>

            <button
                class="add-button"
                onclick="addProduct(${index})">

                🛒 Agregar al carrito

            </button>

        `;

        grid.appendChild(card);

    });

}


/* ================= MOSTRAR COMBOS ================= */

function renderCombos() {

    const grid =
        document.getElementById("combosGrid");

    grid.innerHTML = "";

    combos.forEach((combo, index) => {

        const card =
            document.createElement("article");

        card.className = "combo-card";

        card.innerHTML = `

            <span class="combo-number">
                ${combo.icon} ${combo.quantity}
            </span>

            <h3>
                ${combo.name}
            </h3>

            <div class="combo-price">
                ${formatPrice(combo.price)}
            </div>

            <ul>

                ${combo.items.map(item => `
                    <li>• ${item}</li>
                `).join("")}

            </ul>

            <button
                class="add-button"
                onclick="addCombo(${index})">

                🛒 Agregar al carrito

            </button>

        `;

        grid.appendChild(card);

    });

}


/* ================= AGREGAR PRODUCTO ================= */

function addProduct(index) {

    const product =
        products[index];

    addToCart({

        name:
            `${product.name} (${product.quantity})`,

        price:
            product.price,

        details:
            "Producto personalizado"

    });

}


/* ================= AGREGAR COMBO ================= */

function addCombo(index) {

    const combo =
        combos[index];

    addToCart({

        name:
            combo.name,

        price:
            combo.price,

        details:
            combo.items.join(" • ")

    });

}


/* ================= AGREGAR RAMO ================= */

function addRamo(
    name,
    price,
    details
) {

    addToCart({

        name,
        price,
        details

    });

}


/* ================= CARRITO ================= */

function addToCart(item) {

    cart.push(item);

    updateCart();

    openCart();

}


function updateCart() {

    const container =
        document.getElementById("cartItems");

    const count =
        document.getElementById("cartCount");

    const totalElement =
        document.getElementById("cartTotal");


    count.textContent =
        cart.length;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                🛒

                <h3>
                    Tu carrito está vacío
                </h3>

                <p>
                    Agrega productos para comenzar.
                </p>

            </div>

        `;

        totalElement.textContent =
            "$0";

        return;

    }


    container.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        const element =
            document.createElement("div");

        element.className =
            "cart-item";

        element.innerHTML = `

            <div>

                <h4>
                    ${item.name}
                </h4>

                <small>
                    ${item.details}
                </small>

                <br>

                <button
                    class="remove-item"
                    onclick="removeItem(${index})">

                    Eliminar

                </button>

            </div>

            <div class="cart-item-price">

                ${formatPrice(item.price)}

            </div>

        `;

        container.appendChild(element);

    });


    totalElement.textContent =
        formatPrice(total);

}


function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


function clearCart() {

    cart = [];

    updateCart();

}


/* ================= ABRIR CARRITO ================= */

function openCart() {

    document
        .getElementById("cartDrawer")
        .classList.add("active");

    document
        .getElementById("cartOverlay")
        .classList.add("active");

}


function closeCart() {

    document
        .getElementById("cartDrawer")
        .classList.remove("active");

    document
        .getElementById("cartOverlay")
        .classList.remove("active");

}


/* ================= RAMO VIP ================= */

function openVipRamo() {

    document
        .getElementById("vipModal")
        .classList.add("active");

}


function closeVipRamo() {

    document
        .getElementById("vipModal")
        .classList.remove("active");

}


function addVipRamo() {

    const photos =
        document.getElementById("vipPhotos").value;

    const flowers =
        document.getElementById("vipFlowers").value;

    const style =
        document.getElementById("vipStyle").value;


    if (!photos || !flowers) {

        alert(
            "Por favor indica la cantidad de photocards y flores."
        );

        return;

    }


    let details =
        `${photos} photocards + ${flowers} flores eternas`;


    if (style.trim() !== "") {

        details +=
            ` | Estilo: ${style}`;

    }


    addToCart({

        name:
            "Ramo VIP personalizado",

        price:
            0,

        details

    });


    closeVipRamo();

    document.getElementById("vipPhotos").value = "";

    document.getElementById("vipFlowers").value = "";

    document.getElementById("vipStyle").value = "";


    alert(
        "Ramo VIP agregado. El precio se confirma según la personalización."
    );

}


/* ================= WHATSAPP ================= */

function sendWhatsApp() {

    if (cart.length === 0) {

        alert(
            "Primero agrega algo al carrito."
        );

        return;

    }


    let message =
        "Hola Kookie Pop 💜 quiero hacer un pedido:%0A%0A";


    let total = 0;


    cart.forEach((item, index) => {

        message +=
            `${index + 1}. ${item.name}%0A`;

        message +=
            `Detalle: ${item.details}%0A`;

        if (item.price > 0) {

            message +=
                `Precio: ${formatPrice(item.price)}%0A`;

            total += item.price;

        } else {

            message +=
                `Precio: Por confirmar%0A`;

        }

        message += "%0A";

    });


    message +=
        `Total de productos con precio definido: ${formatPrice(total)}%0A%0A`;

    message +=
        "Quiero confirmar mi pedido ✨";


    /*
       CAMBIA ESTE NÚMERO POR EL WHATSAPP
       DE KOOKIE POP.

       IMPORTANTE:
       poner código de país sin +
       Ejemplo Colombia:
       573001234567
    */

    const phone =
        "573205210973";


    const url =
        `https://wa.me/${phone}?text=${message}`;


    window.open(
        url,
        "_blank"
    );

}


/* ================= INICIAR ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        renderCombos();

        updateCart();

    }
);
