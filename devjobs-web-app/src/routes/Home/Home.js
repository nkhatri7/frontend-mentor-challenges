import React, { useState, useEffect } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useTheme } from '../../hooks/useTheme';
import './Home.scss';

const Home = ({ jobs }) => {

    const { isDarkMode } = useTheme();
    const [visibleJobs, setVisibleJobs] = useState(12);
    const [filteredJobs, setFilteredJobs] = useState(null);

    useEffect(() => {
        if (jobs) {
            setFilteredJobs(jobs);
        }
    }, [jobs]);

    const filterJobs = (title, location, fullTime) => {
        const titleLocationFilter = jobs.filter(job => (
            (job.position
                .toLowerCase()
                .includes(title.toLowerCase()) ||
                job.company
                    .toLowerCase()
                    .includes(title.toLowerCase())) &&
            job.location
                .toLowerCase()
                .includes(location.toLowerCase())
        ));

        let filteredJobs = [];
        if (fullTime) {
            filteredJobs = titleLocationFilter.filter(job => (
                job.contract === "Full Time"
            ));
        } else {
            filteredJobs = [...titleLocationFilter];
        }

        setFilteredJobs(filteredJobs);
    }

    const loadMoreJobs = () => {
        setVisibleJobs(prev => prev + 3);
    }

    return (
        <div className={`home ${isDarkMode ? 'home-dark' : ''}`}>
            <h1>Devjobs - Find your next job</h1>
            <SearchBar filterJobs={filterJobs} />
            <section className="jobs-container">
                {filteredJobs ? filteredJobs.slice(0, visibleJobs).map(job => (
                    <JobCard 
                        key={job.id}
                        job={job}
                    />
                )) : null}
            </section>
            {filteredJobs ? (visibleJobs < filteredJobs.length) ? 
                <button className="load-more" onClick={loadMoreJobs}>
                    Load More
                </button>
                : null
                : null
            }
        </div>
    );
}

export default Home;
