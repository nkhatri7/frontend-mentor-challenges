import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Keypad from './components/keypad/Keypad';
import Screen from './components/screen/Screen';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "one",
      number: "",
      prevNumber: "",
      operator: "",
      screenDisplay: ""
    };
  }

  componentDidMount() {
    const app = document.querySelector('.App');
    app.classList.add(`App-theme-${this.state.theme}`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.theme !== prevState.theme) {
      const app = document.querySelector('.App');
      app.classList.replace(`App-theme-${prevState.theme}`, `App-theme-${this.state.theme}`);
    }
  }

  handleThemeToggleClick = (event) => {
    this.setState({
      theme: event.target.dataset.theme
    });
  }

  handleDigitClick = (event) => {
    this.setState(state => ({
      number: state.number.concat(event.target.innerText)
    }), () => {
      if (event.target.innerText === ".") {
        this.setState(state => ({
          screenDisplay: state.number
        }));
      } else {
        this.setScreenDisplay();
      }
    });
  }

  handleDeleteClick = () => {
    if (this.state.number.length > 0) {
      this.setState(state => ({
        number: state.number.slice(0, -1)
      }), () => {
        if (this.state.number.substr(-1) === ".") {
          this.setState(state => ({
            screenDisplay: state.number
          }));
        } else {
          this.setScreenDisplay();
        }
      });
    }
  }

  handleOperatorClick = (event) => {
    this.setState(state => ({
      prevNumber: state.number,
      number: '',
      operator: event.target.innerText
    }), () => {
      this.setScreenDisplay();
    });
  }

  handleResetClick = () => {
    this.setState({
      number: '',
      prevNumber: ''
    }, () => {
      this.setScreenDisplay();
    });
  }

  handleEqualClick = () => {
    if (this.state.prevNumber !== "") {
      if (this.state.operator === '+') {
        this.setState(state => ({
          number: Number(state.prevNumber) + Number(state.number)
        }), () => {
          this.setScreenDisplay();
        });
      } else if (this.state.operator === '-') {
        this.setState(state => ({
          number: Number(state.prevNumber) - Number(state.number)
        }), () => {
          this.setScreenDisplay();
        });
      } else if (this.state.operator === 'x') {
        this.setState(state => ({
          number: Number(state.prevNumber) * Number(state.number)
        }), () => {
          this.setScreenDisplay();
        });
      } else if (this.state.operator === '/') {
        this.setState(state => ({
          number: Number(state.prevNumber) / Number(state.number)
        }), () => {
          this.setScreenDisplay();
        });
      }
    }
  }

  setScreenDisplay() {
    if (this.state.number !== "") {
      const number = Number(this.state.number);
      this.setState({
        screenDisplay: number.toLocaleString()
      });
    } else {
      this.setState({
        screenDisplay: ''
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header theme={this.state.theme} handleThemeToggleClick={this.handleThemeToggleClick}/>
          <Screen display={this.state.screenDisplay} theme={this.state.theme} />
          <Keypad 
            handleDigitClick={this.handleDigitClick} 
            handleDeleteClick={this.handleDeleteClick} 
            handleOperatorClick={this.handleOperatorClick}
            handleResetClick={this.handleResetClick}
            handleEqualClick={this.handleEqualClick}
            theme={this.state.theme}
          />
        </div>
      </div>
    );
  }
}

export default App

