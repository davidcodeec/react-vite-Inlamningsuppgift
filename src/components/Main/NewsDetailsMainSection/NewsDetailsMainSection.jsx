import React from 'react'
import { Link, useParams } from 'react-router-dom';
import './NewsDetailsMainSection.css'
import SectionTitleBox from '../../Generics/MainGenerics/SectionTitleBox';
import ArticleNewsSectionBox from '../../Generics/MainGenerics/ArticleNewsSectionBox';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Generics/Button';



const NewsDetailsMainSection = () => {

  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [additionalArticles, setAdditionalArticles] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(0);

  // Define the number of articles to show in each group
  const articlesPerPage = 3;

  const initialArticleIdsToFetch = [
    "cb24396b-ae21-4c34-a267-d0cd0600aa6d",
    "ef44d5ef-7c50-4fbe-90a2-d1e0a498d9b5",
    "228c829d-4f66-431f-bb20-1b3aed2869b6",
  ];

  const fetchArticle = async (articleId) => {
    try {
      if (articleId !== undefined) {
        const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`);
        if (response.status === 200) {
          const data = await response.json();
          return data;
        } else {
          console.error(`Error fetching article with ID ${articleId}: HTTP status ${response.status}`);
        }
      }
    } catch (error) {
      console.error(`Error fetching article with ID ${articleId}:`, error);
    }
  };

  const fetchInitialArticles = async () => {
    const initialArticles = await Promise.all(initialArticleIdsToFetch.map(fetchArticle));
    return initialArticles;
  };

  const fetchAdditionalArticles = async () => {
    const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
    if (response.status === 200) {
      const data = await response.json();
      return data.filter(article => !initialArticleIdsToFetch.includes(article.id));
    } else {
      console.error('Error fetching additional articles:', response.status);
    }
  };

  const getPreviousGroup = () => {
    setCurrentGroup(Math.max(currentGroup - 1, 0));
  };

  const getNextGroup = () => {
    setCurrentGroup(Math.min(currentGroup + 1, Math.ceil(additionalArticles.length / articlesPerPage) - 1));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        // Fetch the primary article
        const primaryArticle = await fetchArticle(id);

        // Fetch additional articles from the API
        const initialArticles = await fetchInitialArticles();
        const additionalArticlesData = await fetchAdditionalArticles();

        // Set the primary article
        setArticle(primaryArticle);

        // Set the additional articles
        setAdditionalArticles([...initialArticles, ...additionalArticlesData]);
      }
    };

    fetchData();
  }, [id]);
  

  return (
    <>
<section className="article-news-section">
    <div className="container">
    {article ? (
      <div className="section-title">
        <h2>{article.title}</h2>

        <div className="section-title-name-date">
          <div className="circle-spacing">
            <h4>{article.published}</h4>
          </div>
          <div className="circle-spacing">
            <h4><i className="fa-solid fa-circle fa-xs" style={{ color: ' #f5d783' }}></i>{article.category}</h4> 
          </div>
          <div className="circle-spacing">
            <h4><i className="fa-solid fa-circle fa-xs" style={{ color: ' #f5d783' }}></i>{article.author}</h4>
          </div>
        </div>
      </div>
       ) : null}

      {article ? (
      <div className="image-spacing">
        <div className="image-spacing-text">
          <img src={article.imageUrl} alt="Woman Standing"/>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,
            magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.

            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra
            nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui
            purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend.
            Ut nonummy.

            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,
            magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc
            viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.

            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem
            venenatis eleifend. Ut nonummy.</p>
          <p className="italic-text"><i className="fa-sharp fa-solid fa-quote-right fa-flip-horizontal"
              style={{ color: '#191919' }}></i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet
            commodo magna eros quis urna.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,
            magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc
            viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. </p>

          <div className="button-spacing">
            <div className="center-content">
              <Link className="btn-white" to="projects.html">Freelance</Link>
            </div>

            <div className="center-content">
              <Link className="btn-white" to="projects.html">Freelance</Link>
            </div>

            <div className="center-content">
              <Link className="btn-white" to="projects.html">Earning</Link>
            </div>

            <div className="center-content">
              <Link className="btn-white" to="projects.html">Design</Link>
            </div>

            <div className="center-content">
              <Link className="btn-white" to="projects.html">Work</Link>
            </div>

            <div className="center-content">
              <Link className="btn-white" to="projects.html">Marketing</Link>
            </div>
          </div>
        </div>

        <div>

          <form className="searchbox">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="" value="" placeholder="Type to search..."/>
          </form>

          <div className="image-spacing-text1">


            <div>
              <NavLink to="">
                <h2>Recent Posts</h2>
              </NavLink>
              <h6>How To Blow Through Capital At An Incredible Rate</h6>
              <p>Jan 14, 2020</p>

              <h6 className="active">Design Studios That Everyone Should Know About? </h6>
              <p>Jan 14, 2020</p>

              <h6>How did we get 1M+ visitors in 30 days without anything!</h6>
              <p>Jan 14, 2020</p>

              <h6>Figma On Figma: How We Built Our Website Design System</h6>
              <p>Jan 14, 2020</p>
            </div>


          </div>

          <div className="image-spacing-text2">
            <NavLink to="">
              <h2 className="active">Categories</h2>
            </NavLink>
            <h6>Technology <span>- 20 Posts</span></h6>
            <h6>Freelancing <span>- 07 Posts</span></h6>
            <h6>Writing <span>- 16 Posts</span></h6>
            <h6>Marketing <span> - 11 Posts</span> </h6>
            <h6>Business <span>- 35 Posts</span> </h6>
            <h6>Education <span> - 14 Posts</span> </h6>
          </div>


        </div>
      </div>


      ) : null}
    </div>





   
  </section>


  <section className="article-news-section">
        <div className="container">
          <div className="section-title-button">
            <SectionTitleBox title="Article & News" description="Get Every Single Articles & News" />
            <div className="center-content">
              <Button type="yellow" title="Browse Articles" url="/news" />
            </div>
          </div>
          <div className="image-spacing">
            {additionalArticles
              .slice(currentGroup * articlesPerPage, currentGroup * articlesPerPage + articlesPerPage)
              .map((additionalArticle, index) => (
                <ArticleNewsSectionBox
                  key={index}
                  id={additionalArticle.id}
                  published={additionalArticle.published}
                  imageUrl={additionalArticle.imageUrl}
                  title={additionalArticle.title}
                  category={additionalArticle.category}
                  content={additionalArticle.content}
                />
              ))}
          </div>
          <div className="circle-boxes">
            {additionalArticles.length > articlesPerPage && (
              <>
                <button onClick={getPreviousGroup} disabled={currentGroup === 0}>
                  Previous
                </button>
                <button
                  onClick={getNextGroup}
                  disabled={currentGroup === Math.ceil(additionalArticles.length / articlesPerPage) - 1}
                >
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </section>





    </>
  )
}

export default NewsDetailsMainSection