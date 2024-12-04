import { call, put, takeEvery } from "redux-saga/effects";

// Redux States
import {
    LOGIN
} from "./actionTypes";
import {
    loginSuccess,
    loginFail
} from "./action";

import {
    getCompanyIdApi,
    loginApi
} from "../../helpers/helper";
import { getCompanyIdSuccess } from "../company/action";

function* loginUser({ payload: { data } }) {
    try {
        const response = yield call(loginApi, data);
        localStorage.setItem("id", response.id);
        localStorage.setItem("role", response.role);
        localStorage.setItem("company_id", response.company_id);
        localStorage.setItem("token", response.token);
        yield put(loginSuccess(response));
        const responseCompany = yield call(getCompanyIdApi, response.company_id);
        yield put(getCompanyIdSuccess(responseCompany));
        yield put(loginFail(""));
        window.location.href = "/dashboard";
    } catch (error) {
        yield put(loginFail("Username or Password is Incorrect"));
    }
}

function* loginSaga() {
    yield takeEvery(LOGIN, loginUser);
}

export default loginSaga;