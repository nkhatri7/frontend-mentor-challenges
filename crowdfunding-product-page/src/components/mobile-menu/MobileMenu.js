import React, { Component } from 'react';
import Modal from 'react-modal';
import "./MobileMenu.css";

export class MobileMenu extends Component {
    customisedModalStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
        content: {
            background: 'white',
            position: 'absolute',
            top: '5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90vw',
            height: 'max-content',
            borderRadius: '10px',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            padding: '0px'
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.show} style={this.customisedModalStyle} ariaHideApp={false} onRequestClose={this.props.close} >
                <nav className="mobile-menu">
                    {/* eslint-disable-next-line */}
                    <a href="#" className="menu-link">About</a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="menu-link discover-link">Discover</a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="menu-link">Get Started</a>
                </nav>
            </Modal>
        )
    }
}

export default MobileMenu
