import {
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    CREATE_PRODUCT,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_CLEAR_SUCCESS,
    CREATE_PRODUCT_FAIL,
    GET_PRODUCT_ID,
    GET_PRODUCT_ID_SUCCESS,
    GET_PRODUCT_ID_FAIL,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_CLEAR_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_CLEAR_SUCCESS,
    DELETE_PRODUCT_FAIL
} from "./actionTypes"

const initialState = {
    productData: [],
    productDataId: [],
    success: "",
    error: "",
    loading: false,
}

const products = (state = initialState, action) => {
    switch (action.type) {

        case DELETE_PRODUCT:
            state = {
                ...state,
                loading: true,
            }
            break
        case DELETE_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            }
            break
        case DELETE_PRODUCT_CLEAR_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: "",
            }
            break
        case DELETE_PRODUCT_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload,
                success: "",
            }
            break

        case GET_PRODUCT_ID:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_PRODUCT_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                productDataId: action.payload
            }
            break
        case GET_PRODUCT_ID_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break

        case CREATE_PRODUCT:
            state = {
                ...state,
                loading: true,
            }
            break
        case CREATE_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            }
            break
        case CREATE_PRODUCT_CLEAR_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: "",
            }
            break
        case CREATE_PRODUCT_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload,
                success: "",
            }
            break

        case GET_PRODUCT:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                productData: action.payload
            }
            break
        case GET_PRODUCT_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break

        case UPDATE_PRODUCT:
            state = {
                ...state,
                loading: true,
            }
            break
        case UPDATE_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            }
            break
        case UPDATE_PRODUCT_CLEAR_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: "",
            }
            break
        case UPDATE_PRODUCT_FAIL:
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

export default products;