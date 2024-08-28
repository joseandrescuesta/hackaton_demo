// JavaScript para el menú desplegable
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

// Opcional: JavaScript para manejar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Aquí puedes agregar la lógica para validar el inicio de sesión
  alert(`Usuario: ${username}\nContraseña: ${password}`);
});

// script.js

// Obtener todos los botones del menú
const menuButtons = document.querySelectorAll('.menu-button');

// Añadir un evento click a cada botón del menú
menuButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Obtener el elemento padre del botón (el ítem del menú)
    const menuItem = this.parentElement;
    
    // Si el ítem del menú ya está activo, lo desactiva
    if (menuItem.classList.contains('active')) {
      menuItem.classList.remove('active');
    } else {
      // Cerrar otros submenús
      document.querySelectorAll('.menu-item.active').forEach(item => item.classList.remove('active'));
      
      // Activar el submenú del ítem actual
      menuItem.classList.add('active');
    }
  });
});

// Cerrar submenús si se hace clic fuera del menú
window.addEventListener('click', function(event) {
  if (!event.target.matches('.menu-button')) {
    document.querySelectorAll('.menu-item.active').forEach(item => item.classList.remove('active'));
  }
});

// Manejar el clic en el botón de cerrar sesión
document.getElementById('logoutButton').addEventListener('click', function() {
  // Aquí puedes agregar la lógica para cerrar sesión
  alert('Has cerrado sesión');
});
