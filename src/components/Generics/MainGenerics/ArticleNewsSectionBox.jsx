import React from 'react'
import { Link } from 'react-router-dom';


const ArticleNewsSectionBox = ({id,title,category,content,imageUrl,published}) => {

  function formatDate(dateString) {  
      
    const options = { day: 'numeric', month: 'short' }; 
    
    const formattedDate = new Date(dateString).toLocaleDateString('en-GB', options);

    return formattedDate;
  
  }


  const formattedDate = formatDate(published);

  // Split the formatted date into day and month
  const [day, month] = formattedDate.split(' ');


  return (
    <>
        <Link to={`/news/${id}`} className="text-decoration-none">
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
      </Link>
    </>
  )
}

export default ArticleNewsSectionBox