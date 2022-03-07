import React from 'react';
import { ReactComponent as LocationIcon } from '../../assets/general/icon-location.svg';
import { useTheme } from '../../hooks/useTheme';
import './LocationFilter.scss';

const LocationFilter = ({ locationFilterText, handleLocationFilterchange, modal }) => {

    const { isDarkMode } = useTheme();

    return (
        <div className={`filter-container location-filter-container 
            ${!modal ? 'filter-container-non-mobile' : ''}`}
        >
            <LocationIcon />
            <input 
                type="text"
                className={`filter-input 
                    ${isDarkMode ? 'filter-input-dark ' : ''} 
                    ${modal ? 'filter-input-modal' : ''}`
                }
                placeholder="Filter by location..."
                value={locationFilterText}
                onChange={handleLocationFilterchange}
            />
        </div>
    );
}

export default LocationFilter;
