import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

class Screen extends Component {

    componentDidMount() {
        const screen = document.querySelector('.screen-container');
        screen.classList.add(`theme-${this.props.theme}-screen`);
    }

    componentDidUpdate(prevProps) {
        if (this.props.theme !== prevProps.theme) {
            const screen = document.querySelector('.screen-container');
            screen.classList.replace(`theme-${prevProps.theme}-screen`, `theme-${this.props.theme}-screen`);
        }
    }

    render() {
        return (
            <div className="screen-container">
                <p className="screen-text">{this.props.display}</p>
            </div>
        );
    }
}

Screen.propTypes = {
    display: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
};

export default Screen