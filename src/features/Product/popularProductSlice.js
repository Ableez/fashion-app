import { createSlice } from "@reduxjs/toolkit";
import { popularProducts } from "../../assets/PopularProducts";





const popularProductsSlice = createSlice({
    initialState: popularProducts,
    name: "popularProducts",
    reducers: {}
})


export default popularProductsSlice.reducer