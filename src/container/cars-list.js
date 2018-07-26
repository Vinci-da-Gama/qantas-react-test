import React from 'react';
const { Component } = React;
import { connect } from 'react-redux';

import { grabCars } from '../actions';


class CarsList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabCars();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row px-0 pt-5 pb-2 mx-3 mb-4 border-bottom border-dark">
                    <div className="col-12 col-md-3 col-lg-6 emp-title pl-0 mb-md-0 mb-sm-3 mb-3">
                        Cars List
                    </div>
                    <div className="col-12 col-md-9 col-lg-6">
                        hw...
                    </div>
                </div>
                <div className="row mx-0">
                    hw...
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {cars: state.roster.cars};
};

export default connect(mapStateToProps, {grabCars})(CarsList);