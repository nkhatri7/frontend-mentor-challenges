import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import './JobCard.scss';

const JobCard = ({ job }) => {

    const { isDarkMode } = useTheme();

    return (
        <Link 
            to={`/job/${job ? job.id : ''}`}
            aria-label={`View the ${job ? job.position : ''} position at ${job ? job.company : ''}`}
            className='job-card-container'
        >
            <article className={`job-card ${isDarkMode ? 'job-card-dark' : ''}`}>
                <figure 
                    className='company-logo-container'
                    style={{ background: `${job ? job.logoBackground : ''}` }}
                >
                    <img 
                        src={`.${job ? job.logo : ''}`} 
                        alt={`${job ? job.company : ''} logo`} 
                        className="company-logo" 
                    />
                </figure>

                <p className="job-details">
                    {job ? job.postedAt : ''}
                    <span className="separator">&#183;</span>
                    {job ? job.contract : ''}    
                </p>

                <h2 className={`job-position ${isDarkMode ? 'job-position-dark' : ''}`}>
                    {job ? job.position : ''}
                </h2>
                <p className="job-company">{job ? job.company : ''}</p>
                <span className="job-location">{job ? job.location : ''}</span>
            </article>
        </Link>
    );
}

export default JobCard;
