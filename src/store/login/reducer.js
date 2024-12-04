import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "./actionTypes"

const initialState = {
    loginData: [],
    success: "",
    error: "",
    loading: false,
}

const login = (state = initialState, action) => {
    switch (action.type) { 

        case LOGIN:
            state = {
                ...state,
                loading: true,
            }
            break
        case LOGIN_SUCCESS:
            state = {
                ...state,
                loading: false,
                loginData: action.payload
            }
            break
        case LOGIN_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break
 
        default:
            state = { ...state }
            break
    }
    return state
}

export default login;