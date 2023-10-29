import React from 'react'

const ProjectCaseSection = () => {
  return (
    <section className="project-case-section">
      <div className="container">
        <div className="section-title">
          <p>Project & Case Studies</p>
          <h2>Let's Looks Our Global Projects</h2>
        </div>
        <div className="project-end-case">
          <a className="project" href="">
            <img src="images/Image3.png" alt="Man with Newspaper"/>
            <h3>Grow your business</h3>
            <div className="readmore">Read More<i className="fa-solid fa-arrow-up-right"></i></div>
          </a>
          <a className="project" href="">
            <img src="images/Image4.png" alt="Phone with other products"/>
            <h3>Why your client needs a responsive website</h3>
            <div className="readmore">Read More<i className="fa-solid fa-arrow-up-right"></i></div>
          </a>
          <a className="project" href="">
            <img src="images/Image5.png" alt="Book and cup"/>
            <h3>Educate your employees to get better results</h3>
            <div className="readmore">Read More<i className="fa-solid fa-arrow-up-right"></i></div>
          </a>
          <a className="project" href="">
            <img src="images/Image6.png" alt="Laptop on the desk"/>
            <h3>Business Insights is a important piece of your business</h3>
            <div className="readmore">Read More<i className="fa-solid fa-arrow-up-right"></i></div>
          </a>
        </div>

        <div className="center-content">
          <a className="btn-black" href="projects.html">All Recent Projects<i className="fa-solid fa-arrow-up-right"></i></a>
        </div>

      </div>
    </section>

  )
}

export default ProjectCaseSection