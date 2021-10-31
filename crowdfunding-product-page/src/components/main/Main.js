import React, {Component} from "react";
import "./Main.css";
import ProjectHeader from "../project-header/ProjectHeader";
import ProjectMain from "../project-main/ProjectMain";
import ProjectStats from "../project-stats/ProjectStats";
import DefaultModal from "../default-modal/DefaultModal";
import CompletedModal from "../completed-modal/CompletedModal";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: {
                funds: 89914,
                backers: 5007,
                daysLeft: 56
            },
            stands: {
                bambooStand: 101,
                blackStand: 64,
                mahoganyStand: 0
            },
            showDefaultModal: false,
            showCompletedModal: false
        }
    }

    handleShowDefaultModal = () => {
        this.setState({
            showDefaultModal: true
        });
    }

    handleCloseDefaultModal = () => {
        this.setState({
            showDefaultModal: false
        });
    }

    handleCloseCompletedModal = () => {
        this.setState({
            showCompletedModal: false
        });
    }

    handlePledgeSubmit = (event) => {
        const amountString = event.target.previousSibling.value;
        if (amountString.trim() === "") {
            alert("Please enter a valid amount");
        } else if (isNaN(amountString)) {
            alert("Please enter a valid number.");
        } else {
            const amount = parseInt(amountString);
            const pledgeDiv = event.target.parentElement.parentElement.parentElement.parentElement;
            const stand = pledgeDiv.firstChild.firstChild.firstChild.value;
            let proceed = true;

            if (stand === "bambooStand") {
                if (amount < 25) {
                    alert("To get the bamboo stand you need to pledge at least $25.");
                    proceed = false;
                } else {
                    this.setState({
                        stands: {
                            bambooStand: this.state.stands.bambooStand - 1,
                            blackStand: this.state.stands.blackStand,
                            mahoganyStand: this.state.stands.mahoganyStand
                        }
                    });
                }
            } else if (stand === "blackStand") {
                if (amount < 75) {
                    alert("To get the black edition stand you need to pledge at least $75.");
                    proceed = false;
                } else {
                    this.setState({
                        stands: {
                            bambooStand: this.state.stands.bambooStand,
                            blackStand: this.state.stands.blackStand - 1,
                            mahoganyStand: this.state.stands.mahoganyStand
                        }
                    });
                }
            } else if (stand === "noReward") {
                if (amount <= 0) {
                    alert("Please make sure your pledge is more than $0.");
                }
            }

            if (proceed) {
                this.setState({
                    stats: {
                        funds: this.state.stats.funds + amount,
                        backers: this.state.stats.backers + 1,
                        daysLeft: this.state.stats.daysLeft
                    },
                    showDefaultModal: false,
                    showCompletedModal: true
                });
            }
        } 
    }

    render() {
        return (
            <main>
                <ProjectHeader showModal={this.handleShowDefaultModal}/>
                <ProjectStats stats={this.state.stats} />
                <ProjectMain showModal={this.handleShowDefaultModal} stands={this.state.stands} />
                <DefaultModal show={this.state.showDefaultModal} closeModal={this.handleCloseDefaultModal} stands={this.state.stands} submit={this.handlePledgeSubmit} />
                <CompletedModal show={this.state.showCompletedModal} closeModal={this.handleCloseCompletedModal} />
            </main>
        );
    }
}

export default Main;