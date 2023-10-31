import React from 'react'

const ArticleNewsSectionBox = ({title,imageUrl,content,author, published, category}) => {

   // Parse the published date string
   const date = new Date(published);

   // Format the day and month
   const options = { day: 'numeric', month: 'short' };
   const formattedDate = date.toLocaleDateString('en-US', options);
 
   const day = date.getDate();
   const month = formattedDate.split(' ')[1];


  return (
    <>
         <div className="image-spacing-text">
            <div className="date">
              <h3>{day}</h3>
              <p>{month}</p>
            </div>
            <img src={imageUrl} alt=""/>
            <p>{title}</p>
            <h3>{category}</h3>
            <p>{content}</p>
            <p>{author}</p>
          </div>
    </>
  )
}

export default ArticleNewsSectionBox