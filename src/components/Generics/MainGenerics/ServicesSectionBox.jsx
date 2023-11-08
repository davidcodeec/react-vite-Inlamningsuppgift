import React from "react";

const ServicesSectionBox = ({ title, description }) => {
  return (
    <>
      <div className="services-card-button sevice-box">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn-play">
          <i className="fa-solid fa-play"></i>
        </button>
      </div>
    </>
  );
};

export default ServicesSectionBox;
