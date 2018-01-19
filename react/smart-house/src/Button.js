import React, { Component } from 'react';

class Button extends Component {

  buttonClicked = () => {this.props.onClickFunction(this.props.name);}

  render() {
    return (
      <button className="App-button" onClick={this.buttonClicked}>{this.props.name}</button>);
  }
}

export default Button;