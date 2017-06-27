import {combineReducers} from "redux"
import hunters from "./hunters"
import hare from "./hare"
import hareCoordinates from "./hareCoordinates"

export default combineReducers({hare, hunters, hareCoordinates})
