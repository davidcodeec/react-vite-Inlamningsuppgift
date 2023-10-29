import React from 'react'
import { Link } from 'react-router-dom'

const LogoImageText = () => {
  return (
    <>
        <div>
            <Link to=""><img src="Images/Logo.svg" alt="Logo"/></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates!
              Voluptates laborum
              namratione minus necessitatibus, iure praesentium.</p>
          </div>
    </>
  )
}

export default LogoImageText