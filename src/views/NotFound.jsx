import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import img_not_found from '../assets/images/dribbble_1.gif'

const NotFound = () => {
  return (
    <div className='not-found'>
       <div className='text-image-not-found'>
        <div>
            <h1>404 Page Not Found</h1>
        </div>
        <div>
           <img src={img_not_found} alt="Page not Found Image"/>
        </div>
        <div>
           <Link className="btn-yellow" to="/">Go to Home<i className="fa-solid fa-arrow-up-right"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound