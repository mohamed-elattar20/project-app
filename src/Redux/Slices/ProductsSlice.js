import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    products: [],
    loading: false,
    error: ""
}

export const getAllProducts = createAsyncThunk("getAllProducts", async (_, thunk) => {
    const { rejectWithValue } = thunk
    try {
        const result = (await axios.get("https://fakestoreapi.com/products")).data
        return result
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // getProducts: (state, action) => {
        //     state.products = action.payload
        // },
    },

    //// GetAllProducts ////
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
            state.error = ""
            // console.log("Loading");
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            // console.log("Fullfilled");

        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

// Action creators are generated for each case reducer function
export const { getProducts } = productsSlice.actions

export default productsSlice.reducer