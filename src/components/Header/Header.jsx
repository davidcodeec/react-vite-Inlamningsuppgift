import React from "react";
import Logo from "./MainHeaderMenu/Logo";
import Menu from "./MainHeaderMenu/Menu";
import SocialMedia from "./MainHeaderMenu/SocialMedia";
import MainMenu from "./MainHeaderMenu/MainMenu";
import Button from "../Generics/Button";
import "./Header.css"; // Import the CSS file
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <div className="container">
        <Logo menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Menu />
        <SocialMedia />
        <MainMenu />
        <Button type="login" title="Login" url="/login" />
      </div>
    </header>
  );
};

export default Header;
