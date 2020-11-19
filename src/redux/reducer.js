const initialState = {
    id: null,
    username: '',
}


const GET_USER = "GET_USER"

export function getUser(id, username){
    return{
        type: GET_USER,
        payload: {id, username}
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return {
                id: action.payload.id,
                username: action.payload.username
            }
            default:
                return state
    }
}