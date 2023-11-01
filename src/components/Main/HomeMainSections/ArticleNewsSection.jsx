import React from 'react'
import '../HomeMainSections/ArticleNewsSection.css'
import SectionTitleBox from '../../Generics/MainGenerics/SectionTitleBox'
import { useState, useEffect } from 'react';
import ArticleNewsSectionBox from '../../Generics/MainGenerics/ArticleNewsSectionBox'
import image_12 from '../../../assets/images/image12.png'
import image_13 from '../../../assets/images/image13.png'
import image_14 from '../../../assets/images/image14.png'
import Button from '../../Generics/Button';

const ArticleNewsSection = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articlesList = [
      { day:"25", month:"Mar", src:image_12, title: "Business", description: "How To Use Digitalization In The Classroom",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." },
      { day:"17", month:"Mar", src:image_13, title: "Business", description: "How To Implement Chat GPT In Your Projects",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  },
      { day:"13", month:"Mar", src:image_14, title: "Business", description: "The Guide To Support Modern CSS Design",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."  },
    ];
    
    setArticles(articlesList);
  }, []);


  return (
    <>
      <section className="article-news-section">
          <div className="container">

            <div className="section-title-button">

              <SectionTitleBox title="Article & News" description="Get Every Single Articles & News" />

              <div className="center-content">
                <Button type="yellow" title="Browse Articles" url="articles" />
              </div>

            </div>


            <div className="image-spacing">
              {articles.map((article, index) => (
                <ArticleNewsSectionBox
                  key={index}
                  day={article.day}
                  month={article.month}
                  src={article.src}
                  alt={article.title}
                  title={article.title}
                  description={article.description}
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

  )
}

export default ArticleNewsSection