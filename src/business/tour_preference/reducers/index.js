import { combineReducers } from 'redux';
import PreferenceReducer from './PreferenceReducer';

export default combineReducers({
    preference: PreferenceReducer,
});