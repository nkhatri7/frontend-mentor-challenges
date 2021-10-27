import React, { Component } from 'react'
import "./ProjectStats.css";

export class ProjectStats extends Component {
    getProgressBar() {
        let progress = (this.props.funds/100000) * 100;
        const style = {
            width: `${progress}%`
        }   
        return style;
    }

    render() {
        return (
            <section className="project-stats">
                <div className="stats-container">
                    <div className="stat-container funds">
                        <h2 className="stat-bold">${this.props.funds}</h2>
                        <p className="stat-title">of $100,000 backed</p>
                    </div>
                    <div className="stat-container backers">
                        <h2 className="stat-bold">{this.props.backers}</h2>
                        <p className="stat-title">total backers</p>
                    </div>
                    <div className="stat-container days-left">
                        <h2 className="stat-bold">{this.props.daysLeft}</h2>
                        <p className="stat-title">days left</p>
                    </div>
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={this.getProgressBar()}></div>
                </div>
            </section>
        )
    }
}

export default ProjectStats
