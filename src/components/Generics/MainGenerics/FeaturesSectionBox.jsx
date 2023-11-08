import React from "react";

const FeaturesSectionBox = ({ src, title, description }) => {
  return (
    <>
      <div>
        <img src={src} alt="Alt text for embed" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default FeaturesSectionBox;
