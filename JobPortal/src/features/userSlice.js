import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    username : null,
    userProfilePic : null,
    email : null,
    isLoggedIn : false,
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.user = action.payload.user;
            state.username = action.payload.username;
            state.userProfilePic = action.payload.userProfilePic;
            state.email = action.payload.email;
            state.isLoggedIn = true;
            },
            logoutSuccess(state, action) {
                state.user = null;
                state.username = null;
                state.userProfilePic = null;
                state.email = null;
                state.isLoggedIn = false;
                },


                

    }
})

export const {loginSuccess , logoutSuccess} = userSlice.actions
export const authReducer = userSlice.reducer;

