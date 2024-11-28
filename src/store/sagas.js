import { all, fork } from "redux-saga/effects";
 
// User
import userSaga from "./customers/saga";  

export default function* rootSaga() {
  yield all([ 
    fork(userSaga), 
  ]);
}