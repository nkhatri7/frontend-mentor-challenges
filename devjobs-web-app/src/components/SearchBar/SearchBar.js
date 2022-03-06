import React, { useState, useEffect, useRef } from 'react';
import searchBtnIcon from '../../assets/general/icon-search.svg';
import { ReactComponent as FilterIcon } from '../../assets/mobile/icon-filter.svg';
import { useTheme } from '../../hooks/useTheme';
import TitleFilter from '../Filters/TitleFilter';
import LocationFilter from '../Filters/LocationFilter';
import ContractFilter from '../Filters/ContractFilter';
import './SearchBar.scss';


const SearchBar = ({ filterJobs }) => {

    const [titleFilterText, setTitleFilterText] = useState('');
    const [locationFilterText, setLocationFilterText] = useState('');
    const [fullTimeFilter, setFullTimeFilter] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);

    const filterModal = useRef(null);

    const { isDarkMode } = useTheme();

    useEffect(() => {
        const closeModal = (e) => {
            if (filterModal.current) {
                if (!filterModal.current.contains(e.target)) {
                    setDisplayModal(false);
                }
            }
        }

        document.body.addEventListener('mousedown', closeModal);

        return () => {
            document.body.removeEventListener('mousedown', closeModal);
        }
    }, [displayModal]);

    const handleTitleFilterChange = (e) => {
        setTitleFilterText(e.target.value);
    }

    const handleLocationFilterChange = (e) => {
        setLocationFilterText(e.target.value);
    }

    const handleFullTimeFilterChange = (e) => {
        setFullTimeFilter(fullTime => !fullTime);
    }

    const handleFilterClick = (e) => {
        setDisplayModal(true);
        e.preventDefault();
    }

    const handleSearch = (e) => {
        filterJobs(titleFilterText.trim(), locationFilterText.trim(), fullTimeFilter);
        e.preventDefault();
    }

    const handleModalSearch = (e) => {
        handleSearch(e);
        setDisplayModal(false);
    }

    return (
        <form className={`search-bar ${isDarkMode ? 'search-bar-dark' : ''}`}>
            <TitleFilter 
                titleFilterText={titleFilterText} 
                handleTitleFilterChange={handleTitleFilterChange} 
            />
            <button 
                className="filter-btn" 
                aria-label='Filters' 
                onClick={handleFilterClick}
            >
                <FilterIcon />
                <span className="hidden">Filter</span>
            </button>
            <button 
                type="submit" 
                className="search-btn" 
                aria-label='Search' 
                onClick={handleSearch}
            >
                <img src={searchBtnIcon} alt="Search Icon" className="search-btn-icon" />
                <span className="search-btn-text">Search</span>  
            </button>
            <div className={`overlay ${displayModal ? 'overlay-active' : ''}`}>
                <div 
                    ref={filterModal} 
                    className={`filter-modal ${isDarkMode ? 'filter-modal-dark' : ''}`}
                >
                    <div className="modal-location-filter-container">
                        <LocationFilter 
                            locationFilterText={locationFilterText} 
                            handleLocationFilterchange={handleLocationFilterChange}
                            modal={true}
                        />
                    </div>
                    <div className="modal-contract-filter-container">
                        <ContractFilter 
                            fullTimeFilter={fullTimeFilter}
                            handleFullTimeFilterChange={handleFullTimeFilterChange} 
                        />
                    </div>
                    <button className="modal-search-btn" onClick={handleModalSearch}>
                        Search
                    </button>
                </div>    
            </div>
        </form>
    );
}

export default SearchBar;
