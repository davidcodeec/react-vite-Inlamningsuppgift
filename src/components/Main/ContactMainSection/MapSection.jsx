import React from "react";
import "./MapSection.css";
import map_image from "../../../assets/images/Map.png";

function MapSection() {
  return (
    <>
      <section className="map-section">
        <div className="content">
          <div className="map">
            <img src={map_image} alt="Map Preview" />
          </div>
        </div>
      </section>
    </>
  );
}

export default MapSection;
