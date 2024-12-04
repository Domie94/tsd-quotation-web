import {
    GET_QUOTATION_CUSTOMER_ID,
    GET_QUOTATION_CUSTOMER_ID_CLEAR,
    GET_QUOTATION_CUSTOMER_ID_SUCCESS,
    GET_QUOTATION_CUSTOMER_ID_FAIL,
    GET_QUOTATION_PRODUCT_ID,
    GET_QUOTATION_PRODUCT_ID_CLEAR,
    GET_QUOTATION_PRODUCT_ID_SUCCESS,
    GET_QUOTATION_PRODUCT_ID_FAIL,
    GET_QUOTATION_PRODUCT_ADD,
    GET_QUOTATION_PRODUCT_ADD_SUCCESS,
    GET_QUOTATION_PRODUCT_ADD_CLEAR,
    GET_QUOTATION_PRODUCT_ADD_FAIL,
    POST_QUOTATION,
    POST_QUOTATION_SUCCESS,
    POST_QUOTATION_CLEAR,
    POST_QUOTATION_FAIL,
    GET_QUOTATION_ID,
    GET_QUOTATION_ID_SUCCESS,
    GET_QUOTATION_ID_FAIL,
    GET_QUOTATION,
    GET_QUOTATION_SUCCESS,
    GET_QUOTATION_FAIL
} from "./actionTypes"

const initialState = {
    quotationData: [],
    quotationDataId: [],
    quotationCustomerDataId: [],
    quotationProductDataId: [],
    quotationSelectProductData: [],
    successQuotation: "",
    success: "",
    errorQuotation: "",
    error: "",
    loadingQuotation: false,
    loading: false,
}

const quotations = (state = initialState, action) => {
    switch (action.type) {

        case GET_QUOTATION:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_QUOTATION_SUCCESS:
            state = {
                ...state,
                loading: false,
                quotationData: action.payload
            }
            break
        case GET_QUOTATION_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break

        case GET_QUOTATION_ID:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_QUOTATION_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                quotationDataId: action.payload
            }
            break
        case GET_QUOTATION_ID_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break

        case POST_QUOTATION:
            state = {
                ...state,
                loadingQuotation: true,
            }
            break
        case POST_QUOTATION_SUCCESS:
            state = {
                ...state,
                loadingQuotation: false,
                errorQuotation: "",
                successQuotation: action.payload,
            }
            break
        case POST_QUOTATION_CLEAR:
            state = {
                ...state,
                loadingQuotation: false,
                errorQuotation: "",
                successQuotation: "",
            }
            break
        case POST_QUOTATION_FAIL:
            state = {
                ...state,
                loadingQuotation: false,
                errorQuotation: action.payload,
                successQuotation: "",
            }
            break

        case GET_QUOTATION_PRODUCT_ADD:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_QUOTATION_PRODUCT_ADD_CLEAR:
            state = {
                ...state,
                loading: false,
                quotationSelectProductData: []
            }
            break
        case GET_QUOTATION_PRODUCT_ADD_SUCCESS:
            state = {
                ...state,
                loading: false,
                quotationSelectProductData: action.payload
            }
            break
        case GET_QUOTATION_PRODUCT_ADD_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break

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