import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({ contacto }) => {
    return (
        <div>
            <h1>
                { contacto.nombre } { contacto.apellido } 
            </h1>
            <h3>
                { contacto.email }
            </h3>
            <h4>
                Estado: { contacto.conectado ? 'En Linea':'No Disponible' }
            </h4>
        </div>
    );
};


ComponenteB.propTypes = {
contacto: PropTypes.instanceOf( Contacto )
};


export default ComponenteB;
