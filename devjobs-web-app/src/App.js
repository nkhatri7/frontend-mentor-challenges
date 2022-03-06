import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import { useTheme } from './hooks/useTheme';
import Home from './routes/Home/Home';
import JobDetailed from './routes/JobDetailed/JobDetailed';
import NotFound from './routes/NotFound/NotFound';

const App = () => {

	const [jobs, setJobs] = useState(null);

	const { isDarkMode } = useTheme();

	useEffect(() => {
		fetch("./data.json")
			.then(res => res.json())
			.then(data => setJobs(data));
	}, []);

	return (
		<div className={`App ${isDarkMode ? 'App-dark' : ''}`}>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home jobs={jobs ? jobs : []} />} />
					<Route path='/job/:id' element={<JobDetailed jobs={jobs ? jobs : []} />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</div>
		
	);
}

export default App;
