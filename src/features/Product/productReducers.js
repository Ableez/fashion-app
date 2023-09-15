import { combineReducers } from "redux";
import ProductsSlice from "./ProductsSlice";
import popularProductSlice from "./popularProductSlice";

const productReducers = combineReducers({
  shopProducts: ProductsSlice,
  popularProducts: popularProductSlice,
});

export default productReducers;
