import React from 'react'

const ArticleNewsSectionBox = ({day,month,src,alt,title,description,content}) => {

  return (
    <>
         <div className="image-spacing-text">
            <div className="date">
              <h3>{day}</h3>
              <p>{month}</p>
            </div>
            <img src={src} alt={alt}/>
            <p>{title}</p>
            <h3>{description}</h3>
            <p>{content}</p>
          </div>
    </>
  )
}

export default ArticleNewsSectionBox