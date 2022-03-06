import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import './ContractFilter.scss';

const ContractFilter = ({ fullTimeFilter, handleFullTimeFilterChange }) => {

    const { isDarkMode } = useTheme();

    return (
        <label htmlFor="contract-checkbox" className={`contract-filter ${isDarkMode ? 'dark-text' : ''}`}>
            <input 
                type="checkbox" 
                id='contract-checkbox' 
                className='checkbox-filter' 
                checked={fullTimeFilter}
                onChange={handleFullTimeFilterChange} 
            />
            Full Time Only
        </label>
    );
}

export default ContractFilter;
