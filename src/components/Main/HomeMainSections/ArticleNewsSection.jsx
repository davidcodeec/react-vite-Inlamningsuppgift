import React, { useState, useEffect } from "react";
import "./ArticleNewsSection.css";
import SectionTitleBox from "../../Generics/MainGenerics/SectionTitleBox";
import ArticleNewsSectionBox from "../../Generics/MainGenerics/ArticleNewsSectionBox";
import Button from "../../Generics/Button";
import { useArticleContext } from "../../../contexts/ArticleContext";

const ArticleNewsSection = () => {
  const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles";

  // Using useContext and Provider
  const { articles, setArticles } = useArticleContext();

  // Define the initial articles to fetch
  const initialArticleIdsToFetch = [
    "cb24396b-ae21-4c34-a267-d0cd0600aa6d",
    "ef44d5ef-7c50-4fbe-90a2-d1e0a498d9b5",
    "228c829d-4f66-431f-bb20-1b3aed2869b6",
  ];

  const fetchArticle = async (articleId) => {
    try {
      const response = await fetch(`${apiUrl}/${articleId}`);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchInitialArticles = async () => {
    const initialArticles = await Promise.all(
      initialArticleIdsToFetch.map(fetchArticle)
    );
    return initialArticles;
  };

  const fetchRemainingArticles = async () => {
    const response = await fetch(apiUrl);
    if (response.status === 200) {
      const data = await response.json();
      return data.filter(
        (article) => !initialArticleIdsToFetch.includes(article.id)
      );
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

  return (
    <>
      <section className="article-news-section">
        <div className="container">
          <div className="section-title-button">
            <SectionTitleBox
              title="Article & News"
              description="Get Every Single Articles & News"
            />
            <div className="center-content">
              <Button type="yellow" title="Browse Articles" url="news" />
            </div>
          </div>
          <div className="image-spacing">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
            >
              <div className="carousel-indicators">
                {articles.reduce((indicators, _, index) => {
                  if (index % 3 === 0) {
                    const indicatorIndex = index / 3;
                    indicators.push(
                      <button
                        key={indicatorIndex}
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={indicatorIndex}
                        className={indicatorIndex === 0 ? "active" : ""}
                        aria-current={indicatorIndex === 0}
                        aria-label={`Slide ${indicatorIndex + 1}`}
                      ></button>
                    );
                  }
                  return indicators;
                }, [])}
              </div>
              <div className="carousel-inner">
                {articles
                  .reduce((rows, article, index) => {
                    if (index % 3 === 0) {
                      rows.push([article]);
                    } else {
                      rows[rows.length - 1].push(article);
                    }
                    return rows;
                  }, [])
                  .map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className={`carousel-item ${
                        rowIndex === 0 ? "active" : ""
                      }`}
                    >
                      <div className="d-flex">
                        {row.map((article, colIndex) => (
                          <ArticleNewsSectionBox
                            key={colIndex}
                            id={article.id}
                            published={article.published}
                            imageUrl={article.imageUrl}
                            title={article.title}
                            category={article.category}
                            content={article.content}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleNewsSection;
