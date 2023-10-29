import React from 'react'

const ContactBox = ({title,discription}) => {
  return (
    <div class="contact-menu-card">
      <div><i class="fa-sharp fa-light fa-location-dot fa-2xl"></i></div>
      <div class="contact-menu-card-text">
          <h3>{Visit us}</h3>
          <p>Sveavägen 31 <br/>111 34 STOCKHOLM</p>
      </div>
  </div>
  )
}

export default ContactBox





import React from 'react'

const ServiceBox = ({title, discription, url}) => {
  return (
    <div className="services-card-button sevice-box">
              <h3>{title}</h3>
              <p>{discription}</p>
              <a href={url}><button className="btn-play"><i className="fa-solid fa-play"></i></button></a>
     </div>
  )
}

export default ServiceBox