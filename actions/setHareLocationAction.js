import {randomLocation} from "../utils"

export const setHareLocationAction = (x, y) => {
	return {
		type: "SET__HARE_LOCATION",
		payload: {x, y}
	}
}
