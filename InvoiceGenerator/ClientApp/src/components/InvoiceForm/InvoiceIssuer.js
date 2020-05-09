import React, { Component } from 'react';
import { InputGroup, FormControl, } from 'react-bootstrap'
import './styles/InvoiceCompanyDataInput.css'
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
			companyConfig: this.props.companyDataConfig,
			data:this.props.companyData
		}
	}



	render() {
		const conf = this.state.companyConfig;
		const { issuerDetails} = this.props;
		return (
		 <form noValidate autoComplete="on">
	<label class="seller">Sprzedawca</label>
	<Grid container direction={'column'}  justify="center" alignItems="center" xs={12} spacing={3}>
			<Grid item xs={12}>
			<TextField required name="companyName" value ={issuerDetails.companyName} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.CompanyName.name} />
			</Grid>
			<Grid item xs={12}>
			<TextField required name="vatId" value ={issuerDetails.vatId} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.VATID.name} />
			</Grid>
			<Grid item xs={12}>
			<TextField required name="street" value ={issuerDetails.street} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.Street.name}/>
			</Grid>
			<Grid item xs={12}>
			<TextField required name="city" value ={issuerDetails.city} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.City.name}  />
			</Grid>
			<Grid item xs={12}>
			<TextField required name="zipCode" value ={issuerDetails.zipCode} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.ZipCode.name} />
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
