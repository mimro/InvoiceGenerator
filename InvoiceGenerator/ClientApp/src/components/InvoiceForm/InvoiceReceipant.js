import React, { Component } from 'react';
import { InputGroup, FormControl, } from 'react-bootstrap'
import './styles/InvoiceCompanyDataInput.css'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";

import {
    setRecipientDetails
} from "../../actions";

type Props = {
    recipientDetails: {
        companyName: string,
        vatId: string,
        street: string,
        city: string,
		zipCode:string
    },
   setRecipientDetails: Function,
};


 class InvoiceReceipant extends Component {

	constructor(props : Props) {
		super(props);
		this.state = {
			companyConfig: this.props.companyDataConfig,
			data:this.props.companyData
		}
	}



	render() {
		const conf = this.state.companyConfig;
		const { recipientDetails} = this.props;
		return (
		 <form noValidate autoComplete="on">
		<label className="buyer">Nabywca</label>
		<Grid container direction={'column'}  justify="center" alignItems="center" xs={12} spacing={3}>
			<Grid item xs={12}>
			<TextField required name="companyName" value ={recipientDetails.companyName} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.CompanyName.name} />
			</Grid>
			<Grid item xs={12}>
			<TextField required name="vatId" value ={recipientDetails.vatId} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.VATID.name} />
			</Grid>
			<Grid item xs={12}>
			<TextField required name="street" value ={recipientDetails.street} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.Street.name}/>
			</Grid>
			<Grid item xs={12}>
			<TextField required name="city" value ={recipientDetails.city} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.City.name}  />
			</Grid>
			<Grid item xs={12}>
			<TextField required name="zipCode" value ={recipientDetails.zipCode} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label={conf.ZipCode.name} />
			</Grid>
			</Grid>
		</form>
		)
	}

 handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
            const { name, value } = e.target;
            this.props.setRecipientDetails(name, value);
        }
    }
	}

function mapDispatchToProps(dispatch) {
    return {
        setRecipientDetails: (name, value) => dispatch(setRecipientDetails(name, value)),
    }
}

function mapStateToProps(state, ownProps) {
    return {
        recipientDetails: state.recipientDetails,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceReceipant);
