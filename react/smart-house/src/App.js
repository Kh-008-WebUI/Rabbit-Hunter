import React, { Component } from 'react';
import logo from './logo.svg';
//import picture from './21--home-automation-dashboard6.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideBar />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Smart House</h2>
        </header>
      );
    };
}

class SideBar extends Component {
    render() {
      return (
        <nav>
          <ul className="App-nav">
            <li><Button name="Doors"/></li>
            <li><Button name="Windows"/></li>
            <li><Button name="Kitchen"/></li>
            <li><Button name="Flowers"/></li>
            <li><Button name="Heating"/></li>
          </ul>
        </nav>
      );
    };
}

class Button extends Component {
    render(){
      return (
        <button className="App-button">{this.props.name}</button>
      );
    } 
}

class Content extends Component {
    render() {
      return (
        <div className="App-content">
          <Temperature />
          <div className="App-content2"></div>
          <div className="App-content3"></div>
          <img src='pogoda.png' className="App-picture" alt="weather"/>
          <img src='home.gif' className="App-picture" alt="plan"/>
        </div>
      );
    };
}

class Temperature extends Component {
    render() {
      return (
        <div className="App-content1"></div>
      );
    };
}

export default App;

