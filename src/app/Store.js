import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../../features/CartSlice";
import productsReducer from "../../features/productSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    products: productsReducer,
  }
});

export default store;
