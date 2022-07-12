import { combineReducers } from 'redux';
import DestinationReducer from './DestinationReducer';

export default combineReducers({
    destination: DestinationReducer,
});