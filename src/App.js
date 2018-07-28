import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import CarsList from './container/cars-list';

class App extends Component {
  	render() {
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
					
						<div className="collapse navbar-collapse justify-content-end" id="collapseNavbar">
							<form className="form-inline my-2 my-lg-0">
								<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
							</form>
						</div>
					</div>
				</header>
				<CarsList />
			</div>
		);
  	}
}

export default App;
