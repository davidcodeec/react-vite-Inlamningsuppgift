import React from 'react'

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <p>Our Services</p>
          <h2>We Provide The Best Service For Consulting</h2>
        </div>
        <div className="services-cards">
          <div className="services-box-button services-section-box">


            <div className="services-card-button sevice-box">
              <h3>Business Advice</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
              <button className="btn-play"><i className="fa-solid fa-play"></i></button>
            </div>


            <div className="services-box-button sevice-box">
              <h3>Startup Business</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
              <button className="btn-play"><i className="fa-solid fa-play"></i></button>
            </div>
            <div className="services-box-button sevice-box">
              <h3>Financial Advice</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
              <button className="btn-play"><i className="fa-solid fa-play"></i></button>
            </div>
            <div className="services-box-button sevice-box">
              <h3>Risk Management</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
              <button className="btn-play"><i className="fa-solid fa-play"></i></button>
            </div>

            <div className="center-content">
              <a className="btn-black" href="projects.html">Browse Services<i className="fa-solid fa-arrow-up-right"></i></a>
            </div>
          </div>


        </div>
      </div>
    </section>

  )
}

export default ServicesSection