import React, { useState } from 'react';

const FormDefTres = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Maneja el envío del formulario aquí
    console.log('Datos enviados:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormDefTres;