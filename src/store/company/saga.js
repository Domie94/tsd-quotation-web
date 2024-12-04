import { call, put, takeEvery } from "redux-saga/effects";

// Redux States
import {
    GET_COMPANY,
    CREATE_COMPANY,
    GET_COMPANY_ID,
    UPDATE_COMPANY,
    DELETE_COMPANY
} from "./actionTypes";
import {
    getCompanySuccess,
    getCompanyFail,
    createCompanySuccess,
    createCompanyFail,
    getCompanyIdSuccess,
    getCompanyIdFail,
    updateCompanySuccess,
    updateCompanyFail,
    deleteCompanySuccess,
    deleteCompanyFail
} from "./action";

import {
    getCompanyApi,
    createCompanyApi,
    getCompanyIdApi,
    updateCompanyApi,
    deleteCompanyApi
} from "../../helpers/helper";

function* fetchCompany({ payload: page }) {
    try {
        const response = yield call(getCompanyApi, page);
        yield put(getCompanySuccess(response));
    } catch (error) {
        yield put(getCompanyFail(error));
    }
}

function* fetchCompanyId({ payload: id }) {
    try {
        const response = yield call(getCompanyIdApi, id);
        yield put(getCompanyIdSuccess(response));
    } catch (error) {
        yield put(getCompanyIdFail(error));
    }
}

function* createCompany({ payload: { data } }) {
    try {
        const response = yield call(createCompanyApi, data);
        yield put(createCompanySuccess(response));
        localStorage.setItem('path', "");
        window.location.href = "/company";
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(createCompanyFail(error));
    }
}

function* updateCompany({ payload: { id, data } }) {
    try {
        const response = yield call(updateCompanyApi, id, data);
        yield put(updateCompanySuccess(response));
        localStorage.setItem('path', "");
        window.location.href = "/company";
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(updateCompanyFail(error));
    }
}

function* deleteCompany({ payload: id }) {
    try {
        const response = yield call(deleteCompanyApi, id);
        yield put(deleteCompanySuccess(response));
        localStorage.setItem('path', "");
        window.location.href = "/company";
    } catch (error) {
        localStorage.setItem('path', "");
        yield put(deleteCompanyFail(error));
    }
}

function* companySaga() {
    yield takeEvery(GET_COMPANY, fetchCompany);
    yield takeEvery(GET_COMPANY_ID, fetchCompanyId);
    yield takeEvery(CREATE_COMPANY, createCompany);
    yield takeEvery(UPDATE_COMPANY, updateCompany);
    yield takeEvery(DELETE_COMPANY, deleteCompany);
}

export default companySaga;