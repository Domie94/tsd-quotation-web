import { all, fork } from "redux-saga/effects";
 
// customers
import userSaga from "./customers/saga";  

export default function* rootSaga() {
  yield all([ 
    fork(userSaga), 
  ]);
}