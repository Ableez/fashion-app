import { combineReducers } from "redux";
import productReducers from "./Product/productReducers";





const reducers = combineReducers({
    products: productReducers
})



export default reducers