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

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id,
    }
}
export const deleteProductSuccess = data => {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: data,
    }
}
export const deleteProductClearSuccess = () => {
    return {
        type: DELETE_PRODUCT_CLEAR_SUCCESS,
    }
}
export const deleteProductFail = error => {
    return {
        type: DELETE_PRODUCT_FAIL,
        payload: error,
    }
}

export const updateProduct = (id, data) => {
    return {
        type: UPDATE_PRODUCT,
        payload: { id, data },
    }
}
export const updateProductSuccess = data => {
    return {
        type: UPDATE_PRODUCT_SUCCESS,
        payload: data,
    }
}
export const updateProductClearSuccess = () => {
    return {
        type: UPDATE_PRODUCT_CLEAR_SUCCESS,
    }
}
export const updateProductFail = error => {
    return {
        type: UPDATE_PRODUCT_FAIL,
        payload: error,
    }
}

export const getProductId = (id) => {
    return {
        type: GET_PRODUCT_ID,
        payload: id,
    }
}
export const getProductIdSuccess = data => {
    return {
        type: GET_PRODUCT_ID_SUCCESS,
        payload: data,
    }
}
export const getProductIdFail = error => {
    return {
        type: GET_PRODUCT_ID_FAIL,
        payload: error,
    }
}

export const createProduct = (data) => {
    return {
        type: CREATE_PRODUCT,
        payload: { data },
    }
}
export const createProductSuccess = data => {
    return {
        type: CREATE_PRODUCT_SUCCESS,
        payload: data,
    }
}
export const createProductClearSuccess = () => {
    return {
        type: CREATE_PRODUCT_CLEAR_SUCCESS,
    }
}
export const createProductFail = error => {
    return {
        type: CREATE_PRODUCT_FAIL,
        payload: error,
    }
}

export const getProduct = (page) => {
    return {
        type: GET_PRODUCT,
        payload: page
    }
}
export const getProductSuccess = data => {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: data,
    }
}
export const getProductFail = error => {
    return {
        type: GET_PRODUCT_FAIL,
        payload: error,
    }
}



