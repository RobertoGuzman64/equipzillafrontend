import React, { useState, useEffect } from 'react';
import './Twitter.css';
import axios from 'axios';
import { baseURL } from '../../utiles';
// importaciones de ChartJS
import { TagCloud } from 'react-tagcloud'

const Twitter = () => {
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
            console.log(resultado.data)
        } catch (error) {
            setMsgError(error);
        }
    };
    // console.log(tweets,'ESTO ES EL CONSOLE LOG')

    data = [
        { value: tweets[1]?.user?.name, count: 38, className: 'tag-cloud-item' },
        { value: tweets[2]?.user?.name, count: 30, className: 'tag-cloud-item' },
        { value: tweets[3]?.user?.name, count: 28, className: 'tag-cloud-item' },
        { value: tweets[4]?.user?.name, count: 25, className: 'tag-cloud-item' },
        { value: tweets[5]?.user?.name, count: 33, className: 'tag-cloud-item' },
        { value: tweets[6]?.user?.name, count: 18, className: 'tag-cloud-item' },
        { value: tweets[7]?.user?.name, count: 20, className: 'tag-cloud-item' },
    ]

    const customRenderer = (tag, size, color) => {
        return (
            <span key={tag.value} className={`tag-${size}`}>
                {tag.value}
            </span>
        )
    }

    return (
        <div className='paginaTwitter'>
            <div className='contenidoTwitter'>
                <div className='tweets'>
                </div>
                {/* <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} /> */}
                <>
                {customRenderer}
                </>
            </div>
        </div>
    );
}

//     const renderTweets = () => {
//         return tweets.map((tweet, index) => {
//             return (
//                 <div key={index} className="tweet">
//                     <div className="tweet__img">
//                         <img src={tweet.user.profile_image_url} alt=""/>
//                     </div>
//                     <div className="tweet__info">
//                         <div className="tweet__info__user">
//                             <span className="tweet__info__user__name">{tweet.user.name}</span>
//                             <span className="tweet__info__user__screen_name">@{tweet.user.screen_name}</span>
//                         </div>
//                         <p className="tweet__info__text">{tweet.text}</p>
//                     </div>
//                 </div>
//             )
//         }
//         )
//     }

//     return (
//         <div className="twitter">
//             <h2>Twitter</h2>
//             {renderTweets()}
//         </div>
//     );
// }

//     const data = {
//         labels: ['Positive', 'Negative', 'Neutral'],
//         datasets: [
//             {
//                 label: 'Sentiment',
//                 backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
//                 data: [tweets.positive, tweets.negative, tweets.neutral]
//             }
//         ]
//     };

//     const options = {
//         title: {
//             display: true,
//             text: 'Sentiment Analysis',
//             fontSize: 20
//         },
//         legend: {
//             display: true,
//             position: 'right'
//         }
//     };

//     return (
//         <div className="container-twitter">
//             <div className="container-chart">
//                 <Chart data={data} options={options} />
//             </div>
//             <div className="container-tweets">
//                 {tweets.map((tweet, index) => {
//                     return (
//                         <div key={index} className="tweet">
//                             <div className="tweet-text">
//                                 {tweet.text}
//                             </div>
//                             <div className="tweet-sentiment">
//                                 {tweet.sentiment}
//                             </div>
//                         </div>
//                     )
//                 }
//                 )}
//             </div>
//         </div>
//     );
// }

//     return (
//         <div className='paginaTwitter'>
//             <div className='contenidoTwitter'>
//                 // grafica de barras de chartjs
//                 <Bar
//                     data={{
//                         labels: ['Tweets', 'Retweets', 'Likes'],
//                         datasets: [{
//                             label: 'Tweets',
//                             backgroundColor: '#3e95cd',
//                             data: [tweets.tweets, tweets.retweets, tweets.likes]
//                         }]
//                     }}
//                     options={{
//                         title: {
//                             display: true,
//                             text: 'Tweets',
//                             fontSize: 20
//                         },
//                         legend: {
//                             display: false,
//                             position: 'right'
//                         }
//                     }}
//                 />
//             </div>
//         </div>
//     );
// }







//                 </div>
//                 <div className='graficaTwitter'>
//                     <div className='graficaTwitter__titulo'>
//                         <h1>Tweets</h1>
//                     </div>
//                     <div className='graficaTwitter__grafica'>
//                         <bar
//                             data={{
//                                 labels: ['Tweets', 'Retweets', 'Likes'],
//                                 datasets: [
//                                     {
//                                         label: 'Tweets',
//                                         backgroundColor: '#3e95cd',
//                                         data: [tweets.tweets, tweets.retweets, tweets.likes]
//                                     }
//                                 ]
//                             }}
//                             options={{
//                                 title: {
//                                     display: true,
//                                     text: 'Tweets',
//                                     fontSize: 20
//                                 },
//                                 legend: {
//                                     display: false,
//                                     position: 'right'
//                                 }
//                             }}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }





//   tweets.map((tweet, index) => {
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
//                             {msgError}
//                         </div>
//                     )
//                 }
//                 )
//             }
//         </div>
//     </div>

export default Twitter;