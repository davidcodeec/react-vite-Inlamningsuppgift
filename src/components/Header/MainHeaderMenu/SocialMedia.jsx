import React from 'react'
import '../../Header/Header.css';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className="social-media">
        <Link to="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
        <Link to="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
        <Link to="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
        <Link to="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
      </div>
  )
}

export default SocialMedia