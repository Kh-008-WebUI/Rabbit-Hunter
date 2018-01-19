import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';

class App extends Component {

state = {banner: "Welcome to Smart House!"}

changeBanner = (name) => {this.setState({banner: name});}
  
  render() {
    return (
      <div className="App">
        <Header banner = {this.state.banner} />
        <SideBar changeBannerFunction={this.changeBanner} />
        <Content />
      </div>
    );
  }
}

export default App;



//Components/
//         2 - Layout/ Login, dashboard
//Pages/.... (smart components)

