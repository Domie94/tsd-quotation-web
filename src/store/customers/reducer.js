import {
    GET_CUSTOMER,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAIL
} from "./actionTypes"

const initialState = {
    customerData: [],
    error: "",
    loading: false,
}

const customers = (state = initialState, action) => {
    switch (action.type) {
 
        case GET_CUSTOMER:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_CUSTOMER_SUCCESS:
            state = {
                ...state,
                loading: false,
                customerData: action.payload
            }
            break
        case GET_CUSTOMER_FAIL:
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

export default customers