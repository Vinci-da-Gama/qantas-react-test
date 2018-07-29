import { FETCH_CARS, CATCH_ERROR } from '../types';

const STATE = {
	cars: []
};

export default (state=STATE, action) => {
	switch(action.type) {
		case FETCH_CARS:
			return {...state, cars: action.cars};
		case CATCH_ERROR:
			return action.err
        default:
            return state;
	}
}