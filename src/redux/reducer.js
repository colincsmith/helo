import axios from 'axios'

const initialState = {
    user: {},
    isLoggedIn: false
}

const LOGIN_USER = "LOGIN_USER"
const GET_USER = "GET_USER"

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function getUser(){
    const user = axios.get('/api/user').then(res => res.data)
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.payload, isLoggedIn: true}
        case GET_USER + "_PENDING":
            return state
        case GET_USER + "_FULFILLED":
            return {...state, user: action.payload, isLoggedIn: true}
        case GET_USER + "_REJECTED":
            return initialState
        default:
            return state
    }
}