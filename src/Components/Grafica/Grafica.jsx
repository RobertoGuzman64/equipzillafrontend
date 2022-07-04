import React, { useState, useEffect } from 'react';
import './Grafica.css';
import axios from 'axios';
import { baseURL } from '../../utiles';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


const Grafica = () => {
    const [tweets, setTweets] = useState([]);
    const [msgError, setMsgError] = useState('');

    useEffect(() => {
        traerTweets();
    }, []);

    useEffect(() => {
        tweets.map(tweet => {
            followers_count.push(tweet.user.followers_count);
            friends_count.push(tweet.user.friends_count);
            user_name.push(tweet.user.name);
        });
    }, [tweets]);

    const traerTweets = async () => {
        try {
            let resultado = await axios.get(`${baseURL}twitter`);
            setTweets(resultado.data);
        } catch (error) {
            setMsgError(error);
        }
    };

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
    );

    const options = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 5500,
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Cantidad de amigos que tiene cada Usuario que twittea',
            },
        },
    };


    var followers_count = [];
    var friends_count = [];
    var user_name = [];

    const labels = user_name;

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Cantidad de Amigos',
                data: friends_count,
                tension: 0.3,
                borderColor: 'rgb(91, 209, 215)',
                backgroundColor: 'rgba(91, 209, 215, 0.3)',
                pointRadius: 4,
                pointBackgroundColor: 'rgb(91, 209, 215)',
            },
            {
                fill: true,
                label: 'Cantidad de Seguidores',
                data: followers_count,
                tension: 0.3,
                borderColor: 'rgb(141, 199, 128)',
                backgroundColor: 'rgba(141, 199, 128, 0.604)',
                pointRadius: 4,
                pointBackgroundColor: 'rgb(141, 199, 128)',
            },
        ],
    };

    return (
        <div className='componenteGrafica'>
            <div className='grafica'>
                <Line options={options} data={data} />
                {msgError}
            </div>
        </div>
    );
}

export default Grafica;