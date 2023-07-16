import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//     value: number
// }

const initialState = {
    cart: 0,
    arrOfProducts: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) => {
            localStorage.setItem("cartCount", state.cart += 1)
            localStorage.setItem("arrOfProducts", state.arrOfProducts.push(action.payload))
        },
        decrement: (state, action) => {
            localStorage.setItem("cartCount", state.cart -= 1)
            localStorage.setItem("arrOfProducts", state.arrOfProducts.pop(action.payload))

        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer