import { combineReducers } from 'redux';
import CarsReducer from './cars_reducer';

const rootReduxer = combineReducers({
    cars: CarsReducer
});

export default rootReduxer;
