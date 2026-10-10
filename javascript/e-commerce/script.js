
let products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
    { id: 2, name: "Headphones", price: 200, category: "Electronics", stock: 15 },
    { id: 3, name: "T-shirt", price: 20, category: "Apparel", stock: 50 }
];

let cart = [];
let editProductID = null;

const productListElmt = document.querySelector("#productList");
const NameElmt = document.querySelector("#Name");
const CategoryElmt = document.querySelector("#Category");
const PriceElmt = document.querySelector("#Price");
const StockElmt = document.querySelector("#Stock");
const addNewBtnElmt = document.querySelector("#addNewBtn");
const cartAmoutElmt = document.querySelector("#cartAmout");
const cartLengthElmt = document.querySelector("#cartLength");
const cartListElmt = document.querySelector("#cartList");

function saveToLocal(p) {
    localStorage.setItem("B98", JSON.stringify(p));
}

function getFromLocal() {
    return JSON.parse(localStorage.getItem("B98")) || [];
}

function saveCartToLocal(c) {
    localStorage.setItem("b98Cart", JSON.stringify(c));
}

function getCartFromLocal() {
    return JSON.parse(localStorage.getItem("b98Cart")) || [];
}

function updateCartLength() {
    if (cartLengthElmt) {
        let cartFromLocal = getCartFromLocal();
        let totalQuantity = cartFromLocal.reduce(
            (total, p) => total + p.quantity,
            0
        );
        cartLengthElmt.innerHTML = totalQuantity;
    }
}

function renderProducts() {
    if (!productListElmt) return;

    const prod = getFromLocal();

    productListElmt.innerHTML = prod.map((product) => `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card text-bg-info" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        ${product.category}
                    </h6>
                    <p>Price: $ ${product.price}</p>
                    <p>Stock: ${product.stock}</p>
                    <button class="btn btn-primary"
                        onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn btn-danger"
                        onclick="deleteProd(${product.id})">Delete</button>
                    <button class="btn btn-outline-primary"
                        onclick="addToCart(${product.id})"
                        ${Number(product.stock) <= 0 ? "disabled" : ""}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

function AddNewProduct() {
    if (!NameElmt || !CategoryElmt || !PriceElmt || !StockElmt) {
        return;
    }

    const name = NameElmt.value.trim();
    const category = CategoryElmt.value.trim();
    const price = Number(PriceElmt.value);
    const stock = Number(StockElmt.value);

    if (
        !name ||
        !category ||
        PriceElmt.value.trim() === "" ||
        StockElmt.value.trim() === "" ||
        !Number.isFinite(price) ||
        !Number.isFinite(stock) ||
        price < 0 ||
        stock < 0
    ) {
        alert("Please enter valid product details.");
        return;
    }

    let prodsFromLocal = getFromLocal();

    if (editProductID === null) {
        const newProductObj = {
            id: Date.now(),
            name: name,
            category: category,
            price: price,
            stock: stock
        };

        prodsFromLocal.push(newProductObj);
    } else {
        const indexProd = prodsFromLocal.findIndex(
            (p) => p.id === editProductID
        );

        if (indexProd === -1) {
            alert("Product not found");
            return;
        }

        prodsFromLocal[indexProd].name = name;
        prodsFromLocal[indexProd].category = category;
        prodsFromLocal[indexProd].price = price;
        prodsFromLocal[indexProd].stock = stock;

        editProductID = null;
    }

    saveToLocal(prodsFromLocal);
    renderProducts();

    addNewBtnElmt.textContent = "Add New Product";

    NameElmt.value = "";
    CategoryElmt.value = "";
    PriceElmt.value = "";
    StockElmt.value = "";
}

if (addNewBtnElmt) {
    addNewBtnElmt.addEventListener("click", AddNewProduct);
}

function deleteProd(ID) {
    const productFromLocal = getFromLocal();
    const indexProd = productFromLocal.findIndex((p) => p.id === ID);

    if (indexProd === -1) {
        alert("Product not found");
        return;
    }

    productFromLocal.splice(indexProd, 1);
    saveToLocal(productFromLocal);
    renderProducts();

    let cartFromLocal = getCartFromLocal();
    cartFromLocal = cartFromLocal.filter((p) => p.prodID !== ID);
    saveCartToLocal(cartFromLocal);

    renderCart(cartFromLocal);
    updateCartLength();
}

function editProduct(ID) {
    const productFromLocal = getFromLocal();
    const productForUpdate = productFromLocal.find((p) => p.id === ID);

    if (!productForUpdate) {
        alert("Product not found");
        return;
    }

    editProductID = ID;

    NameElmt.value = productForUpdate.name;
    CategoryElmt.value = productForUpdate.category;
    PriceElmt.value = productForUpdate.price;
    StockElmt.value = productForUpdate.stock;

    addNewBtnElmt.textContent = "Update Product";
}

function addToCart(ID) {
    const productFromLocal = getFromLocal();
    const cartFromLocal = getCartFromLocal();

    const singleProduct = productFromLocal.find((p) => p.id === ID);

    if (!singleProduct) {
        alert("Product not found");
        return;
    }

    const isIncludedIndex = cartFromLocal.findIndex(
        (p) => p.prodID === ID
    );

    if (singleProduct.stock <= 0) {
        alert("Product is out of stock");
        return;
    }

    if (isIncludedIndex === -1) {
        cartFromLocal.push({
            prodID: singleProduct.id,
            name: singleProduct.name,
            price: singleProduct.price,
            quantity: 1
        });
    } else {
        if (cartFromLocal[isIncludedIndex].quantity >= singleProduct.stock) {
            alert("Available stock limit reached");
            return;
        }

        cartFromLocal[isIncludedIndex].quantity += 1;
    }

    saveCartToLocal(cartFromLocal);
    renderCart(cartFromLocal);
    updateCartLength();
}

function renderCart(c) {
    if (cartListElmt) {
        cartListElmt.innerHTML = c.map((p, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${p.name}</td>
                <td>$ ${p.price}</td>
                <td>
                    <button class="btn btn-success"
                        onclick="decreaseQuantity(${p.prodID})">-</button>
                    ${p.quantity}
                    <button class="btn btn-success"
                        onclick="IncreaseQuantity(${p.prodID})">+</button>
                </td>
                <td>
                    <button class="btn btn-danger"
                        onclick="removeFromCart(${p.prodID})">Remove</button>
                </td>
                <td>$ ${p.price * p.quantity}</td>
            </tr>
        `).join("");
    }

    const deliveryCharges = c.length > 0 ? 500 : 0;
    const handlingCharges = c.length > 0 ? 100 : 0;

    const productAMT = c.reduce((total, p) => {
        return total + (Number(p.price) * p.quantity);
    }, 0);

    const cartAmount = productAMT + deliveryCharges + handlingCharges;

    if (cartAmoutElmt) {
        if (c.length > 0) {
            cartAmoutElmt.innerHTML = `
                <p>
                    Product Amount: $ ${productAMT}<br>
                    Delivery Charges: $ ${deliveryCharges}<br>
                    Handling Charges: $ ${handlingCharges}<br>
                    <strong>Total Cart Amount: $ ${cartAmount}</strong>
                </p>
            `;
        } else {
            cartAmoutElmt.innerHTML = `
                Your cart is EMPTY <br>
                <a href="./index.html">Add Products</a>
            `;
        }
    }

    updateCartLength();
}

