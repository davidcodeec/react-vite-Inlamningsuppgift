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
import { useState, useEffect } from 'react';
import ImagesBox from '../../Generics/MainGenerics/ImagesBox'
import Button from '../../Generics/Button'
import SectionTitle from '../../Generics/MainGenerics/SectionTitleBox'


const MeetOurSection = () => {

  const [meetOurSections, setMeetOurSection] = useState([]);

  useEffect(() => {
    const meetOurSectionList = [
      { src:image_8, alt:"" },
      { src:image_9, alt:"" },
      { src:image_10, alt:"" },
      { src:image_11, alt:"" },
    ];
    
    setMeetOurSection(meetOurSectionList);

  }, []);


  return (
    <section className="meet-our-section">
      <div className="container">

        <div className="section-title-button">

          <SectionTitle title="Meet Our Team" description="Experience Team Members" />

          <div className="center-content">
            <Button type="yellow" title="Browse Team" url="projects" />
          </div>

        </div>


        <div className="image-spacing">
        {meetOurSections.map((meetOurSection, index) => (
            <ImagesBox key={index} src={meetOurSection.src} alt={meetOurSection.title} />
          ))}
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
             <Button type="yellow" title="All Reviews" url="reviews" /> 
          </div>

        </div>

      </div>

    </section>

  )
}

export default MeetOurSection