import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import HareLocationChange from "../components/HareLocationChange"
import MainField from "../components/MainField"
import {changeRandomLocationHare} from "../actions/hare"
//import {setHareLocationAction} from "../actions/setHareLocationAction"

class Main extends React.Component {
	render() {
		const {changeRandomLocationHare, hare, hunters} = this.props
		return (
            <div className="main">
                <HareLocationChange
				 	changeRandomLocationHare={changeRandomLocationHare}
				/>
                <MainField
					hare={hare}
					hunters={hunters}
				/>
            </div>
		)
	}
}

const mapStateToProps = state => {
    return {
		hare: state.hare,
  	  	hunters: state.hunters
    }
}

const mapDispatchToProps = dispatch => {
  return {
    changeRandomLocationHare: bindActionCreators(changeRandomLocationHare, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
