import {
    GET_CUSTOMER,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAIL,
    CREATE_CUSTOMER,
    CREATE_CUSTOMER_SUCCESS,
    CREATE_CUSTOMER_CLEAR_SUCCESS,
    CREATE_CUSTOMER_FAIL,
    GET_CUSTOMER_ID,
    GET_CUSTOMER_ID_SUCCESS,
    GET_CUSTOMER_ID_FAIL,
    UPDATE_CUSTOMER,
    UPDATE_CUSTOMER_SUCCESS,
    UPDATE_CUSTOMER_CLEAR_SUCCESS,
    UPDATE_CUSTOMER_FAIL,
    DELETE_CUSTOMER,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_CLEAR_SUCCESS,
    DELETE_CUSTOMER_FAIL
} from "./actionTypes"

const initialState = {
    customerData: [],
    customerDataId: [],
    success: "",
    error: "",
    loading: false,
}

const customers = (state = initialState, action) => {
    switch (action.type) {

        case DELETE_CUSTOMER:
            state = {
                ...state,
                loading: true,
            }
            break
        case DELETE_CUSTOMER_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            }
            break
        case DELETE_CUSTOMER_CLEAR_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: "",
            }
            break
        case DELETE_CUSTOMER_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload,
                success: "",
            }
            break

        case GET_CUSTOMER_ID:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_CUSTOMER_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                customerDataId: action.payload
            }
            break
        case GET_CUSTOMER_ID_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break

        case CREATE_CUSTOMER:
            state = {
                ...state,
                loading: true,
            }
            break
        case CREATE_CUSTOMER_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            }
            break
        case CREATE_CUSTOMER_CLEAR_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: "",
            }
            break
        case CREATE_CUSTOMER_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload,
                success: "",
            }
            break

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

        case UPDATE_CUSTOMER:
            state = {
                ...state,
                loading: true,
            }
            break
        case UPDATE_CUSTOMER_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            }
            break
        case UPDATE_CUSTOMER_CLEAR_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: "",
            }
            break
        case UPDATE_CUSTOMER_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload,
                success: "",
            }
            break

        default:
            state = { ...state }
            break
    }
    return state
}

export default customers