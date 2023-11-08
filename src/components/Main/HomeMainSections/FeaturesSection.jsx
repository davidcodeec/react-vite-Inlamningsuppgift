import React from "react";
import { Link } from "react-router-dom";
import icon_6 from "../../../assets/images/icon6.svg";
import icon_7 from "../../../assets/images/icon7.svg";
import icon_8 from "../../../assets/images/icon8.svg";
import icon_9 from "../../../assets/images/icon9.svg";
import "../HomeMainSections/FeaturesSection.css";
import { useState, useEffect } from "react";
import FeaturesSectionBox from "../../Generics/MainGenerics/FeaturesSectionBox";
import Button from "../../Generics/Button";

const FeaturesSection = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const featuresList = [
      {
        src: icon_6,
        title: "Business Advice",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
      },
      {
        src: icon_7,
        title: "Startup Business",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
      },
      {
        src: icon_8,
        title: "Financial Advice",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
      },
      {
        src: icon_9,
        title: "Risk Management",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
      },
    ];

    setFeatures(featuresList);
  }, []);

  return (
    <>
      <section className="features">
        <div className="container">
          <div className="content">
            <h4>Features</h4>
            <p>Our Accounting is trusted by thousand of companies</p>
            <Button type="yellow" title="Learn More" url="learnmore" />
          </div>

          <div className="container content-items">
            {features.map((feature, index) => (
              <FeaturesSectionBox
                key={index}
                src={feature.src}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
