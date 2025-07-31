document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
const res = await fetch("http://localhost:3001/api/auth/login", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard.html";
    } else {
      alert(data.error || "Credenciales incorrectas");
    }
  } catch (err) {
    console.error("Error de conexión:", err);
    alert("Ocurrió un error al iniciar sesión.");
  }
});
