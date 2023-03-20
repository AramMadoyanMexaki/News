import { useState, useEffect } from "react";
import "./Politic.css"

function Policy() {
     const API_KEY = "43604f028e8444658bd1ffbcf9825106";

     const [news, setNews] = useState([]);

     useEffect(() => {
         fetch(`https://newsapi.org/v2/top-headlines?category=politics&language=en&apiKey=${API_KEY}`)
             .then(resp => resp.json())
             .then(data => setNews(data.articles));
     }, []);
    
     return (
         <section className="pol-sec">
             <h1 className="pol-title">Politics of the World</h1>
             <div className="politics-news">
                 {
                     news.map((newsItem) => (
                         <div key={newsItem.title} className="politics-news-block">
                             <h3>{newsItem.title}</h3>
                             { newsItem.urlToImage && (
                                 <img className="policy-image" src={newsItem.urlToImage} alt={newsItem.title} />
                             )}
                             <p>{newsItem.description}</p>
                         </div>
                     ))
                 }
             </div>
         </section>
     );
}

export default Policy;
