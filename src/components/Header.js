import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div>
            <div className='encabezado'>
                <FontAwesomeIcon icon={faUser} /> Usuario
            </div>

        </div>
    )
}

export default Header