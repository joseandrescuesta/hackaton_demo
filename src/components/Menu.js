import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Asegúrate de que la ruta es correcta

function Menu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Define el estado para el submenú

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
    if (index !== 2) { // Si no es el módulo de oportunidades, cierra el submenú
      setActiveSubMenu(null);
    }
  };

  const toggleSubMenu = (subIndex) => { // Cambia 'index' por 'subIndex'
    setActiveSubMenu(activeSubMenu === subIndex ? null : subIndex);
  };

  return (
    <nav className="menu">
      <header>
        {/* Aquí puedes agregar un logo o cualquier otro elemento */}
      </header>
      <ul>
        <li className={`menu-item ${activeMenu === 1 ? 'active' : ''}`}>
          <button className="menu-button" onClick={() => toggleMenu(1)}>Módulo Riesgos</button>
          {activeMenu === 1 && (
            <ul className="submenu">
              <li><a href="#">Riesgo Gestión</a></li>
              <li><a href="#">Riesgo Corrupción</a></li>
              <li><a href="#">Riesgo Seguridad de Información</a></li>
            </ul>
          )}
        </li>

        <li className={`menu-item ${activeMenu === 2 ? 'active' : ''}`}>
          <button className="menu-button" onClick={() => toggleMenu(2)}>Módulo Oportunidades</button>
          {activeMenu === 2 && (
            <ul className="submenu">


              <li><Link to="/Formulario">Formulario Identificación Oportunidades</Link></li>
              <li><Link to="/FormManejoOp">Formulario Manejo de Oportunidades</Link></li>
              <li><Link to="/FormDefDos">Formulario Definición Dos</Link></li>
              <li><Link to="/FormDefTres">Formulario Definición Tres</Link></li>


            </ul>
          )}
        </li>

        <li className={`menu-item ${activeMenu === 3 ? 'active' : ''}`}>
          <button className="menu-button" onClick={() => toggleMenu(3)}>Configuración</button>
          {activeMenu === 3 && (
            <ul className="submenu">
              <li><a href="#">Usuarios</a></li>
              <li><a href="#">Reportes</a></li>
              <li><a href="#">Importación de Datos</a></li>
              <li><a href="#">Api-Fuentes de Datos</a></li>
            </ul>
          )}
        </li>

        <li>
          <button id="logoutButton" className="logout-button">Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
