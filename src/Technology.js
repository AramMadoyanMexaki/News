import { useState, useEffect } from "react";
import "./Technology.css";

function Technology() {
  const API_KEY = "43604f028e8444658bd1ffbcf9825106";
  const [techNews, setTechNews] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${API_KEY}`)
      .then((resp) => resp.json())
      .then((data) => setTechNews(data.articles));
  }, []);

  return (
    <div className="SiteSection">
      <section className="main-section">
        <h2 className="section-title">Technology</h2>
        <div className="sections">
          <div className="tech">
            <h3 className="tech-title">Technology</h3>
            {techNews.map((newsItem) => (
              <div key={newsItem.title}>
                <h4>{newsItem.title}</h4>
                {newsItem.urlToImage && (
                  <img className="tech-image" src={newsItem.urlToImage} alt={newsItem.title} />
                )}
                <p>{newsItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;
