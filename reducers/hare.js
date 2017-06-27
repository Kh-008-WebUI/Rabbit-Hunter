const initialState = {
	x: 0,
	y: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_RANDOM_LOCATION_HARE':
	   		return Object.assign({}, action.payload)
	   	default:
	   		return state
	}
}

export default reducer
