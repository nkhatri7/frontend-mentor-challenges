import React from 'react';
import './Header.scss';

const Header = ({handleThemeChange, darkMode}) => {
    return (
        <header className={darkMode === true ? '' : 'header-light'}>
            <div className="wrapper">
                <h1>TODO</h1>
                <button className={darkMode === true ? 'theme-toggle' : 'theme-toggle-light'} onClick={handleThemeChange}>
                    <span className="hidden">TOGGLE</span>
                </button>
            </div>
        </header>
    );
}

export default Header;
