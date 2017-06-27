import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { setHareLocationAction } from "../actions/setHareLocationAction"

class SetHareLocation extends React.Component {
	constructor(props) {
		super(props)

		this.setLocation = this.setLocation.bind(this)
	}

	setLocation() {
		const form = document.getElementsByClassName("set_hare_location")[0];
		const {x, y} = form.elements;

		const payload = { 
			x: x.value,
			y: y.value
		}
		this.props.setHareLocationAction(payload)
		
	}

	render() {
		return (
			<form className="set_hare_location">
			<div className="form-inputs">
				<div>
					<input type="number" max="100" min="0" step="1" name="x" placeholder="Enter some X coordinates"/>
				</div>
				<div>
					<input type="number" max="100" min="0" step="1" name="y" placeholder="Enter some Y coordinates"/>
				</div>
                <div>
					<button type="button" className="hare-steps" onClick={this.setLocation}>Run, hare, run!</button>
				</div>
				</div>
			</form>
		)
	}
}


const mapDispatchToProps = dispatch => {
  return {
    setHareLocationAction: bindActionCreators(setHareLocationAction, dispatch)
  }
}
//коннект присоединяет задиспатченные экшнкриейторы в пропс
export default connect(null, mapDispatchToProps)(SetHareLocation)

