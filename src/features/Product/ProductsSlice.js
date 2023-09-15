import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../assets/products";

const productsSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {},
});



export default productsSlice.reducer