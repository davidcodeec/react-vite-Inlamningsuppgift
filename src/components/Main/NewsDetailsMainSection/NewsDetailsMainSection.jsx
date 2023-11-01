import React from 'react'
import { useParams } from 'react-router-dom';
import './NewsDetailsMainSection.css'
import image_12 from '../../../assets/images/image12.png'
import image_13 from '../../../assets/images/image13.png'
import image_14 from '../../../assets/images/image14.png'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';



const NewsDetailsMainSection = () => {

    const [article, setArticles] = useState([]); // State variable to store articles
    const {id} = useParams()

    const fetchArticles = async () => {
        try {
          if (id !== undefined) {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
            if (result.status === 200) {
              const data = await result.json();
              setArticles(data);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
  
    // Use the useEffect hook to fetch data when the component mounts
    useEffect(() => {
      fetchArticles();
    }, []);


  return (
    <>
<section className="article-news-section">
    <div className="container">

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
              <a className="btn-white" href="projects.html">Freelance</a>
            </div>

            <div className="center-content">
              <a className="btn-white" href="projects.html">Freelance</a>
            </div>

            <div className="center-content">
              <a className="btn-white" href="projects.html">Earning</a>
            </div>

            <div className="center-content">
              <a className="btn-white" href="projects.html">Design</a>
            </div>

            <div className="center-content">
              <a className="btn-white" href="projects.html">Work</a>
            </div>

            <div className="center-content">
              <a className="btn-white" href="projects.html">Marketing</a>
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
            <a className="active" href="">
              <h2 className="active">Categories</h2>
            </a>
            <h6>Technology <span>- 20 Posts</span></h6>
            <h6>Freelancing <span>- 07 Posts</span></h6>
            <h6>Writing <span>- 16 Posts</span></h6>
            <h6>Marketing <span> - 11 Posts</span> </h6>
            <h6>Business <span>- 35 Posts</span> </h6>
            <h6>Education <span> - 14 Posts</span> </h6>
          </div>


        </div>
      </div>

    </div>





   
  </section>


  <section className="article-news-section">
  <div className="container">
    <div className="section-title-button">
      <div className="section-title">
        <p>Article & News</p>
        <h2>Get Every Single Articles & News</h2>
      </div>
      <div className="center-content">
        <a className="btn-black" href="projects.html">Browse Articles<i className="fa-solid fa-arrow-up-right"></i></a>
      </div>
    </div>

    <div className="image-spacing">
      <div className="image-spacing-text">
        <div className="date">
          <h3>25</h3>
          <p>Mar</p>
        </div>
        <img src={image_12} alt="Woman Standing" />
        <p>Business</p>
        <h3>How To Use Digitalization In The Classroom</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>

      <div className="image-spacing-text">
        <div className="date">
          <h3>17</h3>
          <p>Mar</p>
        </div>
        <img src={image_13} alt="Man Standing" />
        <p>Business</p>
        <h3>How To Implement Chat GPT In Your Projects</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>

      <div className="image-spacing-text">
        <div className="date">
          <h3>13</h3>
          <p>Mar</p>
        </div>
        <img src={image_14} alt="Woman close to the window" />
        <p>Business</p>
        <h3>The Guide To Support Modern CSS Design</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>
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

export default NewsDetailsMainSection