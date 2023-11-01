import React from 'react'

const ArticleNewsMainSectionBox = ({title,category,content,published,imageUrl}) => {
 
    //Parse the published date string
    const date = new Date(published);
    const day = date.getDate();
    const options = { month: 'short' };
    const month = date.toLocaleDateString('en-US', options);


 
 
    return (
    <>
        <div className="image-spacing-text">
            <div className="date">
              <h3>{day}</h3>
              <p>{month}</p>
            </div>
            <img src={imageUrl} alt="" />
            <p>{title}</p>
            <h3>{category}</h3>
            <p>{content}</p>
          </div>
    </>
  )
}

export default ArticleNewsMainSectionBox