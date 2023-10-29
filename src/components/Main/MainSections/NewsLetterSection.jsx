import React from 'react'

const NewsLetterSection = () => {
  return (
    <section className="newsletter">
      <img className="newsletter-background-lines" src="images/icon15.svg" alt="Image Line"/>
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