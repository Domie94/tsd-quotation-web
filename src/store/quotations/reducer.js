import {
    GET_QUOTATION_CUSTOMER_ID,
    GET_QUOTATION_CUSTOMER_ID_CLEAR,
    GET_QUOTATION_CUSTOMER_ID_SUCCESS,
    GET_QUOTATION_CUSTOMER_ID_FAIL,
    GET_QUOTATION_PRODUCT_ID,
    GET_QUOTATION_PRODUCT_ID_CLEAR,
    GET_QUOTATION_PRODUCT_ID_SUCCESS,
    GET_QUOTATION_PRODUCT_ID_FAIL
} from "./actionTypes"

const initialState = {
    quotationCustomerDataId: [],
    quotationProductDataId: [],
    success: "",
    error: "",
    loading: false,
}

const quotations = (state = initialState, action) => {
    switch (action.type) {

        case GET_QUOTATION_PRODUCT_ID:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_QUOTATION_PRODUCT_ID_CLEAR:
            state = {
                ...state,
                loading: false,
                quotationProductDataId: []
            }
            break
        case GET_QUOTATION_PRODUCT_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                quotationProductDataId: action.payload
            }
            break
        case GET_QUOTATION_PRODUCT_ID_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break

        case GET_QUOTATION_CUSTOMER_ID:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_QUOTATION_CUSTOMER_ID_CLEAR:
            state = {
                ...state,
                loading: false,
                quotationCustomerDataId: []
            }
            break
        case GET_QUOTATION_CUSTOMER_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                quotationCustomerDataId: action.payload
            }
            break
        case GET_QUOTATION_CUSTOMER_ID_FAIL:
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

export default quotations;