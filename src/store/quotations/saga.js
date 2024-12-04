import { call, put, takeEvery } from "redux-saga/effects";

// Redux States
import {
    GET_QUOTATION_CUSTOMER_ID,
    GET_QUOTATION_PRODUCT_ID,
    GET_QUOTATION_PRODUCT_ADD,
    POST_QUOTATION,
    GET_QUOTATION_ID,
    GET_QUOTATION
} from "./actionTypes";
import {
    getQuotationCustomerIdSuccess,
    getQuotationCustomerIdFail,
    getQuotationProductIdSuccess,
    getQuotationProductIdFail,
    addSelectProductSuccess,
    addSelectProductFail,
    postQuotationSuccess,
    postQuotationFail, 
    getQuotationIdSuccess,
    getQuotationIdFail,
    getQuotationSuccess,
    getQuotationFail
} from "./action";

import {
    getCustomerIdApi,
    getProductIdApi,
    createQuotationApi,
    getQuotationIdApi,
    getQuotationApi
} from "../../helpers/helper";

function* fetchQuotation({ payload: page }) {
    try {
        const response = yield call(getQuotationApi, page);
        yield put(getQuotationSuccess(response));
    } catch (error) {
        yield put(getQuotationFail(error));
    }
}

function* fetchCustomerId({ payload: id }) {
    try {
        const response = yield call(getCustomerIdApi, id);
        yield put(getQuotationCustomerIdSuccess(response));
    } catch (error) {
        yield put(getQuotationCustomerIdFail(error));
    }
}

function* fetchProductId({ payload: id }) {
    try {
        const response = yield call(getProductIdApi, id);
        yield put(getQuotationProductIdSuccess(response));
    } catch (error) {
        yield put(getQuotationProductIdFail(error));
    }
}

function* AddProduct({ payload: { data } }) {
    try {
        yield put(addSelectProductSuccess(data));
    } catch (error) {
        yield put(addSelectProductFail(error));
    }
}

function* createQuotation({ payload: { data } }) {
    try { 
        const response = yield call(createQuotationApi, data);
        yield put(postQuotationSuccess(response));
        localStorage.setItem('path', "Print");
        window.location.href = "/quotation/report/" + response.quotation.id;
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(postQuotationFail(error));
    }
}

function* fetchQuotationId({ payload: id }) {
    try {
        const response = yield call(getQuotationIdApi, id);
        yield put(getQuotationIdSuccess(response));
    } catch (error) {
        yield put(getQuotationIdFail(error));
    }
}

function* quotationCustomerSaga() {
    yield takeEvery(GET_QUOTATION_CUSTOMER_ID, fetchCustomerId);
    yield takeEvery(GET_QUOTATION_PRODUCT_ID, fetchProductId);
    yield takeEvery(GET_QUOTATION_PRODUCT_ADD, AddProduct);
    yield takeEvery(POST_QUOTATION, createQuotation);
    yield takeEvery(GET_QUOTATION_ID, fetchQuotationId);
    yield takeEvery(GET_QUOTATION, fetchQuotation);
}

export default quotationCustomerSaga;