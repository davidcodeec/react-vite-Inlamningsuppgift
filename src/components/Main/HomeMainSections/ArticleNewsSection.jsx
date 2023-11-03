import React, { useState, useEffect } from 'react';
import '../HomeMainSections/ArticleNewsSection.css';
import SectionTitleBox from '../../Generics/MainGenerics/SectionTitleBox';
import ArticleNewsSectionBox from '../../Generics/MainGenerics/ArticleNewsSectionBox';
import Button from '../../Generics/Button';

const ArticleNewsSection = () => {
  const [articles, setArticles] = useState([]); // State variable to store articles

   const articleIdsToFetch = [
    "cb24396b-ae21-4c34-a267-d0cd0600aa6d",
    "ef44d5ef-7c50-4fbe-90a2-d1e0a498d9b5",
    "228c829d-4f66-431f-bb20-1b3aed2869b6",
  ];

  const fetchArticles = async (articleId) => {
    try {
      if (articleId !== undefined) {
        const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`);
        if (response.status === 200) {
          const data = await response.json();
          return data;
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchAllArticles = async () => {
      const fetchedArticles = [];

      for (const articleId of articleIdsToFetch) {
        const article = await fetchArticles(articleId);
        if (article) {
          fetchedArticles.push(article);
        }
      }

      setArticles(fetchedArticles);
    };

    fetchAllArticles();
  }, []); // Empty dependency array to fetch articles only once on component mount

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
            {articles.map((article, index) => (
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
            <div className="circles"></div>
            <div className="active circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>
        </div>
      </section>

    </>
  );
};


export default ArticleNewsSection;