import React, { Component } from 'react';
import logo from '../data/f_hunter.png'

export default class Hunter extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="Hunter">
				<p>{this.props.name}</p>
				<p>{this.props.gender}</p>
				<img src={logo} alt='231'/>
				<p>Hunter: I saw a move on {this.props.x} and {this.props.y}</p>
				<p>Hunter: LETS GO, GET HIM</p>
			</div>
		);
	}
}
Hunter.propTypes = {
    name : React.PropTypes.string,
    gender : React.PropTypes.string,
    x : React.PropTypes.number,
    y : React.PropTypes.number
}