import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchByFeatures } from '../actions';
import { FormFieldsError } from '../component/formNfields-error';

class SelectSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBrand: '',
            selectedColor: '',
            selectedDrive: '',
            formErrors: {
                Brand: '',
                Color: '',
                Drive: ''
            },
            brandValid: false,
            colorValid: false,
            driveValid: false,
            formValid: false
        };
    }

    handleSelection = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({[name]: val}, () => {
            this.validateFields(name, val)
        });
    }

    validateFields(fn, val) {
        let fieldsErrors = this.state.formErrors;
        let bv = this.state.brandValid;
        let cv = this.state.colorValid;
        let dv = this.state.driveValid;

        switch (fn) {
            case 'selectedBrand':
                bv = val !== '' && val !== null && val !== undefined;
                fieldsErrors.Brand = bv ? '' : 'is required.';
                break;
            case 'selectedColor':
                cv = val !== '' && val !== null && val !== undefined;
                fieldsErrors.Color = cv ? '' : 'is required.';
                break;
            case 'selectedDrive':
                dv = val !== '' && val !== null && val !== undefined;
                fieldsErrors.Drive = dv ? '' : 'is required.';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldsErrors,
            brandValid: bv,
            colorValid: cv,
            driveValid: dv
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.brandValid && this.state.colorValid && this.state.driveValid});
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.searchByFeatures(this.state.selectedBrand, this.state.selectedColor, this.state.selectedDrive);
        this.setState({
            selectedBrand: '',
            selectedColor: '',
            selectedDrive: '',
            formErrors: {
                selectedBrand: '',
                selectedColor: '',
                selectedDrive: ''
            },
            brandValid: false,
            colorValid: false,
            driveValid: false,
            formValid: false
        });
    }

    render() {
        return (
            <div>
                <form className="form-inline my-2 my-lg-0" noValidate onSubmit={(event) => this.onFormSubmit(event)}>
                    <label className="mr-sm-2" htmlFor="carBrand">
                        Brand
                    </label>
                    <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="carBrand" 
                        onBlur={this.handleSelection} 
                        onChange={this.handleSelection} 
                        onFocus={this.handleSelection} 
                        value={this.state.selectedBrand} name="selectedBrand" required>
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
                        onBlur={this.handleSelection} 
                        onChange={this.handleSelection} 
                        onFocus={this.handleSelection} 
                        value={this.state.selectedColor} name="selectedColor" required>
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
                        onBlur={this.handleSelection} 
                        onChange={this.handleSelection} 
                        onFocus={this.handleSelection} 
                        value={this.state.selectedDrive} name="selectedDrive" required>
                        <option value="2wd">2wd</option>
                        <option value="4wd">4wd</option>
                        <option value="awd">awd</option>
                    </select>
                    <button type="submit" className={`btn ${this.state.formValid ? 'btn-primary' : 'btn-light'}`} 
                        disabled={!this.state.formValid}>
                        Submit
                    </button>
                    <FormFieldsError formErrors={this.state.formErrors} />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchByFeatures }, dispatch);
}

export default connect(null, mapDispatchToProps)(SelectSearch);