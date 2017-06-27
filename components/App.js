import React from "react"
import {Link} from "react-router"
import Main from "../containers/Main"

export default class App extends React.Component {
    render () {
        return (
            <div className="main-container">
                <Main />
                <div className="sidebar"><h2>Menu</h2>
                    <div className="sidebar__links">
                    <ul>
                        <li><Link to="/hunter/create">Hunter create</Link></li>
                        <li><Link to="/hunter/list">Hunters list</Link></li>
                        <li><Link to="/hare/setCoordinates">Set Hare Location</Link></li>
                    </ul>
                    </div>
                    {this.props.children}
                </div>

            </div>
        )
    }
}
