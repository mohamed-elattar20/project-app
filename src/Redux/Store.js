import { configureStore } from '@reduxjs/toolkit'
import products from "./Slices/ProductsSlice"
import cart from "./Slices/cart"
export const store = configureStore({
    reducer: {
        products,
        cart,

    },
})

