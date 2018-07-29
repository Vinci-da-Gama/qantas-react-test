import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchByFeatures } from '../actions';

class SelectSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBrand: '',
            selectedColor: '',
            selectedDrive: ''
        }
    }

    onFormSubmit() {
        this.props.searchByFeatures(this.state.selectedBrand, this.state.selectedColor, this.state.selectedDrive);
    }

    render() {
        return (
            <form className="form-inline my-2 my-lg-0" noValidate onSubmit={() => this.onFormSubmit()}>
                <label className="mr-sm-2" htmlFor="carBrand">
                    Brand
                </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="carBrand" 
                    onChange={(event) => this.setState({selectedBrand: event.target.value})}>
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
                <label className="mr-sm-2" htmlFor="carColor">
                    Color
                </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="carColor" 
                    onChange={(event) => {this.setState({selectedColor: event.target.value});}}>
                    <option value="COLOR" disabled>COLOR</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="indigo">indigo</option>
                    <option value="red">red</option>
                    <option value="purple">purple</option>
                </select>
                <label className="mr-sm-2" htmlFor="carDrive">
                    Drive
                </label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="carDrive" 
                    onChange={(event) => {this.setState({selectedDrive: event.target.value});}}>
                    <option value="DRIVE" disabled>DRIVE</option>
                    <option value="2wd">2wd</option>
                    <option value="4wd">4wd</option>
                    <option value="awd">awd</option>
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

/* const mapStateToProps = (state) => ({
}); */

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchByFeatures }, dispatch);
}

export default connect(null, mapDispatchToProps)(SelectSearch);