import axios from 'axios';
import { FETCH_CARS, SEARCH_CARS_BY_BRAND, SEARCH_CARS_BY_COLOR, SEARCH_CARS_BY_ENGINE, SEARCH_CARS_BY_DRIVE } from '../types';
import { handleError } from '../helpers/error-handler';

const url = 'http://localhost:3000/cars/';

const grabCars = (cars) => {
	return {
		type: FETCH_CARS,
		cars
	};
};

export const fetchAllCars = () => {
	return (dispatch) => {
		return axios.get(url)
			.then((resp) => {
				dispatch(grabCars(resp.data));
			})
			.catch((err) => {
				handleError(err);
			});
	};
};


