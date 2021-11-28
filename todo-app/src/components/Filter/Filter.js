import React from 'react';
import './Filter.scss'

const Filter = ({darkMode, handleFilter}) => {
    return (
        <div className={darkMode === true ? 'filter-container' : 'filter-container filter-container-light'}>
            <button className="filter active" onClick={handleFilter}>All</button>
            <button className="filter" onClick={handleFilter}>Active</button>
            <button className="filter" onClick={handleFilter}>Completed</button>
        </div>
    );
}

export default Filter;
