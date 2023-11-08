import React from "react";
import { Link } from "react-router-dom";

const FooterSocialMedia = () => {
  return (
    <>
      <div className="social-media">
        <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
        <div>
          <Link to="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="https://twitter.com/" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterSocialMedia;
