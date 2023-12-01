import { createSlice } from "@reduxjs/toolkit";

// const getLocalCartData=()=>{
//     if (typeof window !== 'undefined') {
//         let localCartData = localStorage.getItem("favoriteProduct");
//         if (localCartData == []) {
//             return [];
//         }else{
//             return JSON.parse(localCartData);
//         }
//     }
// };

export const cartSlice = createSlice({
    
    name: "cart",

    initialState: {
        cart: [],
        isLodding: false,
        isError: null,
        // cart: getLocalCartData() == null ? []: getLocalCartData(),
    },

    reducers: {
        getCartProductStart: (state) => {
            state.isLodding = true;
        },

        resetCart: (state) => {
            state.isLodding = false;
            state.cart = [];
        },

        getCart: (state, action) => {
            state.isLodding = false;
            state.cart = [...state.cart, action.payload];
        },

        getCartProductError: (state, action) => {
            state.isError = action.payload;
            state.isLodding = false;
        },
        
        removeItem: (state, action) => {
            const removeCartItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeCartItem;

            // const favoriteProduct = JSON.parse(localStorage.getItem("favoriteProduct") || "[]");
            // const removeCart = favoriteProduct.filter((item)=> item.id !== action.payload);
            // localStorage.setItem("favoriteProduct", JSON.stringify(removeCart));
        }
        
    }
});

export const { getCart, removeItem, getCartProductStart, getCartProductError, resetCart } = cartSlice.actions;
export default cartSlice.reducer;

