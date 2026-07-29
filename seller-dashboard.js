const seller = JSON.parse(localStorage.getItem("seller"));

if (!seller) {
  alert("Please login first.");
  window.location.href = "seller-login.html";
}

document.querySelector("h2").innerText =
  "Welcome, " + seller.ownerName;
function addSellerProduct() {

  const seller = JSON.parse(localStorage.getItem("seller"));

  const product = {
    sellerId: seller.id,
    sellerName: seller.ownerName,
    name: document.getElementById("productName").value,
    price: document.getElementById("productPrice").value,
    category: document.getElementById("productCategory").value,
    image: document.getElementById("productImage").value
  };

  if (!product.name || !product.price || !product.category || !product.image) {
    alert("Please fill all fields");
    return;
  }

  window.saveProduct(product);

  alert("✅ Product Added Successfully");
}
