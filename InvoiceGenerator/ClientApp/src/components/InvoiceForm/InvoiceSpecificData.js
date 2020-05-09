import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import { registerLocale } from "react-datepicker";
import TextField from '@material-ui/core/TextField'
import DatePicker from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import {
    setInvoiceDetails
} from "../../actions";




type Props = {
    invoiceSpecificData: {
        number: string,
        issueDate: string,
        sellingDate: string,
        placeOfIssue: string,
    },
   setInvoiceDetails: Function,
};

class InvoiceSpecificData extends Component {

	constructor(props: Props) {
		super(props);
		
		}

	render() {
	const { invoiceSpecificData} = this.props;
		return (
			<Grid container direction={'row'}  justify="center" alignItems="center" xs={12} spacing={1}>
			<Grid item xs={3}>
			<TextField id="standard-basic" name="number" onChange = {this.handleChange} value ={invoiceSpecificData.number} label="numer faktury" variant="outlined" />
		</Grid>

			<Grid item xs={3}>
			<TextField id="standard-basic" name="placeOfIssue" onChange = {this.handleChange} label="miejsce wystawienia" value ={invoiceSpecificData.placeOfIssue} onChange = {this.handleChange} variant="outlined" />
		</Grid>

			<Grid item xs={3}>
			<TextField id="date" name="issueDate" onChange = {this.handleChange} label="data wystawienia"   type="date" name="issueDate" defaultValue="" value ={invoiceSpecificData.issueDate}  onChange = {this.handleChange}  variant="outlined"/>
		</Grid>

			<Grid item xs={3}>
			<TextField id="date" name="sellingDate" onChange = {this.handleChange} label="data sprzedaży"   type="date"  value ={invoiceSpecificData.sellingDate} InputLabelProps={{shrink:true}}  onChange = {this.handleChange}  variant="outlined"/>
		</Grid>

		</Grid>
		)
	}

 handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
            const { name, value } = e.target;
            this.props.setInvoiceDetails(name, value);
        }
    }
	}
function mapDispatchToProps(dispatch) {
    return {
        setInvoiceDetails: (name, value) => dispatch(setInvoiceDetails(name, value)),
    }
}

function mapStateToProps(state, ownProps) {
    return {
        invoiceSpecificData: state.invoiceSpecificData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceSpecificData);