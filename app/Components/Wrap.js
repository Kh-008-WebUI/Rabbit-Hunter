import React, { Component } from 'react';
import Rabbit from './Rabbit';
import {Hunters} from './Hunters';

export default class Wrap extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className='Wrap'>
				<Rabbit move={this.props.move} isDead={this.props.isDead}/>
				<Hunters hunter={this.props.hunter} 
						 x={this.props.x} 
						 y={this.props.y}
						 fire={this.props.fire}
						 isDead={this.props.isDead}/>
			</div>
		);
	}
}
