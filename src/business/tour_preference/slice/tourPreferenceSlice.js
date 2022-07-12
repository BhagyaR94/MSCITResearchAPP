import { createSlice } from '@reduxjs/toolkit';

export const tourPreferenceSlice = createSlice({
    name: 'tourPreference',
    initialState: {
        tourBudget: 0,
        tourDuration: 0,
    },
    reducers: {
        setTourBudget: (state, action) => {
            state.tourBudget = action.payload
        },
        setTourDuration: (state, action) => {
            state.tourDuration = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setTourBudget, setTourDuration } = tourPreferenceSlice.actions

export default tourPreferenceSlice.reducer