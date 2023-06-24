import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'users',
    initialState : [],
    reducers : {
        addUser(state,action) {
            state.push(action.payload)
        },
        removeUser(state, action) {},
        clearUsers(state, action) {}
    }
});

// console.log(userSlice.actions)

export default userSlice.reducer;

export const { addUser } = userSlice.actions