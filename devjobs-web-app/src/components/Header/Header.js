import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/general/logo.svg";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.scss';

const Header = () => {
    
    return (
        <header className="header">
            <div className="header-wrapper">
                <Link to="/">
                    <img src={logo} alt="devjobs logo" className="logo" />
                </Link>
                <ThemeToggle />
            </div>
        </header>
    );
}

export default Header;
