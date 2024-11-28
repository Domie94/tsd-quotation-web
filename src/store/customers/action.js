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

export const deleteCustomer = (id) => {
    return {
        type: DELETE_CUSTOMER,
        payload: id,
    }
}
export const deleteCustomerSuccess = data => {
    return {
        type: DELETE_CUSTOMER_SUCCESS,
        payload: data,
    }
}
export const deleteCustomerClearSuccess = () => {
    return {
        type: DELETE_CUSTOMER_CLEAR_SUCCESS,
    }
}
export const deleteCustomerFail = error => {
    return {
        type: DELETE_CUSTOMER_FAIL,
        payload: error,
    }
}

export const updateCustomer = (id, data) => {
    return {
        type: UPDATE_CUSTOMER,
        payload: { id, data },
    }
}
export const updateCustomerSuccess = data => {
    return {
        type: UPDATE_CUSTOMER_SUCCESS,
        payload: data,
    }
}
export const updateCustomerClearSuccess = () => {
    return {
        type: UPDATE_CUSTOMER_CLEAR_SUCCESS,
    }
}
export const updateCustomerFail = error => {
    return {
        type: UPDATE_CUSTOMER_FAIL,
        payload: error,
    }
}

export const getCustomerId = (id) => {
    return {
        type: GET_CUSTOMER_ID,
        payload: id,
    }
}
export const getCustomerIdSuccess = data => {
    return {
        type: GET_CUSTOMER_ID_SUCCESS,
        payload: data,
    }
}
export const getCustomerIdFail = error => {
    return {
        type: GET_CUSTOMER_ID_FAIL,
        payload: error,
    }
}

export const createCustomer = (data) => {
    return {
        type: CREATE_CUSTOMER,
        payload: { data },
    }
}
export const createCustomerSuccess = data => {
    return {
        type: CREATE_CUSTOMER_SUCCESS,
        payload: data,
    }
}
export const createCustomerClearSuccess = () => {
    return {
        type: CREATE_CUSTOMER_CLEAR_SUCCESS,
    }
}
export const createCustomerFail = error => {
    return {
        type: CREATE_CUSTOMER_FAIL,
        payload: error,
    }
}

export const getCustomer = () => {
    return {
        type: GET_CUSTOMER
    }
}
export const getCustomerSuccess = data => {
    return {
        type: GET_CUSTOMER_SUCCESS,
        payload: data,
    }
}
export const getCustomerFail = error => {
    return {
        type: GET_CUSTOMER_FAIL,
        payload: error,
    }
}



