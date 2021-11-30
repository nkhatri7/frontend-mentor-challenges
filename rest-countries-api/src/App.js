import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Detail from './Components/Detail/Detail';
import Home from './Components/Home/Home';

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [data, setData] = useState([]);

  const toggleTheme = () => {
    setDarkMode(darkMode => !darkMode);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://restcountries.com/v2/all');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} darkMode={darkMode} toggleTheme={toggleTheme} />} />
        <Route path="rest-countries-api" element={<Home data={data} darkMode={darkMode} toggleTheme={toggleTheme} />} />
        <Route path="detail/:alpha" element={<Detail data={data} darkMode={darkMode} toggleTheme={toggleTheme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
