import React from 'react'
import { Link } from 'react-router-dom'
import '../HomeMainSections/ArticleNewsSection.css'
import SectionTitleBox from '../../Generics/MainGenerics/SectionTitleBox'
import { useState, useEffect } from 'react';
import ArticleNewsSectionBox from '../../Generics/MainGenerics/ArticleNewsSectionBox'

const ArticleNewsSection = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

      getThreeArticles()

      const interval = setInterval(() => {
        getThreeArticles()
        console.log("Articles fetched")
      }, 5000)

      return () => clearInterval(interval)

  }, [])


  const getThreeArticles = async () => {
      try {
        const result = await fetch('')
        const data = await result.json()
        const firstThreeArticles = data.slice(0, 3); // Get the first three articles
        setArticles(firstThreeArticles); // This set only the first three articles
        console.log('Fetched articles:', firstThreeArticles);

    } catch(error){
          console.log(error)
      }
    
  } 



  return (
    <>
      <section className="article-news-section">
          <div className="container">
            <div className="section-title-button">
              <SectionTitleBox title="Article & News" description="Get Every Single Articles & News" />
              <div className="center-content">
                <button className="btn-yellow">
                  Browse Articles<i className="fa-solid fa-arrow-up-right"></i>
                </button>
              </div>
            </div>

            <div className="image-spacing">
              <Link className="text-decoration-none" to="news_details.html">
                {articles.map((article) => (
                  <div key={article.id} className="image-spacing-text">
                    <div className="date">
                      <h3>{article.day}</h3>
                      <p>{article.month}</p>
                    </div>
                    <img src={article.imageUrl} alt={article.title} />
                    <div className="article-details">
                      <p>{article.title}</p>
                      <h3>{article.category}</h3>
                      <p>{article.content}</p>
                      <p>{article.author}</p>
                    </div>
                  </div>
                ))}
              </Link>
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

  )
}

export default ArticleNewsSection