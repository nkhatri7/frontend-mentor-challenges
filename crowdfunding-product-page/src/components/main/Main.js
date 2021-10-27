import React from "react";
import "./Main.css";
import ProjectHeader from "../project-header/ProjectHeader";
import ProjectMain from "../project-main/ProjectMain";
import ProjectStats from "../project-stats/ProjectStats";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            funds: 89914,
            backers: 5007,
            daysLeft: 56
        }
    }

    render() {
        return (
            <main>
                <ProjectHeader />
                <ProjectStats funds={this.state.funds} backers={this.state.backers} daysLeft={this.state.daysLeft} />
                <ProjectMain />
            </main>
        );
    }
}

export default Main;