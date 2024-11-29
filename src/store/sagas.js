import { all, fork } from "redux-saga/effects";
 
// customers
import customerSaga from "./customers/saga";  
// products
import productsSaga from "./products/saga";
// quotations
import quotationsSaga from "./quotations/saga";

export default function* rootSaga() {
  yield all([ 
    fork(customerSaga), 
    fork(productsSaga),
    fork(quotationsSaga)
  ]);
}