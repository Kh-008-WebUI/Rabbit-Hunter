import React, { Component } from 'react';
import Rabbit from './Rabbit';
import Hunter from './Hunter';

export default class Wrap extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className='Wrap'>
				<Rabbit move={this.props.move}/>
				{this.props.hunter.map( (item,i) => {
		            return <Hunter key={i}
		            			   name={item.name} 
		               			   gender={item.gender} 
		               			   x={this.props.x} 
		               			   y={this.props.y}/>
		               })
	            }
			</div>
		);
	}
}
