import request from 'request';

export const GET_CARS = 'GET_CARS';
export const SEARCH_CARS = 'SEARCH_CARS';

const gerRequest = () => {
	const url = 'http://localhost:3000/posts/';
	let req = request.get(url);
	console.log('9 -- req: ', req);
	return req;
}

export const grabCars = () => {
	return {
		type: GET_CARS,
		payload: gerRequest()
	};
}

export const searchCars = () => {
	return {
		type: SEARCH_CARS,
		payload: 'hello world'
	};
}