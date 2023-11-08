import React from "react";
import { Link } from "react-router-dom";
import FooterTextBox from "../../Generics/FooterGenerics/FooterTextBox";

const FooterText = () => {
  return (
    <>
      <div className="footer-text">
        <FooterTextBox
          title="Company"
          link_1="About"
          link_2="Features"
          link_3="Works"
          link_4="Careers"
        />

        <FooterTextBox
          title="Help"
          link_1="Customer Support"
          link_2="Delivery Details"
          link_3="Terms & Conditions"
          link_4="Privacy Policy"
        />

        <FooterTextBox
          title="Resources"
          link_1="Free eBooks"
          link_2="Development Tutorial"
          link_3="How to - Blog"
          link_4="Youtube Playlist"
        />

        <div className="footer-text-column">
          <h3>Link</h3>
          <Link to="">Free eBooks</Link>
          <Link to="">Development Tutorial</Link>
          <Link to="">How to - Blog</Link>
          <Link to="">Youtube Playlist</Link>
        </div>
      </div>
    </>
  );
};

export default FooterText;
