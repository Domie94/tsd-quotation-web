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

export const getQuotation = (page) => {
    return {
        type: GET_QUOTATION,
        payload: page
    }
}
export const getQuotationSuccess = data => {
    return {
        type: GET_QUOTATION_SUCCESS,
        payload: data,
    }
}
export const getQuotationFail = error => {
    return {
        type: GET_QUOTATION_FAIL,
        payload: error,
    }
}

export const getQuotationId = (id) => {
    return {
        type: GET_QUOTATION_ID,
        payload: id,
    }
}
export const getQuotationIdSuccess = data => {
    return {
        type: GET_QUOTATION_ID_SUCCESS,
        payload: data,
    }
}
export const getQuotationIdFail = error => {
    return {
        type: GET_QUOTATION_ID_FAIL,
        payload: error,
    }
}

export const postQuotation = (data) => {
    return {
        type: POST_QUOTATION,
        payload: { data },
    }
}
export const postQuotationSuccess = (data) => {
    return {
        type: POST_QUOTATION_SUCCESS,
        payload: { data },
    }
}
export const postQuotationClearSuccess = () => {
    return {
        type: POST_QUOTATION_CLEAR,
    }
}
export const postQuotationFail = error => {
    return {
        type: POST_QUOTATION_FAIL,
        payload: error,
    }
}

export const addSelectProduct = (data) => {
    return {
        type: GET_QUOTATION_PRODUCT_ADD,
        payload: { data },
    }
}
export const addSelectProductSuccess = (data) => {
    return {
        type: GET_QUOTATION_PRODUCT_ADD_SUCCESS,
        payload: { data },
    }
}
export const addSelectProductClearSuccess = () => {
    return {
        type: GET_QUOTATION_PRODUCT_ADD_CLEAR,
    }
}
export const addSelectProductFail = error => {
    return {
        type: GET_QUOTATION_PRODUCT_ADD_FAIL,
        payload: error,
    }
}

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
