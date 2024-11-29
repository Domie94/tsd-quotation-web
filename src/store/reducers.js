import { combineReducers } from "redux";

// customers
import customers from "./customers/reducer";
// products
import products from "./products/reducer";
// quotations
import quotations from "./quotations/reducer";

const rootReducer = combineReducers({
    customers,
    products,
    quotations
});

export default rootReducer;