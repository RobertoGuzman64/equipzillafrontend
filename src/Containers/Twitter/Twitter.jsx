import React, {  } from 'react';
import './Twitter.css';
// Componentes
import Tabla from '../../Components/Tabla/Tabla';
import NubeTags from '../../Components/NubeTags/NubeTags';
import Grafica from '../../Components/Grafica/Grafica';


const Twitter = () => {
    return (
        <div className='paginaTwitter'>
            <div className='contenidoTwitter'>
                <Tabla />
                <NubeTags />
                <Grafica />
            </div>
        </div>
    );
}

export default Twitter;