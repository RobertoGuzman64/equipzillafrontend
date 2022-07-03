import React, { useState, useEffect } from 'react';
import './Grafica.css';
import axios from 'axios';
import { baseURL } from '../../utiles';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


const Grafica = () => {
    const [tweets, setTweets] = useState([]);
    const [msgError, setMsgError] = useState('');

    useEffect(() => {
        traerTweets();
    }, []);

    useEffect(() => {
        tweets.map(tweet => {
            friends_count.push(tweet.friends_count);
            retweet_count.push(tweet.retweet_count);
        });
        console.log(friends_count,'RETWEETS', retweet_count);
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

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 100,
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Tweets',
            },
        },
    };

    const labels = [''];

    var friends_count = [];
    var retweet_count = [];

    const data = {
        labels,
        datasets: [
            {
                label: 'Favourite Count',
                data: friends_count,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Retweet Count',
                data: retweet_count,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div className='componenteGrafica'>
            <Bar options={options} data={data} />
            {msgError}
        </div>
    );
}

export default Grafica;