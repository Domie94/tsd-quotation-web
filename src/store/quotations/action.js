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

export const getQuotationProductId = (id) => {
    return {
        type: GET_QUOTATION_PRODUCT_ID,
        payload: id,
    }
}
export const getQuotationProductIdClear = () => {
    return {
        type: GET_QUOTATION_PRODUCT_ID_CLEAR
    }
}
export const getQuotationProductIdSuccess = data => {
    return {
        type: GET_QUOTATION_PRODUCT_ID_SUCCESS,
        payload: data,
    }
}
export const getQuotationProductIdFail = error => {
    return {
        type: GET_QUOTATION_PRODUCT_ID_FAIL,
        payload: error,
    }
}

export const getQuotationCustomerId = (id) => {
    return {
        type: GET_QUOTATION_CUSTOMER_ID,
        payload: id,
    }
}
export const getQuotationCustomerIdClear = () => {
    return {
        type: GET_QUOTATION_CUSTOMER_ID_CLEAR
    }
}
export const getQuotationCustomerIdSuccess = data => {
    return {
        type: GET_QUOTATION_CUSTOMER_ID_SUCCESS,
        payload: data,
    }
}
export const getQuotationCustomerIdFail = error => {
    return {
        type: GET_QUOTATION_CUSTOMER_ID_FAIL,
        payload: error,
    }
}
