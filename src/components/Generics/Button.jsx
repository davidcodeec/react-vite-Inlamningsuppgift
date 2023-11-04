import React from 'react'
import { Link } from 'react-router-dom'


// You can declare a function containing the parameters text and url which is used in ShowcaseSection.js or in general

const Button = ({type, title, url}) => {

  const buttonClasssName = () => {
      switch(type){
         case 'yellow':
          return 'btn-yellow'
          case 'login':
            return 'btn-login' 
         case 'black':
          return 'btn-black'
         case 'transparent':
           return 'btn-transparent'
         default:
          return 'btn-yellow'
      }
  }

  return (
    <Link className={buttonClasssName()} to={url}>
        {title}
    <i className="fa-solid fa-arrow-up-right"></i>
    </Link>
  )
}

export default Button