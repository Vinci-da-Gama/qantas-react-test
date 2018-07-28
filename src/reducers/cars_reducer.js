import { FETCH_CARS, SEARCH_CARS } from '../actions/types';

const STATE = {
	cars: []
};

export default (state=STATE, action) => {
	switch(action.type) {
		case FETCH_CARS:
			console.log('10 -- payload ( cars_reducers ): ', action.cars);
			return {...state, cars: action.cars};
        default:
            return state;
	}
}