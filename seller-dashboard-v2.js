window.onload = function () {
alert("Seller Dashboard V2 Loaded");

const seller = JSON.parse(localStorage.getItem("seller"));

if (!seller) {
  alert("Please Login First");
  window.location.href = "seller-login.html";
}

document.getElementById("welcome").innerText =
"Welcome, " + seller.ownerName;

// SAVE PRODUCT
document.getElementById("saveProductBtn").addEventListener("click", async () => {

  const product = {
    sellerId: seller.id,
    sellerName: seller.ownerName,
    name: document.getElementById("productName").value.trim(),
    price: document.getElementById("productPrice").value.trim(),
    category: document.getElementById("productCategory").value.trim(),
    image: document.getElementById("productImage").value.trim()
  };

  if (!product.name || !product.price || !product.category || !product.image) {
    alert("Fill all fields");
    return;
  }

  await window.saveProduct(product);

  alert("✅ Product Added");

  loadMyProducts();

});

// LOAD PRODUCTS
function loadMyProducts() {

  window.loadProducts(function(products){

    const list = document.getElementById("sellerProducts");

    list.innerHTML = "";

    const mine = products.filter(p => p.sellerId === seller.id);

    if(mine.length === 0){
      list.innerHTML = "<h3>No Products</h3>";
      return;
    }

    mine.forEach(p=>{

      list.innerHTML += `
      <div class="product">
        <img src="${p.image}" width="80"><br>
        <b>${p.name}</b><br>
        ₹${p.price}<br>
        ${p.category}<br><br>

        <button onclick="deleteProductNow('${p.id}')">
        Delete
        </button>

      </div>
      `;

    });

  });

}

loadMyProducts();

// DELETE
window.deleteProductNow = async function(id){

  await window.deleteProduct(id);

  alert("Deleted");

};

// BUTTONS
document.getElementById("btnLogout").onclick = function(){

  localStorage.removeItem("seller");

  window.location.href="seller-login.html";

};

document.getElementById("btnOrders").onclick=function(){

  alert("Orders Coming Soon");

};

document.getElementById("btnProducts").onclick=function(){

  loadMyProducts();

};

document.getElementById("btnAdd").onclick=function(){

  document.getElementById("productName").focus();

};
