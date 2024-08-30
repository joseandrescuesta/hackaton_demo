// Login.js
import React from 'react';
import '../App.css'; // Asegúrate de que esta línea esté correcta para importar los estilos globales

function Login({ onLogin }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password }); // Llama a la función de login con el nombre de usuario y contraseña
  };

  return (
    <div className="login-container">
      <img src="/img/UAESP.jpg" alt="Logo" className="logo" />
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">ID de Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Ingresar</button>

        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;




