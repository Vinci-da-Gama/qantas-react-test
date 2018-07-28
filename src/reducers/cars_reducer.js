import { FETCH_CARS } from '../types';

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