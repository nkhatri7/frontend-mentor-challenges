import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';

export class Keypad extends Component {

    componentDidMount() {
        const keypad = document.querySelector('.keypad-container');
        const primaryBtns = document.querySelectorAll('.primary');
        const secondaryBtns = document.querySelectorAll('.secondary');
        const equalBtn = document.querySelector('.equal');

        keypad.classList.add(`theme-${this.props.theme}-keypad`);

        primaryBtns.forEach(btn => {
            btn.classList.add(`theme-${this.props.theme}-primary`);
        });

        secondaryBtns.forEach(btn => {
            btn.classList.add(`theme-${this.props.theme}-secondary`);
        });

        equalBtn.classList.add(`theme-${this.props.theme}-equal`);
    }

    componentDidUpdate(prevProps) {
        if (this.props.theme !== prevProps.theme) {
            const keypad = document.querySelector('.keypad-container');
            const primaryBtns = document.querySelectorAll('.primary');
            const secondaryBtns = document.querySelectorAll('.secondary');
            const equalBtn = document.querySelector('.equal');

            keypad.classList.replace(`theme-${prevProps.theme}-keypad`, `theme-${this.props.theme}-keypad`);

            primaryBtns.forEach(btn => {
                btn.classList.replace(`theme-${prevProps.theme}-primary`, `theme-${this.props.theme}-primary`);
            });

            secondaryBtns.forEach(btn => {
                btn.classList.replace(`theme-${prevProps.theme}-secondary`, `theme-${this.props.theme}-secondary`);
            });

            equalBtn.classList.replace(`theme-${prevProps.theme}-equal`, `theme-${this.props.theme}-equal`);
        }
    }

    render() {
        return (
            <div className="keypad-container">
                <button className="key primary" onClick={this.props.handleDigitClick}>7</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>8</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>9</button>
                <button className="key secondary" onClick={this.props.handleDeleteClick}>DEL</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>4</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>5</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>6</button>
                <button className="key primary" onClick={this.props.handleOperatorClick}>+</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>1</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>2</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>3</button>
                <button className="key primary" onClick={this.props.handleOperatorClick}>-</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>.</button>
                <button className="key primary" onClick={this.props.handleDigitClick}>0</button>
                <button className="key primary" onClick={this.props.handleOperatorClick}>/</button>
                <button className="key primary" onClick={this.props.handleOperatorClick}>x</button>
                <button className="key secondary reset" onClick={this.props.handleResetClick}>RESET</button>
                <button className="key equal" onClick={this.props.handleEqualClick}>=</button>
            </div>
        );
    }
}

Keypad.propTypes = {
    handleDigitClick: PropTypes.func.isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
    handleOperatorClick: PropTypes.func.isRequired,
    handleResetClick: PropTypes.func.isRequired,
    handleEqualClick: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
};

export default Keypad
