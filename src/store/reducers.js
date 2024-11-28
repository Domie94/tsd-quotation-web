import { combineReducers } from "redux";
 
// customers
import customers from "./customers/reducer";  

const rootReducer = combineReducers({
    customers 
});

export default rootReducer;