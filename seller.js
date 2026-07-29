document.getElementById("sellerForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const seller = {
    shopName: document.getElementById("shopName").value,
    ownerName: document.getElementById("ownerName").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  try {
    await window.saveSeller(seller);
    alert("✅ Seller Registration Successful");

    document.getElementById("sellerForm").reset();

  } catch (err) {
    alert("❌ Registration Failed");
    console.error(err);
  }
});
