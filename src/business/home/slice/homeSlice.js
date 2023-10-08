import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        // selectedTravelCategories: [],
    },
    reducers: {
        // setselectedTravelCategories: (state, action) => {
        //     state.selectedTravelCategories = action.payload
        // }
    },
})

// Action creators are generated for each case reducer function
// export const { setselectedTravelCategories } = categorySlice.actions

export default homeSlice.reducer