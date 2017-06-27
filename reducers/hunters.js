const initialState = []

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "HUNTER_CREATE": {
			state.push(action.payload)
			return [...state]
		}
		case "HUNTER_DELETE": {
			state.splice(action.payload, 1)
			return [...state]
		}
	   	default:
	   		return state
	}
}

export default reducer
