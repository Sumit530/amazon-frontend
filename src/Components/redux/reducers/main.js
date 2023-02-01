import { getProductsReducers} from "./Productreducers";
import { getUsersReducers } from "./Userreducers";


import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducers,
    getusersdata:getUsersReducers
});

export default rootreducers;