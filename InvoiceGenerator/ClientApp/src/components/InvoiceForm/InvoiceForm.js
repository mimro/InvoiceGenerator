import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import { InvoiceCompanyDataInputs } from './InvoiceCompanyDataInputs'
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
			<div className="container">
			<div className="seller-container">
					<label class="seller">{this.state.invoiceFormConfig.CompanyInputs.Seller.text}</label>
					<InvoiceCompanyDataInputs companyDataConfig={this.state.invoiceFormConfig.CompanyInputs} />
			</div>
			<div className="buyer-container">
					<label className="buyer">{this.state.invoiceFormConfig.CompanyInputs.Buyer.text}</label>
					<InvoiceCompanyDataInputs id companyDataConfig={this.state.invoiceFormConfig.CompanyInputs}  />
			</div>
			</div >
			)
	}

}


