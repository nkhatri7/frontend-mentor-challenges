import React, { Component } from 'react';
import Modal from 'react-modal';
import "./DefaultModal.css";

export class DefaultModal extends Component {

    customisedModalStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
            background: 'white',
            position: 'absolute',
            float: 'left',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'scroll'
        }
    }

    handlePledgeChange(event) {
        // Get the pledge div
        const selectedPledge = event.target.parentElement.parentElement.parentElement;
        const radioButtons = document.querySelectorAll(".radio");

        radioButtons.forEach(function(radioButton) {
            const pledge = radioButton.parentElement.parentElement.parentElement;
            if (pledge === selectedPledge) {
                if (!pledge.classList.contains("selected-modal-pledge")) {
                    pledge.classList.add("selected-modal-pledge");
                }
                pledge.lastChild.style.display = "block";
            } else {
                if (pledge.classList.contains("selected-modal-pledge")) {
                    pledge.classList.remove("selected-modal-pledge");
                }
                pledge.lastChild.style.display = "none";
            }
        });
    }

    render() {
        return (
            <Modal isOpen={this.props.show} style={this.customisedModalStyle} ariaHideApp={false} className="default-modal">
                <section className="default-modal-header">
                    <h2>Back this project</h2>
                    <button className="close-button" onClick={this.props.closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
                    </button>
                </section>
                <section className="default-modal-main">
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                    <section className="modal-pledges">
                        <section className="modal-pledge">
                            <div className="modal-pledge-header">
                                <div className="pledge-title">
                                    <input type="radio" id="no-reward-radio" className="radio" name="pledge-radio" value="noReward" onChange={this.handlePledgeChange} />
                                    <div className="pledge-title-text">
                                        <label htmlFor="no-reward-radio" className="pledge-label">Pledge with no reward</label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-pledge-body">
                                <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                            </div>
                            <div className="modal-pledge-footer">
                                <hr />
                                <div className="modal-pledge-footer-content">
                                    <p>Enter your pledge</p>
                                    <div className="pledge-actions">
                                        <span className="currency">$</span>
                                        <input id="no-reward-price" type="text" />
                                        <button className="cta cta-modal" onClick={this.props.submit}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="modal-pledge">
                            <div className="modal-pledge-header">
                                <div className="pledge-title">
                                    <input type="radio" id="bamboo-radio" className="radio" name="pledge-radio" value="bambooStand" onChange={this.handlePledgeChange} />
                                    <div className="pledge-title-text">
                                        <label htmlFor="bamboo-radio" className="pledge-label">Bamboo Stand</label>
                                        <p className="modal-pledge-text">Pledge $25 or more</p>
                                    </div>
                                </div>
                                <div className="modal-pledge-amount">
                                    <h3>{this.props.stands.bambooStand}</h3>
                                    <p>left</p>
                                </div>
                            </div>
                            <div className="modal-pledge-body">
                                <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                            </div>
                            <div className="modal-pledge-amount-mobile">
                                <h3>{this.props.stands.bambooStand}</h3>
                                <p>left</p>
                            </div>
                            <div className="modal-pledge-footer">
                                <hr />
                                <div className="modal-pledge-footer-content">
                                    <p>Enter your pledge</p>
                                    <div className="pledge-actions">
                                        <span className="currency">$</span>
                                        <input id="bamboo-price" type="text" defaultValue={25} />
                                        <button className="cta cta-modal" onClick={this.props.submit}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="modal-pledge">
                            <div className="modal-pledge-header">
                                <div className="pledge-title">
                                    <input type="radio" id="black-radio" className="radio" name="pledge-radio" value="blackStand" onChange={this.handlePledgeChange} />
                                    <div className="pledge-title-text">
                                        <label htmlFor="black-radio" className="pledge-label">Black Edition Stand</label>
                                        <p className="modal-pledge-text">Pledge $75 or more</p>
                                    </div>
                                </div>
                                <div className="modal-pledge-amount">
                                    <h3>{this.props.stands.blackStand}</h3>
                                    <p>left</p>
                                </div>
                            </div>
                            <div className="modal-pledge-body">
                                <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                            </div>
                            <div className="modal-pledge-amount-mobile">
                                <h3>{this.props.stands.blackStand}</h3>
                                <p>left</p>
                            </div>
                            <div className="modal-pledge-footer">
                                <hr />
                                <div className="modal-pledge-footer-content">
                                    <p>Enter your pledge</p>
                                    <div className="pledge-actions">
                                        <span className="currency">$</span>
                                        <input id="black-price" type="text" defaultValue={75} />
                                        <button className="cta cta-modal" onClick={this.props.submit}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="modal-pledge modal-pledge-unavailable">
                            <div className="modal-pledge-header">
                                <div className="pledge-title">
                                    <input type="radio" id="mahogany-radio" name="pledge-radio" value="mahoganyStand" disabled />
                                    <div className="pledge-title-text">
                                        <label htmlFor="mahogany-radio" className="pledge-label unavailable-pledge-label">Mahogany Special Edition</label>
                                        <p className="modal-pledge-text modal-unavailable-pledge-text">Pledge $200 or more</p>
                                    </div>
                                </div>
                                <div className="modal-pledge-amount">
                                    <h3>{this.props.stands.mahoganyStand}</h3>
                                    <p>left</p>
                                </div>
                            </div>
                            <div className="modal-pledge-body">
                                <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                            </div>
                            <div className="modal-pledge-amount-mobile">
                                <h3>{this.props.stands.mahoganyStand}</h3>
                                <p>left</p>
                            </div>
                        </section>
                    </section>
                </section>
            </Modal>
        );
    }
}

export default DefaultModal
