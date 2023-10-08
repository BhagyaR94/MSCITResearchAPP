import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../../business/event/slice/eventSlice';
import authReducer from '../slice/authSlice';
import destinationReducer from '../../business/destination/slice/destinationSlice';
import categoryReducer from  '../../business/category/slice/categorySlice';
import tourPreferenceReducer from '../../business/tour_preference/slice/tourPreferenceSlice';
import homeReducer from '../../business/home/slice/homeSlice';

export default configureStore({
    reducer: {
        eventReducer: eventReducer,
        authReducer: authReducer,
        destinationReducer: destinationReducer,
        categoryReducer: categoryReducer,
        tourPreferenceReducer:tourPreferenceReducer,
        homeReducer:homeReducer,
    },
});