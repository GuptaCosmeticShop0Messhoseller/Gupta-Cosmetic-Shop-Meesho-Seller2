alert("Seller Dashboard Loaded");

const seller = JSON.parse(localStorage.getItem("seller"));

if (!seller) {
  alert("Please Login First");
  window.location.href = "seller-login.html";
}

document.getElementById("welcome").innerText =
"Welcome, " + seller.ownerName;

// ======================
// ADD PRODUCT
// ======================

document.getElementById("saveProductBtn").addEventListener("click", async () => {

  const product = {
    sellerId: seller.id,
    sellerName: seller.ownerName,
    name: document.getElementById("productName").value.trim(),
    price: document.getElementById("productPrice").value.trim(),
    category: document.getElementById("productCategory").value.trim(),
    image: document.getElementById("productImage").value.trim()
  };

  if (
    !product.name ||
    !product.price ||
    !product.category ||
    !product.image
  ) {
    alert("Please fill all fields");
    return;
  }

  try {

    await window.saveProduct(product);

    alert("✅ Product Added Successfully");

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
    document.getElementById("productImage").value = "";

    loadMyProducts();

  } catch (err) {

    console.error(err);

    alert("❌ Product Add Failed");

  }

});

// =================
    myProducts.forEach(product => {

      list.innerHTML += `
      <div class="product-card">

        <img src="${product.image}" width="100">

        <h3>${product.name}</h3>

        <p>₹${product.price}</p>

        <p>${product.category}</p>

        <button onclick="deleteSellerProduct('${product.id}')">
          🗑 Delete
        </button>

      </div>
      <hr>
      `;

    });

  });

}

loadMyProducts();

// ======================
// DELETE PRODUCT
// ======================

window.deleteSellerProduct = async function(id){

  if(!confirm("Delete this product?")) return;

  try{

    await window.deleteProduct(id);

    alert("✅ Product Deleted");

    loadMyProducts();

  }catch(err){

    console.error(err);

    alert("❌ Delete Failed");

  }

};

// ======================
// BUTTONS
// ======================

document.getElementById("btnAdd").onclick = function(){

  document.getElementById("productName").focus();

};

document.getElementById("btnProducts").onclick = function(){

  loadMyProducts();

};

document.getElementById("btnOrders").onclick = function(){

  alert("My Orders feature will be added next.");

};

document.getElementById("btnLogout").onclick = function(){

  localStorage.removeItem("seller");

  window.location.href = "seller-login.html";

};
