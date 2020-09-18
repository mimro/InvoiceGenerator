import React, { Component } from 'react';
import { InputGroup, FormControl, } from 'react-bootstrap'

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
			data:this.props.companyData
		}
	}



	render() {
		
		const { recipientDetails} = this.props;
		return (
		 <form noValidate autoComplete="on">
		<label className="buyer">Nabywca</label>
		<Grid container direction={'column'}  xs={12} spacing={2}>
			<Grid item xs={12}>
			<TextField  name="companyName" value ={recipientDetails.companyName} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label="Nazwa firmy" />
			</Grid>
			<Grid item xs={12}>
			<TextField  name="vatId" value ={recipientDetails.vatId} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label="NIP" />
			</Grid>
			<Grid item xs={12}>
			<TextField  name="street" value ={recipientDetails.street} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label="Ulica"/>
			</Grid>
			<Grid item xs={12}>
			<TextField  name="city" value ={recipientDetails.city} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label="Miasto"  />
			</Grid>
			<Grid item xs={12}>
			<TextField  name="zipCode" value ={recipientDetails.zipCode} onChange = {this.handleChange} id="standard-basic" className="comp-data-input" label="Kod pocztowy" />
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
