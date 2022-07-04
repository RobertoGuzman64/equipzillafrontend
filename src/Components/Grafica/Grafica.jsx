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
            friends_count.push(tweet.friends_count);
            retweet_count.push(tweet.retweet_count);
        });
        // console.log(friends_count,'RETWEETS', retweet_count);
    }, [tweets]);

    const traerTweets = async () => {
        try {
            let resultado = await axios.get(`${baseURL}twitter`);
            setTweets(resultado.data);
            // console.log(resultado.data)
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
        animations: false,
        scales: {
            y: {
                min: 500,
                max: 3500,
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

    // const labels = [''];
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    var friends_count = [];
    var retweet_count = [];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Retweet Count',
                data: retweet_count,
                tension: 0.3,
                borderColor: 'rgb(91, 209, 215)',
                backgroundColor: 'rgba(91, 209, 215, 0.3)',
                pointRadius: 8,
                pointBackgroundColor: 'rgb(91, 209, 215)',
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