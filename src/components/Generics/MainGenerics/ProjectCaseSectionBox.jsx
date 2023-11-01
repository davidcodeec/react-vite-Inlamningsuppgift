import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCaseSectionBox = ({src,alt,title,description}) => {
  return (
    <>
         <Link className="project" to="">
            <img src={src} alt={alt}/>
            <h3>{title}</h3>
            <div className="readmore">{description}<i className="fa-solid fa-arrow-up-right"></i></div>
          </Link>
    </>
  )
}

export default ProjectCaseSectionBox