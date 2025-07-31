document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim(); // ✅ Aquí estaba el error
  const password = document.getElementById("password").value.trim();

  try {
 const res = await fetch("/api/auth/login", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }) // ✅ Ya usamos la variable correcta
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
