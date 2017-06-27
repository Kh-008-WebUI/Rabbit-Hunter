import React, { Component } from 'react';

export default class HunterForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name:"",
			gender:"Male",
			accuracy:"0",
			isFormValid:false
		};
		this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

    onChange(e) {
    	let name = e.target.name;
    	let value = e.target.value;
    	let obj = {};
    	obj[name] = value;
        this.setState(obj,()=>this.validateForm(name,value));
    }
    validateForm(name,value){
    	let valid = this.state.isFormValid;
    	if(name === "name"){
    		valid = value.match(/^([\D]+)$/i);
    	}
    	this.setState({
			isFormValid:valid
		});
    }
    handleSubmit(e) {
    	e.preventDefault();
        this.props.addHunter(this.state.name,this.state.gender,this.state.accuracy);
        this.setState({
			name:"",
			gender:"Male",
			accuracy:"0",
			isFormValid:false
		});
    }
    nameBorder(){
    	return(this.state.isFormValid ? 'name-green':'name-red');
    }
	submitButton(){
		return(this.state.isFormValid ? 'btn-success':'btn-submit');
	}
	render() {
		return (
			<div className="hunterAdd">
				<p>Сейчас зайца уже ловят {this.props.hunter.length} охотников</p>
				<legend>Добавить охотника</legend>
				<form className="main-form" onSubmit={this.handleSubmit}>
					<fieldset>
		                <div>
		                    <label><p className="margin">Имя:</p>
		                    <input type="text" 
		                    	   className={`${this.nameBorder()}`}
		                    	   placeholder="Введите имя охотника"
		                           name="name" 
		                           value={this.state.name} 
		                           onChange={this.onChange}/></label>
		                </div>
		                <hr />
		                <div>
		                  <p className="margin"><label>Пол:</label></p>
		                  <label><input type="radio" 
		                  		 name="gender" 
		                  		 value="Male" 
		                  		 checked={this.state.gender === 'Male'} 
		                  		 onChange={this.onChange} /> Male </label>

	  					  <label><input type="radio"
	  					   		 name="gender"
	  					    	 value="Female"
	  					    	 checked={this.state.gender === 'Female'}
	  					         onChange={this.onChange}/> Female</label>
		                </div>
		                <hr />
		                <div>
		                  <label><p className="margin">Меткость стрелка:</p>
	  					  <input type="range" 
	  					  		 name="accuracy" 
	  					  		 value={this.state.accuracy}
	  					  		 onChange={this.onChange}/>{this.state.accuracy}%</label>
	  					</div>
	  					<hr />
		                <input disabled={!this.state.isFormValid} 
		                	   className={`btn margin ${this.submitButton()}`}
		                	   type="submit" 
		                	   value="Add hunter"/>
		            </fieldset>
		        </form>
	        </div>
		);
	}
}
HunterForm.propTypes = {
	hunter : React.PropTypes.array,
    addHunter : React.PropTypes.func
}