import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { connect } from "react-redux";
import '../../styles/Common.css';
////import {
////    setIssuerDetails
////} from "../../../../redux-legacy/actions";
import {
    setIssuerDetails
} from "../../../../redux-toolkit/features/issuerSlice";
import { ISSUER_DATA_LABEL } from '../../../../Resources/wordings_PL';

class InvoiceIssuer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { issuer } = this.props;
        return (
            <div className="company-data-form-container">
                <h5 className="company-data-header" style={{ marginBottom: "15px" }}> {ISSUER_DATA_LABEL}</h5>
                    <TextField name="companyName" value={issuer.companyName} onChange={this.handleChange} id="standard-basic" label="Nazwa firmy" variant="outlined" />

                    <TextField name="address" value={issuer.address} onChange={this.handleChange} id="standard-basic" style={{ marginTop: '20px' }} label="Adres" variant="outlined" />
                </div>
        )
    }

    handleChange = (e) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
            const { name, value } = e.target;
            this.props.setIssuerDetails(name, value);
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setIssuerDetails: (name, value) => dispatch(setIssuerDetails({ name, value })),
    }
}

function mapStateToProps(state) {
    return {
        issuer: state.issuer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceIssuer);
