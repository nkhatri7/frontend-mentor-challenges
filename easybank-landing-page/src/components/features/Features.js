import React from 'react';
import './Features.scss';
import onlineImg from '../../assets/icon-online.svg';
import budgetingImg from '../../assets/icon-budgeting.svg';
import onboardingImg from '../../assets/icon-onboarding.svg';
import apiImg from '../../assets/icon-api.svg';

function Features() {
    return (
        <section className="features">
            <div className="wrapper">
                <h1>Why choose Easybank?</h1>
                <p className="features-body">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                <div className="features-container">
                    <div className="feature">
                        <img src={onlineImg} alt="Credit Cards" />
                        <h2>Online Banking</h2>
                        <p className="feature-description">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>
                    <div className="feature">
                        <img src={budgetingImg} alt="Budgeting" />
                        <h2>Simple Budgeting</h2>
                        <p className="feature-description">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </div>
                    <div className="feature">
                        <img src={onboardingImg} alt="Onboarding" />
                        <h2>Fast Onboarding</h2>
                        <p className="feature-description">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div className="feature">
                        <img src={apiImg} alt="API" />
                        <h2>Open API</h2>
                        <p className="feature-description">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
