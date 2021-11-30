import React, { useState, useEffect, useRef } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import './Home.scss';

const Home = ({ data, darkMode, toggleTheme }) => {

    const regionOptions = useRef();
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        if (darkMode) {
            document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
        } else {
            document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
        }
    }, [darkMode]);


    const handleSearch = e => {
        setInput(e.target.value);
    }

    const handleFilterOpen = () => {
        regionOptions.current.classList.toggle('filter-open');
    }

    const handleFilterChange = e => {
        setFilter(e.target.innerText);
        regionOptions.current.classList.toggle('filter-open');
    }

    const filteredCountries = () => {
        const searchFilter = data.filter(country => country.name.toLowerCase().includes(input.toLowerCase()));
        if (searchFilter.length !== data.length && searchFilter.length !== 0) {
            return searchFilter;
        } else if (filter === 'All') {
            return data;
        } else {
            return data.filter(country => country.region === filter);
        }
    }

    const countries = filteredCountries().map(country => {
        return (
            <Card
                key={country.alpha2Code}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                alpha={country.alpha2Code}
                darkMode={darkMode}
            />
        );
    });

    return (
        <div className="home">
            <Header darkMode={darkMode} toggleTheme={toggleTheme} />
            <main>
                <div className="main-wrapper">
                    <div className={`search-filter-container ${darkMode === true ? 'search-filter-dark' : 'search-filter-light'}`}>
                        <input 
                            type="text" 
                            className="search" 
                            placeholder="Search for a country..." 
                            value={input} 
                            onChange={handleSearch}
                        />
                        <div className="filter-container">
                            <button 
                                className="filter" 
                                aria-label="Filter by region" 
                                onClick={handleFilterOpen}>
                                    Filter by Region
                            </button>
                            <ul className="region-options" ref={regionOptions}>
                                <li className="region-option" onClick={handleFilterChange}>All</li>
                                <li className="region-option" onClick={handleFilterChange}>Africa</li>
                                <li className="region-option" onClick={handleFilterChange}>Americas</li>
                                <li className="region-option" onClick={handleFilterChange}>Asia</li>
                                <li className="region-option" onClick={handleFilterChange}>Europe</li>
                                <li className="region-option" onClick={handleFilterChange}>Oceania</li>
                            </ul>
                        </div>
                    </div>
                    <div className="countries-container">
                        {countries}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
