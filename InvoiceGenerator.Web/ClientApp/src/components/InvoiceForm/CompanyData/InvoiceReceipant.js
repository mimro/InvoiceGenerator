import React, { Component } from 'react';
import { InputGroup, FormControl, } from 'react-bootstrap'

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import '../styles/Common.css';
import {
    setRecipientDetails
} from "../../../actions";

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
				<label > Dane nabywcy</label>
						<TextField name="companyName" value={recipientDetails.companyName} onChange={this.handleChange} id="standard-basic"  label="Nazwa firmy" variant="outlined" />

                <TextField name="address" value={recipientDetails.address} onChange={this.handleChange} id="standard-basic" style={{ marginTop: '20px' }} label="Adres" variant="outlined" />
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
