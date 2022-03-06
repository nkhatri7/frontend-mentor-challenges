import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import './NotFound.scss';

const NotFound = () => {

    const { isDarkMode } = useTheme();

    return (
        <div className={`not-found ${isDarkMode ? 'not-found-dark' : ''}`}>
            <h1>Oops! Page Not Found</h1>
            <p className={isDarkMode ? 'body-text-dark' : ''}>
                Unfortunately this isn't a valid link, 
                please return to the homepage by clicking the logo.
            </p>
        </div>
    );
}

export default NotFound;
