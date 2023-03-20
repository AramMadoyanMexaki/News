import { useState, useEffect } from "react";
import './Sport.css'

function Sport() {
     const API_KEY = "43604f028e8444658bd1ffbcf9825106";

     const [news, setNews] = useState([]);

     useEffect(() => {
         fetch(`https://newsapi.org/v2/top-headlines?category=sport&language=en&apiKey=${API_KEY}`)
             .then(resp => resp.json())
             .then(data => setNews(data.articles));
     }, []);
    
     return (
         <section className="sport-sec">
             <h1 className="sport-title">Sport in the World</h1>
             <div className="sport-news">
                 {
                     news.map((newsItem) => (
                         <div key={newsItem.title} className="sport-news-block">
                             <h3>{newsItem.title}</h3>
                             { newsItem.urlToImage && (
                                 <img className="sport-image" src={newsItem.urlToImage} alt={newsItem.title} />
                             )}
                             <p>{newsItem.description}</p>
                         </div>
                     ))
                 }
             </div>
         </section>
     );
}

export default Sport;
