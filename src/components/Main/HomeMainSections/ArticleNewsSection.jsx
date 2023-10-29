import React from 'react'
import { Link } from 'react-router-dom'
import '../HomeMainSections/ArticleNewsSection.css'
import image_12 from '@images/image12.png'
import image_13 from '@images/image13.png'
import image_14 from '@images/image14.png'

const ArticleNewsSection = () => {
  return (
    <>
    <section className="article-news-section">
    <div className="container">

      <div className="section-title-button">


        <div className="section-title">
          <p>Article & News</p>
          <h2>Get Every Single Articles & News</h2>
        </div>

        <div className="center-content">
          <button className="btn-yellow">Browse Articles<i className="fa-solid fa-arrow-up-right"></i></button>
        </div>

      </div>

    
      <div className="image-spacing">
        <Link className="text-decoration-none" to="news_details.html">
          <div className="image-spacing-text">
            <div className="date">
              <h3>25</h3>
              <p>Mar</p>
            </div>
            <img src={image_12} alt="Woman Standing"/>
            <p>Business</p>
            <h3>How To Use Digitalization In The Classroom</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
          </div>
        </Link>

        <div className="image-spacing-text">
          <div className="date">
            <h3>17</h3>
            <p>Mar</p>
          </div>
          <img src={image_13} alt="Man Standing"/>
          <p>Business</p>
          <h3>How To Implement Chat GPT In Your Projects</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </div>

        <div className="image-spacing-text">
          <div className="date">
            <h3>13</h3>
            <p>Mar</p>
          </div>
          <img src={image_14} alt="Woman close to the window"/>
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

export default ArticleNewsSection