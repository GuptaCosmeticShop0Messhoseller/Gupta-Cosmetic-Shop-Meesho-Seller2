const seller = JSON.parse(localStorage.getItem("seller"));

if (!seller) {
  alert("Please login first.");
  window.location.href = "seller-login.html";
}

document.querySelector("h2").innerText =
  "Welcome, " + seller.ownerName;
