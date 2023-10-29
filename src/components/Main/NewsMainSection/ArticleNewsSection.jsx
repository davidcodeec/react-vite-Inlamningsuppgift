import React, { useState, useEffect } from 'react';

const ArticleNewsSection = () => {
  const [articles, setArticles] = useState([]); // State variable to store articles

  // Function to fetch articles from the API
  const fetchArticles = async () => {
    try {
      const response = await fetch(''); // Replace 'API_ENDPOINT_HERE' with your API URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <section className="article-news-section">
      <div className="container">
        <div className="section-title">
          <h2>Our News & Articles</h2>
        </div>

        <div className="image-spacing">
          {articles.map((article) => (
            <a key={article.id} className="link-text-image" href={`news_details.html?id=${article.id}`}>
              <div className="image-spacing-text">
                <div className="date">
                  {/* You can format the published date here */}
                  <h3>{new Date(article.published).getDate()}</h3>
                  <p>Mar</p>
                </div>
                <img src={article.imageUrl} alt={article.title} />
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="number-boxes">
          <i className="fa-solid fa-chevron-left"></i>
          <div className="active boxes">1</div>
          <div className="boxes">2</div>
          <div className="boxes">3</div>
          <div className="boxes">_</div>
          <div className="boxes">9</div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default ArticleNewsSection;
