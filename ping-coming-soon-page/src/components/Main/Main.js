import React from "react";
import './Main.css';
import pingLogo from "../../images/logo.svg";
import dashboardIllustration from "../../images/illustration-dashboard.png";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.updateEmailInput = this.updateEmailInput.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    updateEmailInput(e) {
        this.setState({
            email: e.target.value
        });
    }

    validateEmail() {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailInput = document.getElementById('email');
        const errorMessage = document.getElementById('error-message');
        if (this.state.email.trim() === "") {
            if (!emailInput.classList.contains('error-border')) {
                emailInput.classList.add('error-border');
            }
            errorMessage.innerText = 'Whoops! It looks like you forgot to add your email.';
        } else if (regex.test(String(this.state.email).toLowerCase())) {
            if (emailInput.classList.contains('error-border')) {
                emailInput.classList.remove('error-border');
            }
            errorMessage.innerText = '';
        } else {
            if (!emailInput.classList.contains('error-border')) {
                emailInput.classList.add('error-border');
            }
            errorMessage.innerText = 'Please provide a valid email address';
        }
    }

    render() {
        return(
            <div className="main-container">
                <div className="logo-container">
                <img src={pingLogo} alt="Ping Logo" className="ping-logo"/>
                </div>
                <div className="welcome-text">
                    <h1>We are launching <span>soon!</span></h1>
                    <p>Subscribe and get notified</p>
                </div>
                <div className="user-input">
                    <div className="email-input">
                        <input id="email" type="text" value={this.state.email} onChange={this.updateEmailInput} placeholder="Your email address..." className="email"></input>
                        <p id="error-message" className="error-message"></p>
                    </div>
                    <button onClick={this.validateEmail} className="cta-button">Notify Me</button>
                </div>
                <div className="illustration">
                    <img className="dashboard-illustration" src={dashboardIllustration} alt="Dashboard Illustration"></img>
                </div>
            </div>
        );
    }
}

export default Main;