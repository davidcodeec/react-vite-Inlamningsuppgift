import React from 'react'

const ChooseUseBox = ({ src, alt, title, description })  => {
  return (
    <>
     <img src={src} alt={alt}/>
        <div className="choose-us-icon-text">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </>
  )
}

export default ChooseUseBox