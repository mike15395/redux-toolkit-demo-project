import { configureStore } from "@reduxjs/toolkit";

//configure store has both create store and combine reducer
import userReducer from '../features/UserSlice';
import productReducer from '../features/ProductSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        product:productReducer

    }

})