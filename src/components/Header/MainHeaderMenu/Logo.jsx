import React from 'react'
import { Link } from 'react-router-dom'; // Import the NavLink component from react-router-dom
import img_backgroundlines from '../../../../src/assets/images/Logo.svg'
import '../../Header/Header.css';

const Logo = () => {
  return (
    <>
    <div className='logo'>
        <Link href="/"><img src={img_backgroundlines} alt="Logo"/></Link>
      </div>
      <button className="menu-bars"><i className="fa-sharp fa-solid fa-bars"></i></button>
      </>
  )
}

export default Logo