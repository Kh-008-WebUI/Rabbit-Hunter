import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let changeBanner = undefined;
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
    constructor(){
      super();
      this.state = {text: "Welcome to Smart House"};
      this.changeBanner = this.changeBanner.bind(this);
    }

    changeBanner () {
       this.setState(() => ({text: "Yes"}));
    }

    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.text}</h2>
          <button onClick={this.changeBanner}></button>
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
            <li><Button name="Water"/></li>
            <li><Button name="Electricity"/></li>
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
        <button className="App-button" onClick="">{this.props.name}</button>
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

