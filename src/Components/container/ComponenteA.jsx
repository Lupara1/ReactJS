import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB';



const ComponenteA = () => {

const defaultComponenteB = new Contacto('Martin','Gomez', 'marting@gmail.com', true)



    return (
        <div>
            <div><h1>Contacto</h1></div>
        <ComponenteB contacto={defaultComponenteB}></ComponenteB>
        </div>
    );
};





export default ComponenteA;
