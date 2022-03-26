import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProducts: (state, action) => {
            state = [...state, action.payload];
            return state;
        }
    }
});

export const { addProducts } = productSlice.actions;
export const selectProduct = (state) => state.product;
export default productSlice.reducer;