import React, { Component } from 'react';
import { InputGroup, FormControl, } from 'react-bootstrap'

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";

import {
    setIssuerDetails
} from "../../actions";

type Props = {
    issuerDetails: {
        companyName: string,
        vatId: string,
        street: string,
        city: string,
		zipCode:string
    },
   setIssuerDetails: Function,
};


 class InvoiceIssuer extends Component {

	constructor(props : Props) {
		super(props);
		this.state = {
			data:this.props.companyData
		}
	}



	render() {
		const { issuerDetails} = this.props;
		return (
		 <form noValidate autoComplete="on">
				<label class="seller">Sprzedawca</label>
				<Grid container direction={'column'} xs={12} spacing={2} justify="left" alignItems="center" xs={12} spacing={2} >
			<Grid item xs={12}>
						<TextField name="companyName" value={issuerDetails.companyName} onChange={this.handleChange} id="standard-basic" className="comp-data-input" label="Nazwa firmy"  />
			</Grid>
			<Grid item xs={12}>
						<TextField name="vatId" value={issuerDetails.vatId} onChange={this.handleChange} id="standard-basic" className="comp-data-input" label="NIP" />
			</Grid>
			<Grid item xs={12}>
						<TextField name="street" value={issuerDetails.street} onChange={this.handleChange} id="standard-basic" className="comp-data-input" label="Ulica"/>
			</Grid>
			<Grid item xs={12}>
						<TextField name="city" value={issuerDetails.city} onChange={this.handleChange} id="standard-basic" className="comp-data-input" label="Miasto" />
			</Grid>
			<Grid item xs={12}>
						<TextField name="zipCode" value={issuerDetails.zipCode} onChange={this.handleChange} id="standard-basic" className="comp-data-input" label="Kod pocztowy" />
			</Grid>
			</Grid>
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
