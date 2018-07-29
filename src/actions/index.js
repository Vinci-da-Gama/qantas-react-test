import axios from 'axios';
import { FETCH_CARS, CATCH_ERROR } from '../types';
import { handleError, handleNoData } from '../helpers/error-handler';

const url = 'http://localhost:3000/cars';

const grabCars = (cars) => {
	return {
		type: FETCH_CARS,
		cars
	};
};

/* const catchError = (err) => {
	return {
		type: CATCH_ERROR,
		err
	};
}; */

// error url: 'http://localhost:3000/cars?brand=brand3&color=blue&drive=null'
export const fetchAllCars = () => {
	return (dispatch) => {
		return axios.get(url)
			.then((resp) => {
				// console.log('18 -- ', resp.data, typeof resp.data);
				/* if (resp.data.length > 0) {
					dispatch(grabCars(resp.data));
				} else {
					handleNoData(dispatch, catchError);
				} */
				dispatch(grabCars(resp.data));
			})
			.catch((err) => {
				handleError(err);
			});
	};
};

// http://localhost:3000/cars?brand=brand3&color=blue&drive=awd

export const searchByFeatures = (brand, color, drive) => {
	return (dispatch) => {
		return axios.get(`${url}?brand=${brand}&color=${color}&drive=${drive}`)
		.then((resp) => {
			console.log('32 -- ', resp.data, typeof resp.data);
			dispatch(grabCars(resp.data));
		})
		.catch((err) => {
			handleError(err);
		});
	};
};
