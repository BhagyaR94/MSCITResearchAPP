import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../../business/event/slice/eventSlice'

export default configureStore({
    reducer: {
        eventReducer: eventReducer
    },
});