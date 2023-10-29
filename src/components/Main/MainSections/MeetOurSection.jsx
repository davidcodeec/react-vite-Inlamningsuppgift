import React from 'react'

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
            <button className="btn-yellow" href="projects.html">Browse Team<i className="fa-solid fa-arrow-up-right"></i></button>
          </div>

        </div>


        <div className="image-spacing">
          <img src="images/Image8.png" alt="Woman Standing"/>
          <img src="images/Image9.png" alt="Man Standing"/>
          <img src="images/Image10.png" alt="Woman close to the window"/>
          <img src="images/Image11.png" alt="Man smiling"/>
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

              <img src="images/Ellipse1.png" alt=""/>

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

              <img src="images/Ellipse2.png" alt=""/>

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

              <img src="images/Ellipse3.png" alt=""/>

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