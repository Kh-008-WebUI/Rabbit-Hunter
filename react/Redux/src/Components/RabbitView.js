import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { move } from '../Actions/actions';

class RabbitView extends React.Component {

      move = () => {
            this.props.dispatch(move());
      }

      render() {
          return (
                  <div>
                        <span className='coordinates'>Coordinates of the Rabbit: x = {this.props.x}  y = {this.props.y}</span>
                        <button type="button" onClick={this.move}>MOVE RABBIT</button>
                        <div className='rabbit'
                              style={{top: this.props.y + 'px',
                                      left: this.props.x + 'px'}}>
                        </div>
                  </div>
            );
      }
}
const rabbitPosition = state => {
      return {
            x: state.x,
            y: state.y
      }
}
export default connect(rabbitPosition)(RabbitView);




