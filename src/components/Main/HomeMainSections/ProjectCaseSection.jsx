import React from 'react'
import { Link } from 'react-router-dom'
import '../HomeMainSections/ProjectCaseSection.css'
import image_3 from '../../../assets/images/image3.png'
import image_4 from '../../../assets/images/image4.png'
import image_5 from '../../../assets/images/image5.png'
import image_6 from '../../../assets/images/image6.png'

const ProjectCaseSection = () => {
  return (
    <section className="project-case-section">
      <div className="container">
        <div className="section-title">
          <p>Project & Case Studies</p>
          <h2>Let's Looks Our Global Projects</h2>
        </div>
        <div className="project-end-case">
          <Link className="project" href="">
            <img src={image_3} alt="Man with Newspaper"/>
            <h3>Grow your business</h3>
            <div className="readmore">Read More<i className="fa-solid fa-arrow-up-right"></i></div>
          </Link>
          <Link className="project" href="">
            <img src={image_4} alt="Phone with other products"/>
            <h3>Why your client needs a responsive website</h3>
            <div className="readmore">Read More<i className="fa-solid fa-arrow-up-right"></i></div>
          </Link>
          <Link className="project" href="">
            <img src={image_5} alt="Book and cup"/>
            <h3>Educate your employees to get better results</h3>
            <div className="readmore">Read More<i className="fa-solid fa-arrow-up-right"></i></div>
          </Link>
          <Link className="project" href="">
            <img src={image_6} alt="Laptop on the desk"/>
            <h3>Business Insights is a important piece of your business</h3>
            <div className="readmore">Read More<i className="fa-solid fa-arrow-up-right"></i></div>
          </Link>
        </div>

        <div className="center-content">
          <Link className="btn-black" to="projects.html">All Recent Projects<i className="fa-solid fa-arrow-up-right"></i></Link>
        </div>

      </div>
    </section>

  )
}

export default ProjectCaseSection