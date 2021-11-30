import React from 'react';
import { useNavigate } from 'react-router';
import './Card.scss';

const Card = ({ flag, name, population, region, capital, alpha, darkMode }) => {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/detail/${alpha}`);
    }

    return (
        <div className={`country-card ${darkMode === true ? 'card-dark' : 'card-light'}`} onClick={handleNavigation}>
            <img src={flag} alt={`${name} Flag`} />
            <div className="card-text-content">
                <h2>{name}</h2>
                <p><span className="detail-name">Population:</span> {population.toLocaleString()}</p>
                <p><span className="detail-name">Region:</span> {region}</p>
                <p><span className="detail-name">Capital:</span> {capital}</p>
            </div>
        </div>
    );
}

export default Card;
