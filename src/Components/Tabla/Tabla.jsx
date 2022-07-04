import React, { useState, useEffect } from 'react';
import './Tabla.css';
import axios from 'axios';
import { baseURL } from '../../utiles';
import Table from 'react-bootstrap/Table';

const Tabla = () => {

    const [tweets, setTweets] = useState([]);
    const [msgError, setMsgError] = useState('Error al cargar los tweets');

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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Tweet</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {tweets.map(tweet => (
                        <tr key={tweet.id}>
                            <td>{tweet.id}</td>
                            <td>{tweet.user.name}</td>
                            <td>{tweet.user.description}</td>
                            <td>{tweet.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {msgError}
        </div>
    )

    //     <table className="table table-bordered">
    //     <thead>
    //         <tr>
    //             <th scope='col'>#</th>
    //             <th scope='col'>ID</th>
    //             <th scope="col">Nombre</th>
    //             <th scope="col">Descripción</th>
    //             <th scope="col">Fecha</th>
    //         </tr>
    //     </thead>
    // <tbody>
    //     {tweets.map(tweet => (
    //         <tr key={tweet.id}>
    //             <td>{tweet.id}</td>
    //             <td>{tweet.user.name}</td>
    //             <td>{tweet.user.description}</td>
    //             <td>{tweet.created_at}</td>
    //         </tr>
    //     ))}
    // </tbody>
    // </table>
    // {msgError}

    //     <table class="table table-striped table-dark">
    //   <thead>
    //     <tr>
    //       <th scope="col">#</th>
    //       <th scope="col">First</th>
    //       <th scope="col">Last</th>
    //       <th scope="col">Handle</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row">1</th>
    //       <td>Mark</td>
    //       <td>Otto</td>
    //       <td>@mdo</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">2</th>
    //       <td>Jacob</td>
    //       <td>Thornton</td>
    //       <td>@fat</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">3</th>
    //       <td>Larry</td>
    //       <td>the Bird</td>
    //       <td>@twitter</td>
    //     </tr>
    //   </tbody>
    // </table>

    // return (
    //     <div className="tabla">
    //         <div className='contenidoTabla'>
    //             {
    //                 tweets.map((tweet, index) => {
    //                     return (
    //                         <div className='tweet' key={index}>
    //                             <div className='tweet-header'>
    //                                 <img src={tweet.user.profile_image_url} alt='profile' />
    //                                 <div className='tweet-header-info'>
    //                                     <h3>{tweet.user.name}</h3>
    //                                     <p>@{tweet.user.screen_name}</p>
    //                                 </div>
    //                             </div>
    //                             <p className='tweet-text'>{tweet.text}</p>
    //                             <p className='tweet-text'>{tweet.description}</p>
    //                             {msgError}
    //                         </div>
    //                     )
    //                 }
    //                 )
    //             }
    //         </div>
    //     </div>
    // );
}


export default Tabla;