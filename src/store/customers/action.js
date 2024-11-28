import { 
    GET_CUSTOMER,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAIL
} from "./actionTypes"
 
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

