import React, { Component } from 'react';
import logo from '../data/s_hunter.png'

export default class SecondHunter extends Component {
	constructor(props){
		super(props);
	}


	render() {
		return (
			<div className="HunterTwo">
				<img src={logo} alt='231'/>
				<p>SecondHunter: I saw a move</p>
				<p>SecondHunter: It might be on x:{this.props.x} and y:{this.props.y}</p>
			</div>
		);
	}
}
