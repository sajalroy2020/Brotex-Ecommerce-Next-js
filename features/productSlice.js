import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",

    initialState: {
        products: [],
        filterAllProducts: [],
        isLodding: false,
        isError: null,
    },

    reducers: {
        getProductStart: (state) => {
            state.isLodding = true;
        },
        getProductSuccess: (state, action) => {
            state.isLodding = false;
            state.products = action.payload;
        },
        getProductError: (state, action) => {
            state.isError = action.payload;
            state.isLodding = false;
        },

        filterCategoryProduct: (state, action) => {
            const getProduct = state.products.filter((item) => item.category_id == action.payload);
            state.filterAllProducts = getProduct;
        }
    }
});

export const { getProductStart, getProductSuccess, getProductError, filterCategoryProduct } = productsSlice.actions;
export default productsSlice.reducer;