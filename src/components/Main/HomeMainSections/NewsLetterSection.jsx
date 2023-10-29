import React from 'react'
import { Link } from 'react-router-dom'
import '../HomeMainSections/NewsLetterSection.css'
import icon_15 from '../../../assets/images/icon15.svg'

const NewsLetterSection = () => {
  return (
    <section className="newsletter">
      <img className="newsletter-background-lines" src={icon_15} alt="Image Line"/>
      <div className="container">
        <h2>Get News Updates By Signup</h2>
        <form>
          <input type="text" name="" value="" placeholder="username@domain.com"/>
          <button className="btn-yellow">Subscribe<i className="fa-solid fa-arrow-up-right"></i></button>
        </form>
      </div>
    </section>
  )
}

export default NewsLetterSection