import React from 'react';
import '../App.css'; // si tienes estilos específicos para el login
//import UAESP from './public/img/UAESP.jpg';

function Login() {
  return (
    <div className="login-container">
      <img src="/img/UAESP.jpg" alt="Logo" className="logo" />
      <h2>Iniciar Sesión</h2>
      <form id="loginForm">
        <label htmlFor="username">ID de Usuario:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Ingresar</button>

        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </form>
      
    </div>
  );
}

export default Login;
