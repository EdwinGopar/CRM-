// register.js
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
 const res = await fetch("/api/auth/register", {

  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, email, password })
});


    const data = await res.json();

    if (res.ok) {
      alert("Usuario registrado correctamente");
      document.getElementById("registerForm").reset();
      window.location.href = "login.html";
    } else {
      alert(data.error || "Error al registrar");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Error en el servidor");
  }
});
