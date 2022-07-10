import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../../business/event/slice/eventSlice'
import authReducer from '../slice/authSlice'
import destinationReducer from '../../business/destination/slice/destinationSlice';

export default configureStore({
    reducer: {
        eventReducer: eventReducer,
        authReducer: authReducer,
        destinationReducer: destinationReducer
    },
});