import React, { Component } from 'react';
import "./ProjectMain.css";

export class ProjectMain extends Component {
    render() {
        return (
            <section className="project-main">
                <section className="about">
                    <h3>About this project</h3>
                    <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                    <br></br>
                    <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                </section>
                <section className="pledges">
                    <section className="pledge">
                        <div className="pledge-header">
                            <h3>Bamboo Stand</h3>
                            <p className="pledge-text">Pledge $25 or more</p>
                        </div>
                        <div className="pledge-main">
                            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                        </div>
                        <div className="pledge-footer">
                            <div className="amount-left">
                                <h3>{this.props.stands.bambooStand}</h3>
                                <p>left</p>
                            </div>
                            <button className="cta pledge-cta" onClick={this.props.showModal}>Select Reward</button>
                        </div>
                    </section>
                    <section className="pledge">
                        <div className="pledge-header">
                            <h3>Black Edition Stand</h3>
                            <p className="pledge-text">Pledge $75 or more</p>
                        </div>
                        <div className="pledge-main">
                            <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                        </div>
                        <div className="pledge-footer">
                            <div className="amount-left">
                                <h3>{this.props.stands.blackStand}</h3>
                                <p>left</p>
                            </div>
                            <button className="cta pledge-cta" onClick={this.props.showModal}>Select Reward</button>
                        </div>
                    </section>
                    <section className="pledge pledge-unavailable">
                        <div className="pledge-header pledge-header-unavailable">
                            <h3>Mahogany Special Edition</h3>
                            <p className="pledge-text unavailable-pledge-text">Pledge $200 or more</p>
                        </div>
                        <div className="pledge-main pledge-main-unavailable">
                            <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                        </div>
                        <div className="pledge-footer pledge-footer-unavailable">
                            <div className="amount-left">
                                <h3>{this.props.stands.mahoganyStand}</h3>
                                <p>left</p>
                            </div>
                            <button className="cta pledge-cta cta-unavailable">Out of stock</button>
                        </div>
                    </section>
                </section>
            </section>
        );
    }
}

export default ProjectMain;
