import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "./actionTypes"

export const login = (data) => {
    return {
        type: LOGIN,
        payload: { data },
    }
}
export const loginSuccess = data => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    }
}
export const loginFail = error => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}



