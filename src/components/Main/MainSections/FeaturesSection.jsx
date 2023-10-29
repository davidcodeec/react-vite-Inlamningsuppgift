import React from 'react'
import icon_6 from '../../../assets/images/icon6.svg'
import icon_7 from '../../../assets/images/icon7.svg'
import icon_8 from '../../../assets/images/icon8.svg'
import icon_9 from '../../../assets/images/icon9.svg'


const FeaturesSection = () => {
  return (
    <section className="features">
    <div className="container">
      <div className="content">
        <h4>Features</h4>
        <p>Our Accounting is trusted by thousand of companies</p>
        <a className="btn-yellow" href="about.html">Learn More<i className="fa-solid fa-arrow-up-right"></i></a>
      </div>

      <div className="container content-items">
        <div>
          <img src={icon_6} alt='Alt text for embed'/>
          <h2>Business Advice</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <img src={icon_7} alt='Alt text for embed'/>
          <h2>Financial Advice</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <img src={icon_8} alt='Alt text for embed'/>
          <h2>Startup Business</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <img src={icon_9} alt='Alt text for embed'/>
          <h2>Risk Management</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection