import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ReactComponent as SunIcon } from '../../assets/general/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/general/icon-moon.svg';
import './ThemeToggle.scss';

const ThemeToggle = () => {

    const { isDarkMode, toggleDarkMode } = useTheme();
    const toggle = useRef(null);

    useEffect(() => {
        if (isDarkMode) {
            toggle.current.checked = true;
        }
    }, [isDarkMode]);

    return (
        <div className="theme-toggle-wrapper">
            <SunIcon />
            <div className="toggle-container">
                <label className="switch">
                    <input ref={toggle} type="checkbox" className="toggle-input" onChange={toggleDarkMode} />
                    <span className="toggle"></span>
                </label>
            </div>
            <MoonIcon />
        </div>
    );
}

export default ThemeToggle;
