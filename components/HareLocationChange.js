import React from 'react'

export default class HareLocationChange extends React.Component {

	constructor(props) {
		super(props)

		this.changeRandomLocationHare = this.changeRandomLocationHare.bind(this)
	}

	changeRandomLocationHare() {
		this.props.changeRandomLocationHare()
	}

	render() {
		return (
			<div className="location-rabbit">
				<button type="button" className="bunny" onClick={this.changeRandomLocationHare}>change location rabbit</button>
			</div>
		)
	}
}
