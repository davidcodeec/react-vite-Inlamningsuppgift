import React from 'react'
import './ContactSection.css'
import { NavLink } from 'react-router-dom'

const ContactSection = () => {
  return (
    <>
         <section class="contact-section">

            <div class="container">
                <div class="content">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </nav>
                    <h2>Let's Connect</h2>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactSection