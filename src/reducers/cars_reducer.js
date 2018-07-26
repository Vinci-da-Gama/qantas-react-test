import { GET_CARS } from '../actions';
import { SEARCH_CARS } from '../actions';

const STATE = {
	cars: []
};

export default (state=STATE, action) => {
	switch(action.type) {
		case GET_CARS:
			console.log('11 -- payload: ', action.payload);
			return {...state, cars: action.payload};
		case SEARCH_CARS:
			return state;
        default:
            return state;
	}
}