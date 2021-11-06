import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {

    componentDidMount() {
        const toggles = document.querySelectorAll('.toggle-btn');

        if (this.props.theme === 'one') {
            toggles[0].classList.add('theme-one-active-toggle');
        } else if (this.props.theme === 'two') {
            toggles.forEach(toggle => {
                if (toggle.dataset.theme === 'two') {
                    toggle.classList.add('theme-two-active-toggle');
                } else {
                    toggle.classList.add('theme-two-toggle');
                }
            });
        } else if (this.props.theme === 'three') {
            toggles[2].classList.add('theme-three-active-toggle');
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.theme !== prevProps.theme) {
            const toggles = document.querySelectorAll('.toggle-btn');

            if (prevProps.theme === 'two') {
                toggles.forEach(toggle => {
                    toggle.classList.remove('theme-two-toggle');
                });
            }
            if (this.props.theme === 'one') {
                toggles.forEach(toggle => {
                    toggle.classList.remove('theme-two-active-toggle', 'theme-three-active-toggle');
                    if (toggle.dataset.theme === 'one') {
                        toggle.classList.add('theme-one-active-toggle');
                    }
                });
            } else if (this.props.theme === 'two') {
                toggles.forEach(toggle => {
                    toggle.classList.remove('theme-one-active-toggle', 'theme-three-active-toggle');
                    if (toggle.dataset.theme === 'two') {
                        toggle.classList.add('theme-two-active-toggle');
                    } else {
                        toggle.classList.add('theme-two-toggle');
                    }
                });
            } else if (this.props.theme === 'three') {
                toggles.forEach(toggle => {
                    toggle.classList.remove('theme-one-active-toggle', 'theme-two-active-toggle');
                    if (toggle.dataset.theme === 'three') {
                        toggle.classList.add('theme-three-active-toggle');
                    }
                });
            }
        }
    }

    render() {
        return (
            <header>
                <h1 className="calc-logo">calc</h1>
                <section className="theme-toggle">
                    <p className="theme-text">THEME</p>
                    <div className="theme-toggle-container">
                        <div className="toggle-container">
                            <p>1</p>
                            <button 
                                className="toggle-btn" 
                                data-theme="one" 
                                onClick={this.props.handleThemeToggleClick}>
                                <span className="hidden">Toggle</span>
                            </button>
                        </div>
                        <div className="toggle-container">
                            <p>2</p>
                            <button 
                                className="toggle-btn" 
                                data-theme="two" 
                                onClick={this.props.handleThemeToggleClick}>
                                <span className="hidden">Toggle</span>
                            </button>
                        </div>
                        <div className="toggle-container">
                            <p>3</p>
                            <button 
                                className="toggle-btn" 
                                data-theme="three" 
                                onClick={this.props.handleThemeToggleClick}>
                                    <span className="hidden">Toggle</span>
                            </button>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
}

Header.propTypes = {
    theme: PropTypes.string.isRequired,
    handleThemeToggleClick: PropTypes.func.isRequired
}

export default Header