function removeFromCart(ID) {
    let cartFromLocal = getCartFromLocal();

    const indexNum = cartFromLocal.findIndex(
        (p) => p.prodID === ID
    );

    if (indexNum === -1) {
        alert("Product not found");
        return;
    }

    cartFromLocal.splice(indexNum, 1);

    saveCartToLocal(cartFromLocal);
    renderCart(cartFromLocal);
}

function IncreaseQuantity(ID) {
    const cartFromLocal = getCartFromLocal();
    const productFromLocal = getFromLocal();

    const indexNum = cartFromLocal.findIndex(
        (p) => p.prodID === ID
    );

    const product = productFromLocal.find((p) => p.id === ID);

    if (indexNum === -1 || !product) {
        alert("Product not found");
        return;
    }

    if (cartFromLocal[indexNum].quantity >= product.stock) {
        alert("Available stock limit reached");
        return;
    }

    cartFromLocal[indexNum].quantity += 1;

    saveCartToLocal(cartFromLocal);
    renderCart(cartFromLocal);
}

function decreaseQuantity(ID) {
    const cartFromLocal = getCartFromLocal();

    const indexNum = cartFromLocal.findIndex(
        (p) => p.prodID === ID
    );

    if (indexNum === -1) {
        alert("Product not found");
        return;
    }

    if (cartFromLocal[indexNum].quantity > 1) {
        cartFromLocal[indexNum].quantity -= 1;
    } else {
        cartFromLocal.splice(indexNum, 1);
    }

    saveCartToLocal(cartFromLocal);
    renderCart(cartFromLocal);
}

window.addEventListener("load", () => {
    let savedToLocal = getFromLocal();

    if (!savedToLocal.length) {
        saveToLocal(products);
    }

    if (!localStorage.getItem("b98Cart")) {
        saveCartToLocal(cart);
    }

    renderProducts();
    renderCart(getCartFromLocal());
    updateCartLength();
});

