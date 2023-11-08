import React from "react";
import "../HomeMainSections/ShowcaseSection.css";
import background_lines from "../../../assets/images/icon14.svg";
import man_in_suito from "../../../assets/images/image.png";
import Button from "../../Generics/Button";

const ShowcaseSection = () => {
  return (
    <>
      <section className="showcase">
        <img
          className="background-lines"
          src={background_lines}
          alt="Image Line"
        />
        <div className="container">
          <div className="content">
            <h1>We provide The Best business solutions</h1>
            <p>
              Establish your vision and value proposition and turn them into
              testable prototypes.
            </p>
            <Button type="yellow" title="Get Consulting" url="services" />
            <Button type="transparent" title="Learn More" url="services" />
          </div>
          <img
            src={man_in_suito}
            alt="Image of a man with a suite with a tablet"
          />
        </div>
      </section>
    </>
  );
};

export default ShowcaseSection;
