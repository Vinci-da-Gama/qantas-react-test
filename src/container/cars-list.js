import React from 'react';
import SingleCar from '../component/single-car';

export default ({ cars }) => (
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