import React from 'react';
import Logo from './MainHeaderMenu/Logo';
import Menu from './MainHeaderMenu/Menu';
import SocialMedia from './MainHeaderMenu/SocialMedia';
import MainMenu from './MainHeaderMenu/MainMenu';
import Button from '../Generics/Button';
import './Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <Logo />
                <Menu />
                <SocialMedia />
                <MainMenu />
                <Button type="yellow login" title="Login" url="login" />
            </div>
        </header>
    );
}

export default Header;
