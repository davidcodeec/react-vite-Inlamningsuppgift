import React from 'react'
import './ContactMenuSection.css'

const ContactMenuSection = () => {
  return (
    <>
      <section class="contact-menu-section">

            <div class="container">
                <div class="content">
                    <div class="contact-menu">
                        <div class="contact-menu-card">
                            <div><i class="fa-sharp fa-light fa-location-dot fa-2xl"></i></div>
                            <div class="contact-menu-card-text">
                                <h3>Visit us</h3>
                                <p>Sveavägen 31 <br/>111 34 STOCKHOLM</p>
                            </div>
                        </div>
                        <div class="contact-menu-card">
                            <i class="fa-light fa-phone fa-2xl"></i>
                            <div class="contact-menu-card-text">
                                <h3>Call us</h3>
                                <p>+46 (8) 121 470 50 <br/> +46 (8) 121 470 51</p>

                            </div>
                        </div>
                        <div class="contact-menu-card">
                            <i class="fa-thin fa-envelope fa-2xl"></i>
                            <div class="contact-menu-card-text">
                                <h3>Email us</h3>
                                <p>info@crito.com <br/> support@crito.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

    </>
  )
}

export default ContactMenuSection