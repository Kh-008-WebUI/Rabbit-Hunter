import React, { Component } from 'react';
import malePhoto from '../data/f_hunter.png'
import femalePhoto from '../data/s_hunter.png'

export default class Hunter extends Component {
	constructor(props){
		super(props);
		this.genderPhoto();
	}

	genderPhoto(){
		this.photo = malePhoto;
		if(this.props.gender==='Female'){
			this.photo = femalePhoto;
		}
	}
	deadRabbitButton(){
		return(this.props.isDead ? 'btn-success':'btn-danger')
	}
	hunterFire(){
		this.props.fire(this.props.accuracy);
	}
	render() {
		return (
			<div className="Hunter">
				<img src={this.photo} alt='HUNTER'/>
				<div className="Hunter_whisper">There: {this.props.x} & {this.props.y}</div>
				<div className="Hunter_info">
					<p className="">Name:{this.props.name}</p>
					<p className="">Gender:{this.props.gender}</p>
					<p className="">Accuracy:{this.props.accuracy}</p>
				</div>
				<button className={`btn btn-margin
                 		${this.deadRabbitButton()}`}
						disabled={this.props.isDead}
						onClick={()=>this.hunterFire()}>FIRE</button>
			</div>
		);
	}
}
Hunter.propTypes = {
	isDead : React.PropTypes.bool,
	fire : React.PropTypes.func,
    name : React.PropTypes.string,
    gender : React.PropTypes.string,
    accuracy : React.PropTypes.string,
    x : React.PropTypes.number,
    y : React.PropTypes.number
}