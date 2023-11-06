import React, { useState, useEffect } from 'react';
import './ArticleNewsSection.css';
import SectionTitleBox from '../../Generics/MainGenerics/SectionTitleBox';
import ArticleNewsSectionBox from '../../Generics/MainGenerics/ArticleNewsSectionBox';
import Button from '../../Generics/Button';

const ArticleNewsSection = () => {
  const [articles, setArticles] = useState([]); // State variable to store articles
  const [currentGroup, setCurrentGroup] = useState(0);

  // Define the initial articles to fetch
  const initialArticleIdsToFetch = [
    "cb24396b-ae21-4c34-a267-d0cd0600aa6d",
    "ef44d5ef-7c50-4fbe-90a2-d1e0a498d9b5",
    "228c829d-4f66-431f-bb20-1b3aed2869b6",
  ];

  const fetchArticle = async (articleId) => {
    try {
      const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchInitialArticles = async () => {
    const initialArticles = await Promise.all(initialArticleIdsToFetch.map(fetchArticle));
    return initialArticles;
  };

  const fetchRemainingArticles = async () => {
    const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
    if (response.status === 200) {
      const data = await response.json();
      return data.filter(article => !initialArticleIdsToFetch.includes(article.id));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const initialArticles = await fetchInitialArticles();
      const remainingArticles = await fetchRemainingArticles();
      const allArticles = [...initialArticles, ...remainingArticles];
      setArticles(allArticles);
    };

    fetchData();
  }, []);

  const getNextGroup = () => {
    const nextGroup = (currentGroup + 1) % Math.ceil(articles.length / 3);
    setCurrentGroup(nextGroup);
  };

  const getPreviousGroup = () => {
    const previousGroup = (currentGroup - 1 + Math.ceil(articles.length / 3)) % Math.ceil(articles.length / 3);
    setCurrentGroup(previousGroup);
  };

  return (
    <>
      <section className="article-news-section">
        <div className="container">
          <div className="section-title-button">
            <SectionTitleBox title="Article & News" description="Get Every Single Articles & News" />
            <div className="center-content">
              <Button type="yellow" title="Browse Articles" url="news" />
            </div>
          </div>
          <div className="image-spacing">
            {articles.slice(currentGroup * 3, currentGroup * 3 + 3).map((article, index) => (
              <ArticleNewsSectionBox
                key={index}
                id={article.id}
                published={article.published}
                imageUrl={article.imageUrl}
                title={article.title}
                category={article.category}
                content={article.content}
              />
            ))}
          </div>
          <div className="circle-boxes">
            {articles.length > 3 && (
              <>
                <button onClick={getPreviousGroup} disabled={currentGroup === 0}>Back</button>
                <button onClick={getNextGroup} disabled={currentGroup === Math.ceil(articles.length / 3) - 1}>Next</button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleNewsSection;
