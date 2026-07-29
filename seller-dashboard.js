const seller = JSON.parse(localStorage.getItem("seller"));

if (!seller) {
  alert("Please login first.");
  window.location.href = "seller-login.html";
}

document.querySelector("h2").innerText =
  "Welcome, " + seller.ownerName;
async function addSellerProduct() {

  const seller = JSON.parse(localStorage.getItem("seller"));

  const product = {
    sellerId: seller.id,
    sellerName: seller.ownerName,
    name: document.getElementById("productName").value.trim(),
    price: document.getElementById("productPrice").value.trim(),
    category: document.getElementById("productCategory").value.trim(),
    image: document.getElementById("productImage").value.trim()
  };

  if (!product.name || !product.price || !product.category || !product.image) {
    alert("Please fill all fields");
    return;
  }

  try {
    await window.saveProduct(product);
    alert("✅ Product Added Successfully");
  } catch (err) {
    console.error(err);
    alert("❌ Product Add Failed");
  }

}
window.loadProducts(function(products){

  const seller = JSON.parse(localStorage.getItem("seller"));

  const myProducts = products.filter(
    p => p.sellerId === seller.id
  );

  const list = document.getElementById("sellerProducts");

  list.innerHTML = "";

  myProducts.forEach(product => {

    list.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" width="100">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${product.category}</p>
      </div>
    `;

  });

});
