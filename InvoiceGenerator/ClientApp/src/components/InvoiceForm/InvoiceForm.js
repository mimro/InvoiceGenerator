import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import { InvoiceCompanyDataInputs } from './InvoiceCompanyDataInputs'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './styles/InvoiceForm.css'
export class InvoiceForm extends Component {

	constructor(props) {
		super(props);
		this.state={
			invoiceFormConfig: this.props.formConfig,
			invoiceFormData: this.props.formData

        }
	}

	render() {
		
		return (

		 <Grid container direction={'row'} align="center"  item xs={12} spacing={24}>

			<Grid item xs={4}>
			  <Paper elevation ={3}>
			  <Box p={3}>
					<label class="seller">{this.state.invoiceFormConfig.CompanyInputs.Seller.text}</label>
					<InvoiceCompanyDataInputs companyDataConfig={this.state.invoiceFormConfig.CompanyInputs} />
			  </Box>

			</Paper>
			</Grid>
			<Grid item xs={4} align="center"><h2>Faktura VAT</h2></Grid>
			<Grid item xs={4}>
			 <Paper elevation ={3}>
			  <Box p={3} >
					<label className="buyer">{this.state.invoiceFormConfig.CompanyInputs.Buyer.text}</label>
					<InvoiceCompanyDataInputs id companyDataConfig={this.state.invoiceFormConfig.CompanyInputs}  />
				  </Box>

			</Paper>
			</Grid>	
			</Grid>
			)
	}

}


