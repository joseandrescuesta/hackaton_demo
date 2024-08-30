import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faUserGroup, faFileImport, faGear, faLightbulb, faChartLine, faHandHoldingDollar, faListCheck, faShield } from '@fortawesome/free-solid-svg-icons';

function Menu({ onNuevaOportunidadClick }) {
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
        <img src="/img/UAESP.jpg" alt="Logo" className="logo" />
      </header>
      <ul>
        <li className={`menu-item ${activeMenu === 1 ? 'active' : ''}`}>
          <button className="menu-button" onClick={() => toggleMenu(1)}>Módulo Riesgos</button>
          {activeMenu === 1 && (
            <ul className="submenu">
              <li><a href="#"><FontAwesomeIcon icon={faListCheck} />  Riesgo Gestión</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faHandHoldingDollar} /> Riesgo Corrupción</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faShield} /> Riesgo Seguridad de Información</a></li>
            </ul>
          )}
        </li>

        <li className={`menu-item ${activeMenu === 2 ? 'active' : ''}`}>
          <button className="menu-button" onClick={() => toggleMenu(2)}>Módulo Oportunidades</button>
          {activeMenu === 2 && (
            <ul className="submenu">
              <li><button className="instrumento-button" onClick={onNuevaOportunidadClick}><FontAwesomeIcon icon={faLightbulb} /> Nueva oportunidad</button></li> {/* Llama a la función cuando se hace clic */}

            </ul>
          )}
        </li>

        <li className={`menu-item ${activeMenu === 3 ? 'active' : ''}`}>
          <button className="menu-button" onClick={() => toggleMenu(3)}>Configuración</button>
          {activeMenu === 3 && (
            <ul className="submenu">
              <li><a href="#"><FontAwesomeIcon icon={faUserGroup} /> Usuarios</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faChartLine} /> Reportes</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFileImport} /> Importación de Datos</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faGear} /> Api-Fuentes de Datos</a></li>
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
