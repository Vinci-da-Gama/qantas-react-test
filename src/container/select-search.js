import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchByBrand } from '../actions';

class SelectSearch extends Component {

	onSelected(brand) {
		this.props.searchByBrand(brand);
	}

    render() {
        return (
            <form className="form-inline my-2 my-lg-0" noValidate>
                <label className="mr-sm-2" htmlFor="carBrand">Brand</label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="carBrand" 
                    onChange={(event) => this.onSelected(event.target.value)}>
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
        )
    }
}

/* const mapStateToProps = (state) => ({
}); */

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchByBrand }, dispatch);
}

export default connect(null, mapDispatchToProps)(SelectSearch);