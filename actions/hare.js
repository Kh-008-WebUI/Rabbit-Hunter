import {randomLocation} from "../utils"

export const changeRandomLocationHare = () => {
	return {
		type: 'CHANGE_RANDOM_LOCATION_HARE',
		payload: randomLocation()
	}
}
