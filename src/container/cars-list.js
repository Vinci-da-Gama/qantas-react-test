import React from 'react';
import { connect } from 'react-redux';
import SingleCar from '../component/single-car';
import Spinner from '../component/spinner';

const CarsList = ({ cars }) => {
	if (!cars.length) {
		return (
			<Spinner />
		);
	}
	return (
		<div className="container">
			<div className="row">
				{cars.map((car) => (
					<div className="col-12 col-md-4 col-lg-3" key={car.id}>
						<SingleCar car={car} />
					</div>
				))}
			</div>
		</div>
	);
};

// modify...
const mapStateToProps = (cars) => {
	console.log('22 -- ', cars.cars.cars);
	return {
		cars: cars.cars.cars
	};
};

export default connect(mapStateToProps, null)(CarsList);