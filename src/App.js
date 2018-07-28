import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.png';
import './App.css';
import CarsList from './container/cars-list';
import Spinner from './component/spinner';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedBrand:'',
			selectedCars: []
		};
	}

	onSelected(val) {
		console.log('18 -- ', val);
	}
	
  	render() {
		if (!this.props.cars.length || !this.props.cars) {
			return (
				<Spinner />
			);
		}
		return (
			<div className="container-fluid px-0">
				<header>
					<div className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand">
							<img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
							Qantas
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					
						<div className="collapse navbar-collapse" id="collapseNavbar">
							<form className="form-inline my-2 my-lg-0">
								<label className="mr-sm-2" htmlFor="carBrand">Brand</label>
								<select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="carBrand" onChange={(event) => this.onSelected(event.target.value)}>
									<option value="BRAND" disabled>BRAND</option>
									<option value="brand0">brand0</option>
									<option value="brand1">brand1</option>
									<option value="brand2">brand2</option>
									<option value="brand3">brand3</option>
									<option value="brand4">brand4</option>
									<option value="brand5">brand5</option>
									<option value="brand7">brand7</option>
									<option value="brand9">brand9</option>
								</select>
							</form>
						</div>
					</div>
				</header>
				<CarsList cars={this.props.cars} />
			</div>
		);
  	}
}

const mapStateToProps = (cars) => {
	return {
		cars: cars.cars.cars
	};
};

export default connect(mapStateToProps, null)(App);
