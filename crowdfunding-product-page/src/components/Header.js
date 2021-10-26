import React from "react";
import "./Header.css";
import logo from "../images/logo.svg";

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <img src={logo} alt="crowdfund logo"></img>
            </div>
        );
    }
}

export default Header;