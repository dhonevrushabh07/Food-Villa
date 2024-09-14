import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

// configureStore will contains slices
const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store; 