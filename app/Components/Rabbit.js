import React, { Component } from 'react';
import rabbit from '../data/rabbit.jpg'
import rabbitDead from '../data/RabbitDead.png'

export default class Rabbit extends Component {
	constructor(props){
		super(props);
		if(!this.props.isDead)this.props.move();
		
	}
	deadRabbitButton(){
		return(this.props.isDead ? 'btn-danger':'btn-success')
	}
	deadRabbitPhoto(){
		return(this.props.isDead ? rabbitDead:rabbit)
	}
	render() {
		return (
			<div className='Rabbit'>
				<h3>Hey BOYS im HERE</h3>
				<div>
					<img src={this.deadRabbitPhoto()} alt='Hunter'/>
					<button className={`btn
                 ${this.deadRabbitButton()}`}
							onClick={this.props.move}>Move</button>
				</div>
			</div>
		);
	}
}
Rabbit.propTypes = {
	isDead : React.PropTypes.bool,
    move : React.PropTypes.func
}