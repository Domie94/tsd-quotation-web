import { combineReducers } from "redux";
// login
import login from "./login/reducer";
// company
import companies from "./company/reducer";
// customers
import customers from "./customers/reducer";
// products
import products from "./products/reducer";
// quotations
import quotations from "./quotations/reducer";

const rootReducer = combineReducers({
    login,
    companies,
    customers,
    products,
    quotations
});

export default rootReducer;