import React, { Component } from 'react';
import { InputGroup, FormControl, } from 'react-bootstrap'
import './styles/InvoiceCompanyDataInput.css'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

export class InvoiceCompanyDataInputs extends Component {

	constructor(props) {
		super(props);
		this.state = {
			companyConfig: this.props.companyDataConfig,
			data:this.props.companyData
		}
	}



	render() {
		const conf = this.state.companyConfig;

		return (
		 <form noValidate autoComplete="on">
	<Grid container direction={'column'}  justify="center" alignItems="center" xs={12} spacing={3}>
			<Grid item xs={12}>
			<TextField required id="standard-basic" className="comp-data-input" label={conf.CompanyName.name} />
			</Grid>
			<Grid item xs={12}>
			<TextField required id="standard-basic" className="comp-data-input" label={conf.VATID.name} />
			</Grid>
			<Grid item xs={12}>
			<TextField required id="standard-basic" className="comp-data-input" label={conf.Street.name}/>
			</Grid>
			<Grid item xs={12}>
			<TextField required id="standard-basic" className="comp-data-input" label={conf.City.name}  />
			</Grid>
			<Grid item xs={12}>
			<TextField required id="standard-basic" className="comp-data-input" label={conf.ZipCode.name} />
			</Grid>
			</Grid>
		</form>
		)
	}
}


