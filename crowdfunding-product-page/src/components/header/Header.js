import React, {Component} from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import MobileMenu from "../mobile-menu/MobileMenu";
import { Component } from "react";

class Header extends Component {
    constructor() {
        super();
        this.state = { 
            menuOpen: false 
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    handleMenuClick(event) {
        event.preventDefault();

        this.setState({
            menuOpen: true
        }, () => {
            this.setMobileMenuDisplay();
            document.body.style.overflow = 'hidden';
        });
    }

    closeMenu(event) {
        this.setState({
            menuOpen: false
        }, () => {
            this.setMobileMenuDisplay();
            document.body.style.overflow = 'unset';
        });
    }

    setMobileMenuDisplay() {
        const menuButton = document.getElementById('menu-button');
        menuButton.classList.toggle("menu-open");
    }

    render() {
        return (
            <header className="wrapper">
                <div className="container">
                    <figure className="crowdfund-logo">
                        <img src={logo} alt="crowdfund logo" />
                    </figure>
                    <button id="menu-button" className="menu-btn" onClick={this.handleMenuClick}></button>
                    <nav className="desktop-nav">
                        {/* eslint-disable-next-line */}
                        <a href="#">About</a>
                        {/* eslint-disable-next-line */}
                        <a href="#">Discover</a>
                        {/* eslint-disable-next-line */}
                        <a href="#">Get Started</a>
                    </nav>
                </div>
                <MobileMenu show={this.state.menuOpen} close={this.closeMenu} />
            </header>
        );
    }
}

export default Header;