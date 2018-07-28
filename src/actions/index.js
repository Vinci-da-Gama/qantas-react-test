import { FETCH_CARS, SEARCH_CARS } from './types';
import axios from 'axios';

const url = 'http://localhost:3000/posts/';

const grabCars = (cars) => {
	console.log('7 -- ', cars);
	return {
		type: FETCH_CARS,
		cars
	};
};

export const fetchAllCars = () => {
	return (dispatch) => {
		return axios.get(url)
			.then((resp) => {
				console.log('18 -- (action index) ', resp);
				dispatch(grabCars(resp.data));
			})
			.catch((err) => {
				throw err;
			});
	};
};




/* const gerRequest = () => {
	const url = 'http://localhost:3000/posts/';
	return request(url, function (err, res, body) {
		if (err) {
			return err;
		} else {
			return body;
		}
	});
}

export const grabCars = () => {
	return {
		type: FETCH_CARS,
		payload: gerRequest()
	};
}

export const searchCars = () => {
	return {
		type: SEARCH_CARS,
		payload: 'hello world'
	};
} */