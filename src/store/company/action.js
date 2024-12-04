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

export const deleteCompany = (id) => {
    return {
        type: DELETE_COMPANY,
        payload: id,
    }
}
export const deleteCompanySuccess = data => {
    return {
        type: DELETE_COMPANY_SUCCESS,
        payload: data,
    }
}
export const deleteCompanyClearSuccess = () => {
    return {
        type: DELETE_COMPANY_CLEAR_SUCCESS,
    }
}
export const deleteCompanyFail = error => {
    return {
        type: DELETE_COMPANY_FAIL,
        payload: error,
    }
}

export const updateCompany = (id, data) => {
    return {
        type: UPDATE_COMPANY,
        payload: { id, data },
    }
}
export const updateCompanySuccess = data => {
    return {
        type: UPDATE_COMPANY_SUCCESS,
        payload: data,
    }
}
export const updateCompanyClearSuccess = () => {
    return {
        type: UPDATE_COMPANY_CLEAR_SUCCESS,
    }
}
export const updateCompanyFail = error => {
    return {
        type: UPDATE_COMPANY_FAIL,
        payload: error,
    }
}

export const getCompanyId = (id) => {
    return {
        type: GET_COMPANY_ID,
        payload: id,
    }
}
export const getCompanyIdSuccess = data => {
    return {
        type: GET_COMPANY_ID_SUCCESS,
        payload: data,
    }
}
export const getCompanyIdFail = error => {
    return {
        type: GET_COMPANY_ID_FAIL,
        payload: error,
    }
}

export const createCompany = (data) => {
    return {
        type: CREATE_COMPANY,
        payload: { data },
    }
}
export const createCompanySuccess = data => {
    return {
        type: CREATE_COMPANY_SUCCESS,
        payload: data,
    }
}
export const createCompanyClearSuccess = () => {
    return {
        type: CREATE_COMPANY_CLEAR_SUCCESS,
    }
}
export const createCompanyFail = error => {
    return {
        type: CREATE_COMPANY_FAIL,
        payload: error,
    }
}

export const getCompany = (page) => {
    return {
        type: GET_COMPANY,
        payload: page
    }
}
export const getCompanySuccess = data => {
    return {
        type: GET_COMPANY_SUCCESS,
        payload: data,
    }
}
export const getCompanyFail = error => {
    return {
        type: GET_COMPANY_FAIL,
        payload: error,
    }
}



