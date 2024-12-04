import { all, fork } from "redux-saga/effects";
// login
import loginSaga from "./login/saga";
// company
import companySaga from "./company/saga";
// customers
import customerSaga from "./customers/saga";
// products
import productsSaga from "./products/saga";
// quotations
import quotationsSaga from "./quotations/saga";

export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(companySaga),
    fork(customerSaga),
    fork(productsSaga),
    fork(quotationsSaga)
  ]);
}