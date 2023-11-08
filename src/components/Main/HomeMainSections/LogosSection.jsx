import React from "react";
import icon_1 from "../../../assets/images/icon1.svg";
import icon_2 from "../../../assets/images/icon2.svg";
import icon_3 from "../../../assets/images/icon3.svg";
import icon_4 from "../../../assets/images/icon4.svg";
import icon_5 from "../../../assets/images/icon5.svg";
import { useState, useEffect } from "react";
import "./LogosSection.css";
import ImagesBox from "../../Generics/MainGenerics/ImagesBox";

const LogosSection = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const logoList = [
      { src: icon_1, alt: "" },
      { src: icon_2, alt: "" },
      { src: icon_3, alt: "" },
      { src: icon_4, alt: "" },
      { src: icon_5, alt: "" },
    ];

    setLogos(logoList);
  }, []);

  return (
    <section className="logos">
      <div className="container">
        <div className="logo-content">
          {logos.map((logo, index) => (
            <ImagesBox key={index} src={logo.src} alt={logo.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
