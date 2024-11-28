import { call, put, takeEvery } from "redux-saga/effects";

// Redux States
import {
    GET_CUSTOMER
} from "./actionTypes";
import { 
    getCustomerSuccess,
    getCustomerFail
} from "./action";

import {
    getCustomerApi
} from "../../helpers/helper";
 
function* fetchCustomer() {
    try {
        const response = yield call(getCustomerApi);
        yield put(getCustomerSuccess(response));
    } catch (error) {
        yield put(getCustomerFail(error));
    }
}

function* customerSaga() {
    yield takeEvery(GET_CUSTOMER, fetchCustomer);
}

export default customerSaga;