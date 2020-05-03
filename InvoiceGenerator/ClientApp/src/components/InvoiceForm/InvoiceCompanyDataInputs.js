import React, { Component } from 'react';
import { InputGroup, FormControl, } from 'react-bootstrap'
import './styles/InvoiceForm.css'
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
			<div className="companyData">
				<FormControl className="invoice-input" placeholder={conf.CompanyName.name} />
				<FormControl className="invoice-input" placeholder={conf.VATID.name}/>
				<FormControl className="invoice-input" placeholder={conf.Street.name}/>
				<FormControl className="invoice-input inline-input" id = "city" placeholder={conf.City.name}/>
				<FormControl className="invoice-input inline-input" id = "zipcode" placeholder={conf.ZipCode.name}/>
			</div>
		)
	}
}


