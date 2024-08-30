import React from 'react'
import Menu from "./Menu";
import Header from "./Header";
import Formulario from './Formulario';
import { useState } from 'react';

const Main = () => {
    const [showFormulario, setShowFormulario] = useState(false); // Estado para controlar la visibilidad del formulario

    const handleNuevaOportunidadClick = () => {
        setShowFormulario(true); // Muestra el formulario cuando se hace clic en "Nueva oportunidad"
    };
    return (
        <div>
            <div className='contenedor'>
                <Header />
                <div className='main-content'>
                    <Menu onNuevaOportunidadClick={handleNuevaOportunidadClick} />
                    {showFormulario && <Formulario />} {/* Condiciona la renderización del formulario */}
                </div>
            </div>
        </div>
    )
}

export default Main