function addProduct() {

  const product = {
    name: document.getElementById("productName").value,
    price: document.getElementById("productPrice").value,
    mrp: document.getElementById("productMrp").value,
    category: document.getElementById("productCategory").value,
    image: document.getElementById("productImage").value
  };

  if (
    !product.name ||
    !product.price ||
    !product.mrp ||
    !product.category ||
    !product.image
  ) {
    alert("Please fill all fields");
    return;
  }

  window.saveProduct(product);
}
window.loadProducts(function(products){

  document.getElementById("totalProducts").innerText = products.length;

  const list = document.getElementById("productList");

  list.innerHTML = "";

  products.forEach((product)=>{

    list.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="deleteProduct('${product.id}')">
          Delete
        </button>
      </div>
    `;

  });

});
window.loadOrders(function(orders){

  document.getElementById("totalOrders").innerText = orders.length;

  const pending = orders.filter(order => order.status === "Pending").length;
  document.getElementById("pendingOrders").innerText = pending;

  const table = document.getElementById("ordersTable");
  table.innerHTML = "";

  orders.forEach((order)=>{

    table.innerHTML += `
      <tr>
        <td>${order.id}</td>
        <td>${order.name}</td>
        <td>${order.phone}</td>
        <td>${order.product}</td>
        <td>${order.quantity}</td>
        <td>${order.status}</td>
        <td>
   <td>
  <button onclick="updateOrderStatus('${order.id}','Accepted')">
    ✅ Accept
  </button>

  <button onclick="updateOrderStatus('${order.id}','Ready to Ship')">
    📦 Ready to Ship
  </button>

  <button onclick="updateOrderStatus('${order.id}','Completed')">
    ✅ Delivered
  </button>
</td>       
        </td>
      </tr>
    `;

  });

});
