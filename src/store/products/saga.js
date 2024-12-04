import { call, put, takeEvery } from "redux-saga/effects";

// Redux States
import {
    GET_PRODUCT,
    CREATE_PRODUCT,
    GET_PRODUCT_ID,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from "./actionTypes";
import {
    getProductSuccess,
    getProductFail,
    createProductSuccess,
    createProductFail,
    getProductIdSuccess,
    getProductIdFail,
    updateProductSuccess,
    updateProductFail,
    deleteProductSuccess,
    deleteProductFail
} from "./action";

import {
    getProductApi,
    createProductApi,
    getProductIdApi,
    updateProductApi,
    deleteProductApi
} from "../../helpers/helper";

function* fetchProduct({ payload: page }) {
    try {
        const response = yield call(getProductApi, page);
        yield put(getProductSuccess(response));
    } catch (error) {
        yield put(getProductFail(error));
    }
}

function* fetchProductId({ payload: id }) {
    try {
        const response = yield call(getProductIdApi, id);
        yield put(getProductIdSuccess(response));
    } catch (error) {
        yield put(getProductIdFail(error));
    }
}

function* createProduct({ payload: { data } }) {
    try {
        const response = yield call(createProductApi, data);
        yield put(createProductSuccess(response));
        if (Number(localStorage.getItem('current')) === 3) {
            localStorage.setItem('path', "");
            window.location.href = "/products";
        } else {
            localStorage.setItem("path", "Select Product");
            window.location.href = "/quotations/select/product";
        }
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(createProductFail(error));
    }
}

function* updateProduct({ payload: { id, data } }) {
    try {
        const response = yield call(updateProductApi, id, data); 
        yield put(updateProductSuccess(response));
        if (Number(localStorage.getItem('current')) === 3) {
            localStorage.setItem('path', "");
            window.location.href = "/products";
        } else {
            localStorage.setItem("path", "Select Product");
            window.location.href = "/quotations/select/product";
        }
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(updateProductFail(error));
    }
}

function* deleteProduct({ payload: id }) {
    try {
        const response = yield call(deleteProductApi, id); 
        yield put(deleteProductSuccess(response)); 
        if (Number(localStorage.getItem('current')) === 3) {
            localStorage.setItem('path', "");
            window.location.href = "/products";
        } else {
            localStorage.setItem("path", "Select Product");
            window.location.href = "/quotations/select/product";
        }
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(deleteProductFail(error));
    }
}

function* productSaga() {
    yield takeEvery(GET_PRODUCT, fetchProduct);
    yield takeEvery(GET_PRODUCT_ID, fetchProductId);
    yield takeEvery(CREATE_PRODUCT, createProduct);
    yield takeEvery(UPDATE_PRODUCT, updateProduct);
    yield takeEvery(DELETE_PRODUCT, deleteProduct);
}

export default productSaga;