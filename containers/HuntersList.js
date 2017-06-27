import React from "react"
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import {hunterDelete} from "../actions/hunters"

class Hunters extends React.Component {

	constructor(props) {
		super()

		this.hunterDelete = this.hunterDelete.bind(this)
	}

	hunterDelete(index) {
		this.props.hunterDelete(index)
	}


	render() {
        const {hunters} = this.props
		return (
			<div className="hunters">
				{hunters.length > 0 ?
					hunters.map((hunter, index) => {
						return (
							<div className="hunter" key={index}>
								<img src={hunter.avatar} alt="" />
								<p>Name: {hunter.name}</p>
								<button type="button" className="delHunters" onClick={(e) => this.hunterDelete(index)}>delete</button>
							</div>
						)
	                }):
					<div className="not_found"><p className="no_hunters">Hunters Not Fount</p></div>
				}

			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        hunters: state.hunters
    }
}

const mapDispatchToProps = dispatch => {
  return {
    hunterDelete: bindActionCreators(hunterDelete, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hunters)
