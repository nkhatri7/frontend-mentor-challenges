import React from 'react';
import './Filter.scss';

const Filter = ({attributes, removeFilter, clear}) => {
    const filterButtons = attributes.map(attribute => {
        return (
            <div className="filter-attribute" key={attribute}>
                <p>{attribute}</p>
                <button className="delete" data-attribute={attribute} onClick={removeFilter}>
                    <span className="hidden">DELETE</span>
                </button>
            </div>
        );
    });

    return (
        <div className="filter">
            <div className="attributes">
                {filterButtons}
            </div>
            <button className="clear" onClick={clear}>Clear</button>
        </div>
    );
}

export default Filter;
