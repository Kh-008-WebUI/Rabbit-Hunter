import React, { Component } from 'react';
import logo from '../data/rabbit.jpg'

export default class Rabbit extends Component {
	constructor(props){
		super(props);
		this.handleMove = this.handleMove.bind(this);
	}
	handleMove(){
    	this.props.move();
    }
	render() {
		return (
			<div className='Rabbit'>
				<h3>Hey BOYS im HERE</h3>
				<div>
					<img src={logo} alt='231'/>
					<button onClick={this.handleMove}>Move</button>
				</div>
			</div>
		);
	}
}
Rabbit.propTypes = {
    move : React.PropTypes.func
}