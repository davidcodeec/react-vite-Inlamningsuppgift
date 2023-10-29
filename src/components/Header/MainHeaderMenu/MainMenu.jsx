import React from 'react';
import { NavLink } from 'react-router-dom'; // Import the NavLink component from react-router-dom
import '../../Header/Header.css';

const MainMenu = () => {
  return (
    <div className="main-menu">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </div>
  );
}

export default MainMenu;
