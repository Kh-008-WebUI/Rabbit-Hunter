import React, { Component } from 'react';
import Button from './Button';

export default class SideBar extends Component {

  render() {
    return (
      <nav>
        <ul className="App-nav">
          <li><Button name="Doors" onClickFunction = {this.props.changeBannerFunction} /></li>
          <li><Button name="Water" onClickFunction = {this.props.changeBannerFunction} /></li>
          <li><Button name="Electricity" onClickFunction = {this.props.changeBannerFunction} /></li>
          <li><Button name="Flowers" onClickFunction = {this.props.changeBannerFunction} /></li>
          <li><Button name="Heating" onClickFunction = {this.props.changeBannerFunction} /></li>
        </ul>
      </nav>
    );
  };
}

