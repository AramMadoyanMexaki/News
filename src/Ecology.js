import { useState, useEffect } from "react";
import "./Ecology.css";

function Ecology() {
     const API_KEY = "43604f028e8444658bd1ffbcf9825106";

     const [news, setNews] = useState([]);

     useEffect(() => {
         fetch(`https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=43604f028e8444658bd1ffbcf9825106`)
             .then(resp => resp.json())
             .then(data => setNews(data.articles));
     }, []);
    
     return (
         <section className="ecology-sec">
             <h1 className="ecology-title">Sport in the World</h1>
             <div className="ecology-news">
                 {
                     news.map((newsItem) => (
                         <div key={newsItem.title} className="ecology-news-block">
                             <h3>{newsItem.title}</h3>
                             { newsItem.urlToImage && (
                                 <img className="ecology-image" src={newsItem.urlToImage} alt={newsItem.title} />
                             )}
                             <p>{newsItem.description}</p>
                         </div>
                     ))
                 }
             </div>
         </section>
     );
}

export default Ecology;
