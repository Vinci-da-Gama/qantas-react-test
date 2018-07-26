import { combineReducers } from 'redux';
import CarsReducer        from './cars_reducer';

const rootReduxer = combineReducers({
    books: CarsReducer
});

export default rootReduxer;
