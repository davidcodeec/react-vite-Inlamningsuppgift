import React from 'react'

const ArticleNewsSection = () => {
  return (
    <section className="article-news-section">
    <div className="container">

      <div className="section-title-button">


        <div className="section-title">
          <p>Article & News</p>
          <h2>Get Every Single Articles & News</h2>
        </div>

        <div className="center-content">
          <button className="btn-black" href="projects.html">Browse Articles<i className="fa-solid fa-arrow-up-right"></i></button>
        </div>

      </div>


      <div className="image-spacing">
        <a className="text-decoration-none" href="news_details.html">
          <div className="image-spacing-text">
            <div className="date">
              <h3>25</h3>
              <p>Mar</p>
            </div>
            <img src="images/Image12.png" alt="Woman Standing"/>
            <p>Business</p>
            <h3>How To Use Digitalization In The Classroom</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
          </div>
        </a>

        <div className="image-spacing-text">
          <div className="date">
            <h3>17</h3>
            <p>Mar</p>
          </div>
          <img src="images/Image13.png" alt="Man Standing"/>
          <p>Business</p>
          <h3>How To Implement Chat GPT In Your Projects</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </div>

        <div className="image-spacing-text">
          <div className="date">
            <h3>13</h3>
            <p>Mar</p>
          </div>
          <img src="images/Image14.png" alt="Woman close to the window"/>
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


  )
}

export default ArticleNewsSection