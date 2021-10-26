import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

class Header extends React.Component {
    render() {
        return (
            <header className="wrapper">
                <div className="container">
                    <figure className="crowdfund-logo">
                        <img src={logo} alt="crowdfund logo" />
                    </figure>
                    <nav>
                        {/* eslint-disable-next-line */}
                        <a href="#">About</a>
                        {/* eslint-disable-next-line */}
                        <a href="#">Discover</a>
                        {/* eslint-disable-next-line */}
                        <a href="#">Get Started</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;