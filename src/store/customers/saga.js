import { call, put, takeEvery } from "redux-saga/effects";

// Redux States
import {
    GET_CUSTOMER,
    CREATE_CUSTOMER,
    GET_CUSTOMER_ID,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER
} from "./actionTypes";
import {
    getCustomerSuccess,
    getCustomerFail,
    createCustomerSuccess,
    createCustomerFail,
    getCustomerIdSuccess,
    getCustomerIdFail,
    updateCustomerSuccess,
    updateCustomerFail,
    deleteCustomerSuccess,
    deleteCustomerFail
} from "./action";

import {
    getCustomerApi,
    createCustomerApi,
    getCustomerIdApi,
    updateCustomerApi,
    deleteCustomerApi
} from "../../helpers/helper";

function* fetchCustomer() {
    try {
        const response = yield call(getCustomerApi);
        yield put(getCustomerSuccess(response));
    } catch (error) {
        yield put(getCustomerFail(error));
    }
}

function* fetchCustomerId({ payload: id }) {
    try {
        const response = yield call(getCustomerIdApi, id);
        yield put(getCustomerIdSuccess(response));
    } catch (error) {
        yield put(getCustomerIdFail(error));
    }
}

function* createCustomer({ payload: { data } }) {
    try {
        const response = yield call(createCustomerApi, data);
        localStorage.setItem('path', "");
        yield put(createCustomerSuccess(response));
        window.location.href = "/customers";
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(createCustomerFail(error));
    }
}

function* updateCustomer({ payload: { id, data } }) {
    try {
        const response = yield call(updateCustomerApi, id, data);
        localStorage.setItem('path', "");
        yield put(updateCustomerSuccess(response));
        window.location.href = "/customers";
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(updateCustomerFail(error));
    }
}

function* deleteCustomer({ payload: id }) {
    try {
        const response = yield call(deleteCustomerApi, id);
        localStorage.setItem('path', "");
        yield put(deleteCustomerSuccess(response));
        window.location.href = "/customers";
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(deleteCustomerFail(error));
    }
}

function* customerSaga() {
    yield takeEvery(GET_CUSTOMER, fetchCustomer);
    yield takeEvery(GET_CUSTOMER_ID, fetchCustomerId);
    yield takeEvery(CREATE_CUSTOMER, createCustomer);
    yield takeEvery(UPDATE_CUSTOMER, updateCustomer);
    yield takeEvery(DELETE_CUSTOMER, deleteCustomer);
}

export default customerSaga;