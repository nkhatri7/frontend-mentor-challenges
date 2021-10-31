import React, { Component } from 'react';
import "./ProjectHeader.css";
import mastercraftLogo from "../../images/logo-mastercraft.svg";

class ProjectHeader extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            bookmarked: false 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.bookmarked) {
            this.setState({
                bookmarked: false
            }, () => {
                this.setBookmarkStyle();
            });
        } else {
            this.setState({
                bookmarked: true
            }, () => {
                this.setBookmarkStyle();
            });
        }
    };

    setBookmarkStyle() {
        const circle = document.getElementById("bookmark-circle");
        const path = document.getElementById("bookmark-path");
        const bookmarkText = document.getElementById("bookmark-text");
        if (this.state.bookmarked) {
            circle.style.fill = "var(--dark-cyan)";
            path.style.fill = "white";
            bookmarkText.style.color = "var(--dark-cyan)";
            bookmarkText.innerText = "Bookmarked";
        } else {
            circle.style.fill = "#2F2F2F";
            path.style.fill = "#B1B1B1";
            bookmarkText.style.color = "var(--dark-grey)";
            bookmarkText.innerText = "Bookmark";
        }
    }

    render() {
        return (
            <section className="project-header">
                <figure className="mastercraft-logo">
                    <img src={mastercraftLogo} alt="mastercraft logo" />
                </figure>
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <section className="project-header-actions">
                    <button className="cta cta-project-header" onClick={this.props.showModal}>Back this project</button>
                    <div className="bookmark-container" onClick={this.handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28" id="bookmark-circle"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" id="bookmark-path"/></g></svg>
                        <p id="bookmark-text">Bookmark</p>
                    </div>
                </section>
            </section>
        );
    }
}

export default ProjectHeader;