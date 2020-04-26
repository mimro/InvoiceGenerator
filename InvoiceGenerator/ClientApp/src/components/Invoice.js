import React, { Component } from 'react';
import { Table } from './Table';
import { InvoiceForm } from './InvoiceForm';



export class Invoice extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
			<InvoiceForm/>
			<Table />
			</div>
		)
	}

}


