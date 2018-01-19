import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <div className="App-content1"></div>
        <div className="App-content2"></div>
        <div className="App-content3"></div>
        <img src='pogoda.png' className="App-picture" alt="weather" />
        <img src='home.gif' className="App-picture" alt="plan" />
      </div>
    );
  };
}

export default Content;