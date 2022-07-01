import React, { useState, useEffect } from 'react';
import './Twitter.css';
import axios from 'axios';
import { baseURL } from '../../utiles';


const Twitter = () => {
    const [tweets, setTweets] = useState([]);
    const [msgError, setMsgError] = useState('');

    useEffect(() => {
        traerTweets();
    }, []);

    useEffect(() => {
    }, [tweets]);

    const traerTweets = async () => {
        try {
            let resultado = await axios.get(`${baseURL}/comunidades`);
            setComunidades(resultado.data);
            console.log(resultado.data)
        } catch (error) {
            setMsgError(error);
        }
    };

    return (
        <div className='paginaTwitter'>
            <div className='contenidoTwitter'>
                <h1>Bienvenido a la aplicación de Tweets</h1>
            </div>
        </div>
    )
}

export default Twitter;