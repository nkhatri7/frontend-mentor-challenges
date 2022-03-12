import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Detail.scss';
import Header from '../Header/Header';

const Detail = ({ data, darkMode, toggleTheme }) => {

    const [countryData, setCountryData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [borderData, setBorderData] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (darkMode) {
            document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
        } else {
            document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
        }
    }, [darkMode]);

    useEffect(() => {
        const countryData = data.find(country => country.alpha2Code === params.alpha);
        setCountryData(countryData);
    }, [params.alpha, data]);

    useEffect(() => {
        if (countryData !== []) {
            setLoaded(true);
            if (countryData.hasOwnProperty('borders')) {
                countryData.borders.forEach(async border => {
                    const response = await fetch(`https://restcountries.com/v2/alpha/${border}`);
                    const data = await response.json();
                    setBorderData(prevData => [...prevData, data]);
                });
            }
        }
    }, [countryData]);

    const handleNavigation = () => {
        navigate('/rest-countries-api');
    }

    const handleNavigateBorder = e => {
        setBorderData([]);
        navigate(`/detail/${e.target.dataset.alpha}`);
    }

    const getCurrencies = () => {
        let currencies = [];
        countryData.currencies.forEach(currency => currencies.push(currency.name));
        return currencies.join(', ');
    }

    const getLanguages = () => {
        let languages = [];
        countryData.languages.forEach(language => languages.push(language.name));
        return languages.join(', ');
    }

    const borderCountries = borderData.map(border => {
        return (
            <button 
                key={`${countryData.alpha2Code}-${border.alpha2Code}`} 
                className="border" 
                aria-label={`See detailed information on ${border.name}`}
                data-alpha={border.alpha2Code}
                onClick={handleNavigateBorder}
            >{border.name}</button>
        );
    });

    return (
        <div className="detail">
            <Header darkMode={darkMode} toggleTheme={toggleTheme} />
            {loaded === false ? null : 
                <main>
                    <div className="detail-main-wrapper">
                        <button className={`back ${darkMode ? 'back-dark' : 'back-light'}`} onClick={handleNavigation}>Back</button>
                        <div className={`detail-content ${darkMode ? 'detail-dark' : 'detail-light'}`}>
                            <img src={countryData.flag} alt="" />
                            <div className="text-content">
                                <h2>{countryData.name}</h2>
                                <div className="main-details">
                                    <div className="detail-column">
                                        <p><span className="detail-heading">Native Name: </span>{countryData.nativeName}</p>
                                        <p><span className="detail-heading">Population: </span>{countryData.population.toLocaleString()}</p>
                                        <p><span className="detail-heading">Region: </span>{countryData.region}</p>
                                        <p><span className="detail-heading">Sub Region: </span>{countryData.subregion}</p>
                                        <p><span className="detail-heading">Capital: </span>{countryData.capital}</p>
                                    </div>
                                    <div className="detail-column">
                                        <p><span className="detail-heading">Top Level Domain: </span>{countryData.topLevelDomain[0]}</p>
                                        <p><span className="detail-heading">Currencies: </span>{getCurrencies()}</p>
                                        <p><span className="detail-heading">Languages: </span>{getLanguages()}</p>
                                    </div>
                                </div>
                                {borderData.length === 0 ? null :
                                    <div className="border-countries-container">
                                        <span className="detail-heading">Border Countries:</span>
                                        <div className="border-countries">
                                            {borderCountries}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </main>
            }
        </div>
    );
}

export default Detail;
