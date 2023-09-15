import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../features/Product/ProductsSlice";
import reducers from "../features/reducers";

export const store = configureStore({
  reducer: reducers,
});