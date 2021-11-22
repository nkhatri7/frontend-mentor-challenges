import React from 'react';
import './Intro.scss';
import graphic from '../../assets/illustration-working.svg';

function Intro() {
    return (
        <section className="intro">
            <figure className="intro-fig">
                <img src={graphic} alt="Working Illustration" />
            </figure>
            <div className="intro-main">
                <h1>More than just shorter links</h1>
                <p className="intro-body">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="cta">Get Started</button>
            </div>
        </section>
    );
}

export default Intro;
