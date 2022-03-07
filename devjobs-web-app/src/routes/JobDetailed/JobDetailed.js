import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import './JobDetailed.scss';

const JobDetailed = ({ jobs }) => {

    const { isDarkMode } = useTheme();
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const selectedJob = jobs.find(job => job.id === Number.parseInt(id));
        setJob(selectedJob);
    }, [id, jobs]);

    return (
        <div className={`job-detailed ${isDarkMode ? 'job-detailed-dark' : ''}`}>
            <div className="container">
                <article className={`company-banner ${isDarkMode ? 'card-dark' : ''}`}>
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
                    <div className="company-banner-text">
                        <h1 className={isDarkMode ? 'heading-dark' : ''}>{job ? job.company : ''}</h1>
                        <p className="secondary-text">{job ? job.website : ''}</p>
                    </div>
                    <a 
                        href={job ? job.website : '#'} 
                        className={`company-website-link ${isDarkMode ? 'company-website-link-dark' : ''}`}
                    >
                        Company Site
                    </a>
                </article>

                <section className={`job-details ${isDarkMode ? 'card-dark' : ''}`}>
                    <article className="job-details-header">
                        <div className="job-details-header-text">
                            <p className="job-posted-contract">
                                {job ? job.postedAt : ''}
                                <span className="separator">&#183;</span>
                                {job ? job.contract : ''}    
                            </p>
                            <h2 className={isDarkMode ? 'heading-dark' : ''}>{job ? job.position : ''}</h2>
                            <p className="job-location">{job ? job.location : ''}</p>
                        </div>
                        <a href={job ? job.apply : '#'} className="apply-now">Apply Now</a>
                    </article>

                    <article className="job-details-section">
                        <p className="secondary-text">{job ? job.description : ''}</p>    
                    </article>
                    <article className="job-details-section">
                        <h3 className={isDarkMode ? 'heading-dark' : ''}>Requirements</h3>
                        <p className="secondary-text">{job ? job.requirements.content : ''}</p>
                        <ul className="job-items">
                            {job ? job.requirements.items.map((item, index) => (
                                <li className="job-item secondary-text" key={index}>{item}</li>
                            )) : null}    
                        </ul>
                    </article>

                    <article className="job-details-section">
                        <h3 className={isDarkMode ? 'heading-dark' : ''}>What You Will Do</h3>
                        <p className="secondary-text">{job ? job.role.content : ''}</p>
                        <ol className="job-items">
                            {job ? job.role.items.map((item, index) => (
                                <li className="job-item ordered-job-item secondary-text" key={index}>
                                    {item}
                                </li>
                            )): null}
                        </ol>
                    </article>
                </section>

                <section className="how-to-apply">
                    <h3>How to Apply</h3>
                    <p>
                        Morbi intordum mollis sapien. Sed ac risus. Phasellus 
                        lacinia, magnus a uliamcorper lacreet, lectus arcu 
                        polvinar risus, vitae facilis libero dolor a purus. 
                        Sed val lecus. Moris nibh felis, adipiscing varius, 
                        adipiscing in, lacina vel, tellus.
                    </p>
                    <a href="https://example.com/how-to-apply" target="_blank" rel="noreferrer">
                        https://example.com/how-to-apply
                    </a>
                </section>
            </div>
            <article className={`apply-container ${isDarkMode ? 'card-dark' : ''}`}>
                <div className="apply-wrapper">
                    <div className="apply-job-details">
                        <h3 className={isDarkMode ? 'heading-dark' : ''}>
                            {job ? job.position : ''}
                        </h3>
                        <p className="secondary-text">{job ? job.company : ''}</p>
                    </div>
                    <a href={job ? job.apply : '#'} className="apply-now">Apply Now</a>
                </div>
            </article>
        </div>
    );
}

export default JobDetailed;
