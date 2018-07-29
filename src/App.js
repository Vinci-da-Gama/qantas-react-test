import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './logo.png';
import './App.css';
import CarsList from './container/cars-list';
import Spinner from './component/spinner';
import SelectSearch from './container/select-search';
import NoData from './component/no-data';
import { fetchAllCars } from './actions';

class App extends Component {

	componentWillMount() {
	  this.props.fetchAllCars();
	}
	
  	render() {
		if (!this.props.cars.cars && this.props.cars.cars !== undefined) {
			return (
				<Spinner />
			);
		} else if (this.props.cars.hasOwnProperty('errorMessage')) {
			return (
				<NoData />
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
							<SelectSearch />
						</div>
					</div>
				</header>
				<CarsList cars={this.props.cars.cars} />
			</div>
		);
  	}
}

const mapStateToProps = (cars) => {
	return {
		cars: cars.cars
	};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchAllCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);