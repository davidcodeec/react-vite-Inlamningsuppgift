import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';
import { useState, useEffect } from 'react';
import ServicesSectionBox from '../../Generics/MainGenerics/ServicesSectionBox';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    const servicesList = [
      { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
      { title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
      { title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
      { title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
    ];
    
    setServices(servicesList);
  }, []);

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <p>Our Services</p>
          <h2>We Provide The Best Service For Consulting</h2>
        </div>
        <div className='services-cards'>
          <div className="services-box-button services-section-box">
            {services.map((service, index) => (
              <ServicesSectionBox key={index} title={service.title} description={service.description} />
            ))}
            <div className="center-content">
              <Link className="btn-black" to="projects.html">Browse Services<i className="fa-solid fa-arrow-up-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
