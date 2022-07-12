import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'categoryDestination',
    initialState: {
        selectedTravelCategories: [],
    },
    reducers: {
        setselectedTravelCategories: (state, action) => {
            state.selectedTravelCategories = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setselectedTravelCategories } = categorySlice.actions

export default categorySlice.reducer