import React from 'react'
import '../../Header/Header.css';


const Menu = () => {
  return (
    <div className="menu">
        <div className="top-menu">
          <div className="contact-information">
            <div className="content-box">
              <i className="fa-sharp fa-regular fa-phone-volume"></i>
              +46 (8) 121 470 50
            </div>
            <div className="content-box">
              <i className="fa-sharp fa-regular fa-envelope"></i>
              info@crito.com
            </div>
            <div className="content-box last">
              <i className="fa-regular fa-location-dot"></i>
              Sveavägen 31, 1134 STOCKHOLM
            </div>
          </div>

        </div>
      </div>
  )
}

export default Menu