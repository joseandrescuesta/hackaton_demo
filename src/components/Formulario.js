import React from 'react'
import { useState } from 'react';

const Formulario = () => {

    const [formData, setFormData] = useState({
        referencia: '',
        proceso: '',
        objetivo: '',
        alcance: '',
        impacto: '',
        causa: '',
        descripcion: ''

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se manejara el envio del formulario
        console.log(formData);
    };

    return (
        <div className="formulario">
            <header> <h2>Identificación</h2></header>

            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <div className="form-group">

                        <label htmlFor="referencia">Referencia:</label>
                        <input
                            type="text"
                            id="referencia"
                            name="referencia"
                            value={formData.referencia}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="proceso">Proceso:</label>
                        <input
                            type="text"
                            id="proceso"
                            name="proceso"
                            value={formData.proceso}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="objetivo">Objetivo:</label>
                    <input
                        type="text"
                        id="objetivo"
                        name="objetivo"
                        value={formData.objetivo}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="alcance">Alcance:</label>
                    <input
                        type="text"
                        id="alcance"
                        name="alcance"
                        value={formData.alcance}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="impacto">Impacto:</label>
                    <input
                        type="text"
                        id="impacto"
                        name="impacto"
                        value={formData.impacto}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="causa">Causa:</label>
                    <input
                        type="text"
                        id="causa"
                        name="causa"
                        value={formData.causa}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="descripcion">Descripción de la oportunidad:</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>

        </div>
    )
}

export default Formulario