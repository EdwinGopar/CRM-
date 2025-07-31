// auth.js

// Guardar token en localStorage al iniciar sesión
export function saveToken(token) {
  localStorage.setItem("jwt_token", token);
}

// Obtener token
export function getToken() {
  return localStorage.getItem("jwt_token");
}

// Eliminar token (logout)
export function logout() {
  localStorage.removeItem("jwt_token");
  window.location.href = "login.html";
}

// Verificar si hay token
export function isAuthenticated() {
  return !!getToken();
}

// Proteger páginas que requieran login
export function protectPage() {
  if (!isAuthenticated()) {
    alert("Necesitas iniciar sesión para acceder.");
    window.location.href = "login.html";
  }
}
