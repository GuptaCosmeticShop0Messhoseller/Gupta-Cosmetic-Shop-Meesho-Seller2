function sendOrder() {

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;
const qty = document.getElementById("qty").value;

if (!name || !phone || !address || !qty) {
    alert("Please fill all fields");
    return;
}

const order = {
    name: name,
    phone: phone,
    address: address,
    product: "Green Stone Bangles",
    quantity: qty
};

window.saveOrder(order);

document.getElementById("name").value = "";
document.getElementById("phone").value = "";
document.getElementById("address").value = "";
document.getElementById("qty").value = "";

}
window.addEventListener("DOMContentLoaded", () => {

  if (typeof window.loadProducts === "function") {

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
     <button class="buy-btn" onclick="placeOrder('${product.name}')">
Buy Now
</button>
          </div>
        `;

      });

    });

  }

});
window.placeOrder = function(productName = "Green Stone Bangles"){

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const qty = document.getElementById("qty").value.trim();

  if(!name || !phone || !address || !qty){
    alert("Please fill all fields.");
    return;
  }

  const order = {
  name,
  phone,
  address,
  product: productName || "Green Stone Bangles",
  quantity: qty
};
  };

  window.saveOrder(order)
    .then(() => {
      alert("✅ Order Placed Successfully");

      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      document.getElementById("qty").value = "";
    })
    .catch((err) => {
      alert("❌ " + err.message);
    });

};
window.sendOrder = function(){

  const product = document.getElementById("qty").getAttribute("data-product");

  const order = {
    name: document.getElementById("name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    address: document.getElementById("address").value.trim(),
    quantity: document.getElementById("qty").value,
    product: product
  };

  if(
    !order.name ||
    !order.phone ||
    !order.address ||
    !order.quantity ||
    !order.product
  ){
    alert("Please fill all details");
    return;
  }

  window.saveOrder(order).then(()=>{

    alert("✅ Order Placed Successfully");

    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("address").value="";
    document.getElementById("qty").value="1";

  });

    }
