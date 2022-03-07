import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/general/icon-search.svg';
import { useTheme } from '../../hooks/useTheme';
import './TitleFilter.scss';

const TitleFilter = ({ titleFilterText, handleTitleFilterChange }) => {

    const { isDarkMode } = useTheme();

    return (
        <div className="filter-container title-filter-container">
            <SearchIcon className="search-icon" />
            <input 
                type="text" 
                className={`filter-input mobile-title-filter 
                    ${isDarkMode ? 'filter-input-dark' : ''}`
                }
                placeholder='Filter by title...' 
                value={titleFilterText}
                onChange={handleTitleFilterChange}
            />
            <input 
                type="text" 
                className="filter-input desktop-title-filter" 
                placeholder='Filter by title, companies, expertise...' 
                value={titleFilterText}
                onChange={handleTitleFilterChange}
            />
        </div>
    );
}

export default TitleFilter;
