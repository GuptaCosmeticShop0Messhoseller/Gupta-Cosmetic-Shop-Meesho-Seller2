document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  window.loadSellers(function(sellers) {

    const seller = sellers.find(s =>
      s.email === email &&
      s.password === password
    );

    if (!seller) {
      alert("❌ Invalid Email or Password");
      return;
    }

    if (seller.status !== "Approved") {
      alert("⏳ Your account is waiting for admin approval.");
      return;
    }

    localStorage.setItem("seller", JSON.stringify(seller));

    alert("✅ Login Successful");

    window.location.href = "seller-dashboard.html";

  });

});
