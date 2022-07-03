import { TagCloud } from 'react-tagcloud'
import { minMaxRoundedRandom } from '../../utiles';
import './NubeTags.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../utiles';

const NubeTags = () => {
    
    const [tweets, setTweets] = useState([]);
    const [msgError, setMsgError] = useState('');
    let data = [];

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

    data = tweets.map((tweet) => {
        return {
            key: Math.random(),
            value: tweet.user.name,
            count: minMaxRoundedRandom(18, 58)
        };
    });

    const customRenderer = (tag) => {
        tag.map((tag) => {
            return (
                <div key={tag.value}>
                    {tag.value}
                </div>
            );
        });
    };

    return (
        <div className='componenteNubeTags'>
            <TagCloud tags={data} minSize={10} maxSize={20} renderer={customRenderer(data)} />
            {msgError}
        </div>
    );
}

export default NubeTags;