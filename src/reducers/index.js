import { combineReducers } from 'redux';
import cars from './cars_reducer';

const rootReduxer = combineReducers({
    cars
});

export default rootReduxer;
