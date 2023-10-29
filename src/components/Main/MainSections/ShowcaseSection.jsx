import React from 'react'
import background_lines from '../../../assets/images/icon14.svg'
import man_in_suito from '../../../assets/images/image.png'

const ShowcaseSection = () => {
  return (
    <>
      <section className="showcase">
      <img className="background-lines" src={background_lines} alt="Image Line"/>
      <div className="container">
        <div className="content">
          <h1>We provide The Best business solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
          <a className="btn-yellow" href="consulting.html">Get Consulting<i className="fa-solid fa-arrow-up-right"></i></a>
          <a className="btn-transparent" href="services.html">Learn More<i className="fa-solid fa-arrow-up-right"></i></a>
        </div>
        <img src={man_in_suito} alt="Image of a man with a suite with a tablet"/>
      </div>
    </section>
    </>
  )
}

export default ShowcaseSection