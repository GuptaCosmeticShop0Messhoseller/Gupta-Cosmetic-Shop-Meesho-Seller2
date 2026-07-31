window.currentProduct = "";

window.addEventListener("DOMContentLoaded", () => {

  if (typeof window.loadProducts !== "function") return;

  window.loadProducts((products) => {

    const container = document.getElementById("productContainer");

    if (!container) return;

    container.innerHTML = "";

    products.forEach((product) => {

      container.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">₹${product.price}</p>
<button class="wish-btn">❤️ Wishlist</button>
          <button class="buy-btn"
            onclick="selectProduct('${product.name}')">
            Buy Now
          </button>
        </div>
      `;

    });

  });

});

window.selectProduct = function(productName){

  window.currentProduct = productName;

  document.getElementById("order").scrollIntoView({
    behavior:"smooth"
  });

}
window.sendOrder = async function () {

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const qty = document.getElementById("qty").value.trim();

  if (!window.currentProduct) {
    alert("Please click Buy Now on a product first.");
    return;
  }

  if (!name || !phone || !address || !qty) {
    alert("Please fill all fields.");
    return;
  }

  const order = {
    product: window.currentProduct,
    name: name,
    phone: phone,
    address: address,
    quantity: qty
  };

  try {

    await window.saveOrder(order);

    alert("✅ Order Placed Successfully");

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("qty").value = "1";

    window.currentProduct = "";

  } catch (e) {

    alert("❌ Order Failed");

  }

};
