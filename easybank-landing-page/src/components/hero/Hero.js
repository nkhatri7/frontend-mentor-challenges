import React from 'react';
import './Hero.scss';
import mockups from '../../assets/image-mockups.png';

function Hero() {
    return (
        <section className="hero">
            <div className="mockup-container">
                <figure className="hero-fig">
                    <img src={mockups} alt="Mockups" />
                </figure>
            </div>
            <section className="hero-main">
                <h1>Next generation digital banking</h1>
                <p className="hero-body">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className="cta cta-hero">Request Invite</button>
            </section>
        </section>
    );
}

export default Hero;
