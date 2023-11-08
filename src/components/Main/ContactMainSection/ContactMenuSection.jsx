import React from "react";
import "./ContactMenuSection.css";

const ContactMenuSection = () => {
  return (
    <>
      <section className="contact-menu-section">
        <div className="container">
          <div className="content">
            <div className="contact-menu">
              <div className="contact-menu-card">
                <div>
                  <i className="fa-sharp fa-light fa-location-dot fa-2xl"></i>
                </div>
                <div className="contact-menu-card-text">
                  <h3>Visit us</h3>
                  <p>
                    Sveavägen 31 <br />
                    111 34 STOCKHOLM
                  </p>
                </div>
              </div>
              <div className="contact-menu-card">
                <i className="fa-light fa-phone fa-2xl"></i>
                <div className="contact-menu-card-text">
                  <h3>Call us</h3>
                  <p>
                    +46 (8) 121 470 50 <br /> +46 (8) 121 470 51
                  </p>
                </div>
              </div>
              <div className="contact-menu-card">
                <i className="fa-thin fa-envelope fa-2xl"></i>
                <div className="contact-menu-card-text">
                  <h3>Email us</h3>
                  <p>
                    info@crito.com <br /> support@crito.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMenuSection;
