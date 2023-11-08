import React from "react";

const ImagesBox = ({ src, title }) => {
  return (
    <>
      <img src={src} alt={title} />
    </>
  );
};

export default ImagesBox;
