import React from 'react'
import { connect } from 'react-redux'
import { hunterCreate } from '../actions/hunters'
// import {browserHistory } from "react-router"

class HunterCreate extends React.Component {

	constructor(props) {
		super(props)

		this.hunterCreate = this.hunterCreate.bind(this)
	}


	hunterCreate() {

		const convertAvatar = (file) => {
			if (file) {
				const reader = new FileReader()

				reader.onloadend = () => {
					create(reader.result)
				}

				reader.readAsDataURL(file)
			} else {
				create(null)
			}

		}

		const create = (avatar) => {
			const payload = {
				name: name.value,
				avatar
			}

	        this.props.dispatch(hunterCreate(payload))
			//form reset
			form.reset()
			// browserHistory.push("/hunter/list")

		}

		const form = document.getElementsByClassName("hunter__create")[0]
		const {name, avatar} = form.elements

		convertAvatar(avatar.files[0])


	}

	render() {
		return (
			<form className="hunter__create">
			<div className="hunters_form">
				<div>
					<input type="text" name="name" placeholder="Enter your name"/>
				</div>
				<div>
					<input type="file" name="avatar" accept="image/*"/>
				</div>
                <div>
					<button type="button" className="add-hunter" onClick={this.hunterCreate}>Create hunter</button>
				</div>
				</div>
			</form>
		)
	}
}

export default connect()(HunterCreate)
