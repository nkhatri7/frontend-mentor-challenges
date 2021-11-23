import React, {useEffect} from 'react';
import './JobListings.scss';

const JobListings = ({jobs, handleFilterClick, attributes}) => {

    useEffect(() => {
        console.log(attributes);
    }, [attributes]);

    const filteredJobs = jobs.filter(job => {
        if (attributes.length === 0) {
            return job;
        } else {
            const jobAttributes = [job.role, job.level, ...job.languages.concat(job.tools)];
            return attributes.every(attribute => jobAttributes.includes(attribute));
        }
    });
    
    const jobListingCards = filteredJobs.map(job => {
        const attributes = [job.role, job.level, ...job.languages.concat(job.tools)];
        return (
            <div className={job.featured === true ? 'job-listing cyan-border' : 'job-listing'} key={job.id}>
                <figure className="company-logo">
                    <img src={job.logo} alt={`${job.company} logo`} />
                </figure>
                <div className="job-details">
                    <div className="company">
                        <h2>{job.company}</h2>
                        <span className={`new-${job.new}`}>
                            {job.new === true ? 'NEW!' : ''}
                        </span>
                        <span className={`featured-${job.featured}`}>
                            {job.featured === true ? 'FEATURED' : ''}
                        </span>
                    </div>
                    <h3>{job.position}</h3>
                    <div className="additional-details">
                        <p>{job.postedAt}</p>
                        <div className="separator"></div>
                        <p>{job.contract}</p>
                        <div className="separator"></div>
                        <p>{job.location}</p>
                    </div>
                </div>
                <hr />
                <div className="attributes">
                    {attributes.map(attribute => {
                        return (
                            <button className="attribute" key={`${job.id}-${attribute}`} onClick={handleFilterClick}>{attribute}</button>
                        );
                    })}
                </div>
            </div>
        );
    });

    return (
        <div className="job-listings">
            {jobListingCards}
        </div>
    );
}

export default JobListings;
