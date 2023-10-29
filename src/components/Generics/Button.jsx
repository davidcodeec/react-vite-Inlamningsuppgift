import React from 'react'


// You can declare a function containing the parameters text and url which is used in ShowcaseSection.js or in general

const Button = ({type, title, url}) => {

  const buttonClasssName = () => {
      switch(type){
         case 'yellow':
          return 'btn-yellow'
          case 'login':
            return 'btn-yellow btn-login' 
         case 'dark':
          return 'btn-black'
         case 'transparent':
           return 'btn-transparent'
         default:
          return 'btn-yellow'
      }
  }

  return (
    <a className={buttonClasssName()} href={url}>
        {title}
    <i className="fa-solid fa-arrow-up-right"></i>
    </a>
  )
}

export default Button