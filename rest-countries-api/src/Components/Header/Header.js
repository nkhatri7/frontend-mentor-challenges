import React from 'react';
import './Header.scss';

const Header = ({ darkMode, toggleTheme }) => {
    return (
        <header className={darkMode === true ? 'header-dark' : 'header-light'}>
            <div className="header-wrapper">
                <a href="/" className="heading-link">
                    <h1>Where in the world?</h1>
                </a>
                <button className="theme-toggle" onClick={toggleTheme}>Dark Mode</button>
            </div>
        </header>
    );
}

export default Header;
