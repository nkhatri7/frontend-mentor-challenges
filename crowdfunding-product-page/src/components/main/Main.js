import React from "react";
import "./Main.css";
import ProjectHeader from "../project-header/ProjectHeader";
import ProjectMain from "../project-main/ProjectMain";

class Main extends React.Component {
    render() {
        return (
            <main>
                <ProjectHeader />
                <ProjectMain />
            </main>
        );
    }
}

export default Main;