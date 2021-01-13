import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { connect } from "react-redux";
import '../styles/Common.css';
import {
    setIssuerDetails
} from "../../../redux-legacy/actions";

class InvoiceIssuer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { issuerDetails } = this.props;
        return (
            <div class="company-data-form-container">
                <h5 class="company-data-header" style={{ marginBottom: "15px" }}> Dane sprzedawcy</h5>
                    <TextField name="companyName" value={issuerDetails.companyName} onChange={this.handleChange} id="standard-basic" label="Nazwa firmy" variant="outlined" />

                    <TextField name="address" value={issuerDetails.address} onChange={this.handleChange} id="standard-basic" style={{ marginTop: '20px' }} label="Adres" variant="outlined" />
                </div>
        )
    }

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
            const { name, value } = e.target;
            this.props.setIssuerDetails(name, value);
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setIssuerDetails: (name, value) => dispatch(setIssuerDetails(name, value)),
    }
}

function mapStateToProps(state, ownProps) {
    return {
        issuerDetails: state.issuerDetails,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceIssuer);
