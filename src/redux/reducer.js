const initialState = {
    username: '',
    picture: ''
}


const GET_USER = "GET_USER"
const UPDATE_USER = "UPDATE_USER"
const CLEAR_USER = "CLEAR_USER"

export const getUser = (id, username, picture) => {
    return{
        type: GET_USER,
        payload: {id, username, picture}
    }
}

export const updateUser = (username, picture) => {
    return{
        type: UPDATE_USER,
        payload: {username, picture}
    }
}

export const clearUser = () => {
    return{
    type: CLEAR_USER,
    payload: {
        username: '',
        picture: ''
    }
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return {
                id: action.payload.id,
                username: action.payload.username,
                picture: action.payload.picture
            }
            case UPDATE_USER:
                return{
                    username: action.payload.username,
                    picture: action.payload.picture
                }
            default:
                return state
    }
}