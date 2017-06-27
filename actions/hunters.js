import {randomLocation} from "../utils"

export const hunterCreate = (payload) => {
    return {
        type: "HUNTER_CREATE",
        payload: {
            name: payload.name,
            avatar: payload.avatar,
            location: randomLocation()
        }
    }
}

export const hunterDelete = (index) => {
    return {
        type: "HUNTER_DELETE",
        payload: index
    }
}
