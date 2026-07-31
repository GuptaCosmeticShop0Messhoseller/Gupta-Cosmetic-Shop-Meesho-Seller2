const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {

  document.getElementById("mainImage").src = product.image;

  document.getElementById("productName").textContent = product.name;

  document.getElementById("productPrice").textContent = "₹" + product.price;

  document.getElementById("productDescription").textContent =
    product.description || "Premium quality cosmetic product.";

}
