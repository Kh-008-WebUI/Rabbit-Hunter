import React, { Component } from 'react';
import logo from './logo.svg';
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
            <li><Button /></li>
            <li><Button /></li>
            <li><Button /></li>
            <li><Button /></li>
            <li><Button /></li>
          </ul>
        </nav>
      );
    };
}

class Button extends Component {
    render(){
      return (
        <button className="App-button">Device</button>
      );
    } 
}

class Content extends Component {
    render() {
      return (
        <div className="App-content">
          Content
        </div>
      );
    };
}

export default App;

