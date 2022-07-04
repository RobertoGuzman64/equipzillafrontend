import React, { useState, useEffect } from 'react';
import './Tabla.css';
import axios from 'axios';
import { baseURL } from '../../utiles';
import Table from 'react-bootstrap/Table';

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
        } catch (error) {
            setMsgError(error);
        }
    };

    return (
        <div className="componenteTabla">
            <div className='tabla'>
                <Table style={{}} striped responsive hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID del Tweet</th>
                            <th>Usuario</th>
                            <th>Descripción</th>
                            <th>Localidad</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody style={{ color: '#fff'}}>
                            {tweets.map(tweet => (
                                <tr key={tweet.id}>
                                    <td>{tweet.id}</td>
                                    <td>{tweet.user.name}</td>
                                    <td>{tweet.user.description}</td>
                                    <td>{tweet.user.location}</td>
                                    <td>{tweet.created_at}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                {msgError}
            </div>
        </div>
    );
}


export default Tabla;