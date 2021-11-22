import React from 'react';
import './Features.scss';
import brandRecognitionIcon from '../../assets/icon-brand-recognition.svg';
import detailedRecordsIcon from '../../assets/icon-detailed-records.svg';
import fullyCustomisableIcon from '../../assets/icon-fully-customizable.svg';
import Shorten from '../shorten/Shorten';

function Features() {
    return (
        <section className="features">
            <Shorten />
            <h2>Advanced Statistics</h2>
            <p className="features-body">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className="features-container">
                <article className="feature">
                    <figure className="feature-icon">
                        <img src={brandRecognitionIcon} alt="Brand Recognition Icon" />
                    </figure>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </article>
                <article className="feature">
                    <figure className="feature-icon">
                        <img src={detailedRecordsIcon} alt="Detailed Records Icon" />
                    </figure>
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </article>
                <article className="feature">
                    <figure className="feature-icon">
                        <img src={fullyCustomisableIcon} alt="Fully Customisable Icon" />
                    </figure>
                    <h3>Fully Customisable</h3>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </article>
            </div>
        </section>
    )
}

export default Features;
