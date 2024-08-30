// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = ({ username, password }) => {
    // usuario y contraseña
    const validUsername = 'user1';
    const validPassword = '12345';
    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/Formulario" />}
          />
          <Route
            path="/Formulario"
            element={isAuthenticated ? <><Main /></> : <Navigate to="/" />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;


/**
 * import React from 'react';
import '../App.css'; // Asegúrate de importar el archivo CSS global

function Login({ onLogin }) {
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button type="submit">Login</button>
    </form>
  </div>
);
}

export default Login;

login con password unicamente
*/