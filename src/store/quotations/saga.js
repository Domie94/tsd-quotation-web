import { call, put, takeEvery } from "redux-saga/effects";

// Redux States
import { 
    GET_QUOTATION_CUSTOMER_ID 
} from "./actionTypes";
import { 
    getQuotationCustomerIdSuccess,
    getQuotationCustomerIdFail 
} from "./action";

import { 
    getCustomerIdApi 
} from "../../helpers/helper"; 

function* fetchCustomerId({ payload: id }) {
    try {
        const response = yield call(getCustomerIdApi, id);
        yield put(getQuotationCustomerIdSuccess(response));
    } catch (error) {
        yield put(getQuotationCustomerIdFail(error));
    }
}
 
function* quotationCustomerSaga() {
    yield takeEvery(GET_QUOTATION_CUSTOMER_ID, fetchCustomerId);
}

export default quotationCustomerSaga;