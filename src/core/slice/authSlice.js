import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: '',
        refreshToken: '',
        userName: '',
        userLevel: ''
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setUserLevel: (state, action) => {
            state.userLevel = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAccessToken, setRefreshToken, setUserName, setUserLevel } = authSlice.actions

export default authSlice.reducer