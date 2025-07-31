document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !email || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  try {
    const res = await fetch("http://localhost:3001/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
      window.location.href = "login.html";
    } else {
      alert(data.error || "❌ Error al registrarse.");
    }
  } catch (err) {
    console.error("❌ Error de red o servidor:", err);
    alert("❌ Ocurrió un error al intentar registrarse.");
  }
});
