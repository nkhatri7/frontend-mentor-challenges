import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import './ContractFilter.scss';

const ContractFilter = ({ fullTimeFilter, handleFullTimeFilterChange, modal }) => {

    const { isDarkMode } = useTheme();

    return (
        <label 
            htmlFor="contract-checkbox" 
            className={`contract-filter 
                ${isDarkMode ? 'dark-text ' : ''}
                ${!modal ? 'non-mobile-contract-filter' : ''}`
            }
        >
            <input 
                type="checkbox" 
                id='contract-checkbox' 
                className={`checkbox-filter ${isDarkMode ? 'checkbox-filter-dark' : ''}`} 
                checked={fullTimeFilter}
                onChange={handleFullTimeFilterChange} 
            />
            Full Time 
            <span className="non-tablet-text">Only</span>
        </label>
    );
}

export default ContractFilter;
