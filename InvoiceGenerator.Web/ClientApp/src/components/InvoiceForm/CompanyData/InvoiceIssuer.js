import React, { Component } from 'react';
import { InputGroup, FormControl, } from 'react-bootstrap'

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import '../styles/Common.css';
import {
    setIssuerDetails
} from "../../../actions";

type Props = {
    issuerDetails: {
        companyName: string,
		address: string
    },
   setIssuerDetails: Function,
};


 class InvoiceIssuer extends Component {

	constructor(props : Props) {
		super(props);

	}

	render() {
		const { issuerDetails} = this.props;
		return (
			<form noValidate autoComplete="on">
				<label > Dane sprzedawcy</label>

                <TextField name="companyName" value={issuerDetails.companyName} onChange={this.handleChange} id="standard-basic" label="Nazwa firmy" variant="outlined" />

                <TextField name="address" value={issuerDetails.address} onChange={this.handleChange} id="standard-basic" style={{ marginTop: '20px' }} label="Adres"  variant="outlined"/>
		</form>
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
