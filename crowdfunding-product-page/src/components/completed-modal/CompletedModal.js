import React, { Component } from 'react';
import Modal from 'react-modal';
import "./CompletedModal.css";
import checkIcon from "../../images/icon-check.svg";

export class CompletedModal extends Component {

    customisedModalStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
            background: 'white',
            position: 'absolute',
            float: 'left',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            height: 'max-content',
            width: '540px',
            padding: '3rem 2.5rem',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'scroll'
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.show} style={this.customisedModalStyle} ariaHideApp={false} >
                <div className="completed-modal-container">
                    <figure>
                        <img src={checkIcon} alt="Check Icon" />
                    </figure>
                    <h2>Thanks for your support!</h2>
                    <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                    <button className="cta cta-completed" onClick={this.props.closeModal}>Got it!</button>
                </div>
            </Modal>
        )
    }
}

export default CompletedModal
