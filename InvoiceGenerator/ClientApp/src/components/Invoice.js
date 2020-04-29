import React, { Component } from 'react';
import { Table } from './InvoiceTable/Table';
import { InvoiceForm } from './InvoiceForm';
import { InvoiceTable } from './InvoiceTable/InvoiceTable';


export class Invoice extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<InvoiceForm/>
				<InvoiceTable />
			</div>
		)
	}

}


