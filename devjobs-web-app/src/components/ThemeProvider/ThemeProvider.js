import { useState, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext"

export const ThemeProvider = ({ children }) => {

    const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
		setDarkMode(isDarkMode => !isDarkMode);
	}

    return (
        <ThemeContext.Provider value={ { isDarkMode, toggleDarkMode } }>
            { children }
        </ThemeContext.Provider>
    );
}
