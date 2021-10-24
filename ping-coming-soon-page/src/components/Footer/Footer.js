import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="social-icons-container">
                    <button className="social-icon"><FontAwesomeIcon icon={faFacebookF} className="fontawesomeicon"/></button>
                    <button className="social-icon"><FontAwesomeIcon icon={faTwitter} className="fontawesomeicon"/></button>
                    <button className="social-icon"><FontAwesomeIcon icon={faInstagram} className="fontawesomeicon"/></button>
                </div>
                <div className="copyright">© Copyright Ping. All rights reserved.</div>
            </div>
        );
    }
}

export default Footer;