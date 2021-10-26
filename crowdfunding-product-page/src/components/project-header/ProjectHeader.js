import React, { Component } from 'react';
import "./ProjectHeader.css";
import mastercraftLogo from "../../images/logo-mastercraft.svg";
import bookmarkIcon from "../../images/icon-bookmark.svg";

class ProjectHeader extends Component {
    constructor (props) {
        super(props);
        this.state = {
            bookmarked: false
        };
    }

    render() {
        return (
            <div className="project-header">
                <figure className="mastercraft-logo">
                    <img src={mastercraftLogo} alt="mastercraft logo" />
                </figure>
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="project-header-actions">
                    <button className="cta cta-project-header">Back this project</button>
                    <div className="bookmark-container">
                        <img src={bookmarkIcon} alt="bookmark icon" />
                        <p>Bookmark</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectHeader;