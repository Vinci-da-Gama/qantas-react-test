import { FETCH_CARS, SEARCH_CARS_BY_BRAND, SEARCH_CARS_BY_COLOR, SEARCH_CARS_BY_ENGINE, SEARCH_CARS_BY_DRIVE } from '../types';

const STATE = {
	cars: []
};

export default (state=STATE, action) => {
	switch(action.type) {
		case FETCH_CARS:
			return {...state, cars: action.cars};
        default:
            return state;
	}
}