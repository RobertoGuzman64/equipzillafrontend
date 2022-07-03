import React, { useState, useEffect } from 'react';
import './Tabla.css';
import axios from 'axios';
import { baseURL } from '../../utiles';


const Tabla = () => {

    const [tweets, setTweets] = useState([]);
    const [msgError, setMsgError] = useState('');

    useEffect(() => {
        traerTweets();
    }, []);

    useEffect(() => {
    }, [tweets]);

    const traerTweets = async () => {
        try {
            let resultado = await axios.get(`${baseURL}twitter`);
            setTweets(resultado.data);
            console.log(resultado.data)
        } catch (error) {
            setMsgError(error);
        }
    };

    return (
        <div className="tabla">
            <div className='contenidoTabla'>
                {
                    tweets.map((tweet, index) => {
                        return (
                            <div className='tweet' key={index}>
                                <div className='tweet-header'>
                                    <img src={tweet.user.profile_image_url} alt='profile' />
                                    <div className='tweet-header-info'>
                                        <h3>{tweet.user.name}</h3>
                                        <p>@{tweet.user.screen_name}</p>
                                    </div>
                                </div>
                                <p className='tweet-text'>{tweet.text}</p>
                                <p className='tweet-text'>{tweet.description}</p>
                                {msgError}
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}


export default Tabla;