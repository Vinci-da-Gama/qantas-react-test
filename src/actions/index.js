import { FETCH_CARS, SEARCH_CARS } from './types';
import axios from 'axios';
import { handleError } from '../helpers/error-handler'

const url = 'http://localhost:3000/posts/';

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