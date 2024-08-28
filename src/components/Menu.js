import React from 'react';
import '../App.css'; // Asegúrate de que los estilos estén en un archivo CSS

function Menu() {
  return (
    <div>
      <header className="banner">
        <img src="/public/banner.jpg" alt="Banner" className="banner-image" />
      </header>

      <nav className="menu">
        <ul>
          <li className="menu-item">
            <button className="menu-button">Módulo Riesgos</button>
            <ul className="submenu">
              <li><a href="#">Riesgo Gestión</a></li>
              <li><a href="#">Riesgo Corrupción</a></li>
              <li><a href="#">Riesgo Seguridad de Información</a></li>
            </ul>
          </li>

          <li className="menu-item">
            <button className="menu-button">Módulo Oportunidades</button>
            <ul className="submenu">
              <li><a href="#">Oportunidades</a></li>
            </ul>
          </li>

          <li className="menu-item">
            <button className="menu-button">Configuración</button>
            <ul className="submenu">
              <li><a href="#">Usuarios</a></li>
              <li><a href="#">Reportes</a></li>
              <li><a href="#">Importación de Datos</a></li>
              <li><a href="#">Api-Fuentes de Datos</a></li>
            </ul>
          </li>

          <li className="menu-item">
            <button id="logoutButton" className="logout-button">Cerrar Sesión</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
