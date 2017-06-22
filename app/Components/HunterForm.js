import React, { Component } from 'react';

export default class HunterForm extends Component {
	constructor(props){
		super(props);
		console.log(this.props);
		let coordinates = new Set();
		this.state = {
			name:"",
			gender:"Male",
			coordinates:coordinates
		};
		this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
	}

    onChange(e) {
    	let obj = {};
    	obj[e.target.name] = e.target.value;
        this.setState(obj);
    }
    handleSubmit(e) {
    	e.preventDefault();
        this.props.addHunter(this.state.name,this.state.gender);
        this.setState({
			name:"",
			gender:"Male",
		});
    }
	handleCheckBoxChange(changeEvent) {
	  if (this.state.coordinates.has(changeEvent.target.value)) {
	      this.state.coordinates.delete(changeEvent.target.value);
	  } else {
	      this.state.coordinates.add(changeEvent.target.value);
	  }
	}

	render() {
		return (
			<div className="hunterAdd">
				<form onSubmit={this.handleSubmit}>
					<fieldset>
						<p>Сейчас зайца уже ловят {this.props.hunter.length} охотников</p>
		                <p>
		                    <label>Имя:</label><br />
		                    <input type="text" 
		                           name="name" 
		                           value={this.state.name} 
		                           onChange={this.onChange}/>
		                </p>
		                <p>
		                  <input type="radio" 
		                  		 name="gender" 
		                  		 value="Male" 
		                  		 checked={this.state.gender === 'Male'} 
		                  		 onChange={this.onChange} /> Male

	  					  <input type="radio"
	  					   		 name="gender"
	  					    	 value="Female"
	  					    	 checked={this.state.gender === 'Female'}
	  					         onChange={this.onChange}/> Female
		                </p>
		                <p>
		                  <label>Що почує:</label><br />
		                  <input type="checkBox" 
		                  		 name="x" 
		                  		 value="x" 
		                  		 onChange={this.handleCheckBoxChange} />X
	  					  <input type="checkBox" 
	  					  		 name="y" 
	  					  		 value="y"
	  					  		 onChange={this.handleCheckBoxChange}/>Y
		                </p>
		                <input type="submit" value="Add hunter"/>
		            </fieldset>
		        </form>
	        </div>
		);
	}
}
HunterForm.propTypes = {
    addHunter : React.PropTypes.func
}