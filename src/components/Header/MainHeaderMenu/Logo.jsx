import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../src/assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
import "./Logo.css";

const Logo = ({ menuOpen, toggleMenu }) => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button onClick={toggleMenu} className="menu-bars">
          {menuOpen ? <></> : <i className="fa-sharp fa-solid fa-bars"></i>}
        </button>
      </div>

      <div className={`logo-main-menu${menuOpen ? " menu-open" : ""}`}>
        {menuOpen ? (
          <nav>
            <button className="show-menu-button" onClick={toggleMenu}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
        ) : (
          <i className="fa-sharp fa-solid fa-bars"></i>
        )}
      </div>
    </>
  );
};

export default Logo;
