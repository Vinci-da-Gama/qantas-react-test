import axios from 'axios';
import { FETCH_CARS } from '../types';
import { handleError } from '../helpers/error-handler';

const url = 'http://localhost:3000/cars';

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

export const searchByBrand = (brand) => {
	return (dispatch) => {
		return axios.get(`${url}?brand=${brand}`)
		.then((resp) => {
			dispatch(grabCars(resp.data));
		})
		.catch((err) => {
			handleError(err);
		});
	};
};
