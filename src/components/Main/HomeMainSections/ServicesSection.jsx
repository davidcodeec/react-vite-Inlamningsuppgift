import React from "react";
import "./ServicesSection.css";
import { useState, useEffect } from "react";
import ServicesSectionBox from "../../Generics/MainGenerics/ServicesSectionBox";
import Button from "../../Generics/Button";
import SectionTitle from "../../Generics/MainGenerics/SectionTitleBox";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const servicesList = [
      {
        title: "Business Advice",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
      },
      {
        title: "Startup Business",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
      },
      {
        title: "Financial Advice",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
      },
      {
        title: "Risk Management",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
      },
    ];

    setServices(servicesList);
  }, []);

  return (
    <section className="services-section">
      <div className="container">
        <SectionTitle
          title="Our Services"
          description="We Provide The Best Service For Consulting"
        />
        <div className="services-cards">
          <div className="services-box-button services-section-box">
            {services.map((service, index) => (
              <ServicesSectionBox
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
            <div className="center-content">
              <Button type="black" title="Browse Services" url="services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
