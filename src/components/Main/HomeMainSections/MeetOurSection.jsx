import React from 'react'
import { Link } from 'react-router-dom'
import '../HomeMainSections/MeetOurSection.css'
import image_8 from '../../../assets/images/Image8.png'
import image_9 from '../../../assets/images/Image9.png'
import image_10 from '../../../assets/images/Image10.png'
import image_11 from '../../../assets/images/Image11.png'
import eclipse_1 from '../../../assets/images/Ellipse1.png'
import eclipse_2 from '../../../assets/images/Ellipse2.png'
import eclipse_3 from '../../../assets/images/Ellipse3.png'


const MeetOurSection = () => {
  return (
    <section className="meet-our-section">
      <div className="container">

        <div className="section-title-button">


          <div className="section-title">
            <p>Meet Our Team</p>
            <h2>Experience Team Members</h2>
          </div>

          <div className="center-content">
            <Link className="btn-yellow" to="projects.html">Browse Team<i className="fa-solid fa-arrow-up-right"></i></Link>
          </div>

        </div>


        <div className="image-spacing">
          <img src={image_8} alt="Woman Standing"/>
          <img src={image_9} alt="Man Standing"/>
          <img src={image_10} alt="Woman close to the window"/>
          <img src={image_11} alt="Man smiling"/>
        </div>

        <div className="circle-boxes">
          <div className="circles"></div>
          <div className="active circles"></div>
          <div className="circles"></div>
          <div className="circles"></div>
          <div className="circles"></div>
        </div>

        <div className="text-box-images">
          <div className="text-box">
            <p>Testimonial</p>
            <h2>What Our Client Says</h2>
          </div>
          <div className="text-box-star-icon">
            <div>
              <div>
                <i className="fa-solid fa-star" style={{color: "#f94d3a"}}></i>
                <i className="fa-solid fa-star" style={{color: "#f94d3a"}}></i>
                <i className="fa-solid fa-star" style={{color: "#f94d3a"}}></i>
                <i className="fa-solid fa-star" style={{color: "#f94d3a"}}></i>
              </div>
              <p>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui,
                dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
              </p>

              <img src={eclipse_1} alt=""/>

            </div>

            <div>
            <div>
                <i className="fa-solid fa-star"  style={{color: "#f94d3a"}}></i>
                <i className="fa-solid fa-star"  style={{color: "#f94d3a"}}></i>
                <i className="fa-solid fa-star"  style={{color: "#f94d3a"}}></i>
                <i className="fa-solid fa-star"  style={{color: "#f94d3a"}}></i>
             </div>


              <p>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui,
                dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
              </p>

              <img src={eclipse_2} alt=""/>

            </div>

            <div>
              <div>
                <i className="fa-solid fa-star"  style={{color: "#f94d3a"}}></i>
                <i className="fa-solid fa-star"  style={{color: "#f94d3a"}}></i>
                <i className="fa-solid fa-star"  style={{color: "#f94d3a"}}></i>
                <i className="fa-solid fa-star"  style={{color: "#f94d3a"}}></i>
              </div>

              <p>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui,
                dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
              </p>

              <img src={eclipse_3} alt=""/>

            </div>

          </div>


          <div className="center-content">
            <button className="btn-yellow" href="projects.html">All Reviews<i
                className="fa-solid fa-arrow-up-right"></i></button>
          </div>

        </div>

      </div>

    </section>

  )
}

export default MeetOurSection