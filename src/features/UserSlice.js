import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUsers: (state, action)=>{
            state = [...state, action.payload]
            return state;
        }
    }
});

export const { addUsers } = userSlice.actions; 


export const selectUser = (state) => state.user;

export default userSlice.reducer;
