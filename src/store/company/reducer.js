import {
    GET_COMPANY,
    GET_COMPANY_SUCCESS,
    GET_COMPANY_FAIL,
    CREATE_COMPANY,
    CREATE_COMPANY_SUCCESS,
    CREATE_COMPANY_CLEAR_SUCCESS,
    CREATE_COMPANY_FAIL,
    GET_COMPANY_ID,
    GET_COMPANY_ID_SUCCESS,
    GET_COMPANY_ID_FAIL,
    UPDATE_COMPANY,
    UPDATE_COMPANY_SUCCESS,
    UPDATE_COMPANY_CLEAR_SUCCESS,
    UPDATE_COMPANY_FAIL,
    DELETE_COMPANY,
    DELETE_COMPANY_SUCCESS,
    DELETE_COMPANY_CLEAR_SUCCESS,
    DELETE_COMPANY_FAIL
} from "./actionTypes"

const initialState = {
    companyData: [],
    companyDataId: [],
    success: "",
    error: "",
    loading: false,
}

const companies = (state = initialState, action) => {
    switch (action.type) {

        case DELETE_COMPANY:
            state = {
                ...state,
                loading: true,
            }
            break
        case DELETE_COMPANY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            }
            break
        case DELETE_COMPANY_CLEAR_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: "",
            }
            break
        case DELETE_COMPANY_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload,
                success: "",
            }
            break

        case GET_COMPANY_ID:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_COMPANY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                companyDataId: action.payload
            }
            break
        case GET_COMPANY_ID_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break

        case CREATE_COMPANY:
            state = {
                ...state,
                loading: true,
            }
            break
        case CREATE_COMPANY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            }
            break
        case CREATE_COMPANY_CLEAR_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: "",
            }
            break
        case CREATE_COMPANY_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload,
                success: "",
            }
            break

        case GET_COMPANY:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_COMPANY_SUCCESS:
            state = {
                ...state,
                loading: false,
                companyData: action.payload
            }
            break
        case GET_COMPANY_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break

        case UPDATE_COMPANY:
            state = {
                ...state,
                loading: true,
            }
            break
        case UPDATE_COMPANY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            }
            break
        case UPDATE_COMPANY_CLEAR_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
                success: "",
            }
            break
        case UPDATE_COMPANY_FAIL:
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

export default companies;