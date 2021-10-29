import React, { Component } from 'react'
import "./ProjectStats.css";

export class ProjectStats extends Component {
    
    getProgressBar() {
        let progress = (this.props.stats.funds/100000) * 100;
        const style = {
            width: `${progress}%`
        }
        return style;
    }

    render() {
        return (
            <section className="project-stats">
                <section className="stats-container">
                    <section className="stat-container funds">
                        <h2 className="stat-bold">${this.props.stats.funds.toLocaleString()}</h2>
                        <p className="stat-title">of $100,000 backed</p>
                    </section>
                    <section className="stat-container backers">
                        <h2 className="stat-bold">{this.props.stats.backers.toLocaleString()}</h2>
                        <p className="stat-title">total backers</p>
                    </section>
                    <section className="stat-container days-left">
                        <h2 className="stat-bold">{this.props.stats.daysLeft}</h2>
                        <p className="stat-title">days left</p>
                    </section>
                </section>
                <section className="progress-bar-container">
                    <div className="progress-bar" style={this.getProgressBar()}></div>
                </section>
            </section>
        )
    }
}

export default ProjectStats
