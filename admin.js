const ADMIN_PASSWORD = "Ansh@2006";

function login() {

  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (password === ADMIN_PASSWORD) {

    localStorage.setItem("adminLoggedIn", "true");
    window.location.href = "dashboard.html";

  } else {

    msg.innerHTML = "❌ Wrong Password";
    msg.style.color = "red";

  }

}

if (window.location.pathname.includes("dashboard.html")) {

  if (localStorage.getItem("adminLoggedIn") !== "true") {

    window.location.href = "admin.html";

  }

}

function logout() {

  localStorage.removeItem("adminLoggedIn");
  window.location.href = "admin.html";

}
