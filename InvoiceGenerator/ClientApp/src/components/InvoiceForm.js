import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import './styles/InvoiceForm.css'
export class InvoiceForm extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="container seller-container">
				<label class="seller">Sprzedawca</label>
				<InputGroup className="invoice-input-group mb-3">
				<InputGroup.Prepend className="prepend">
					<InputGroup.Text className="prepend-text">Nazwa Firmy</InputGroup.Text>
				</InputGroup.Prepend>
						<FormControl id="basic-url" aria-describedby="basic-addon3" />
				</InputGroup>

					<InputGroup className="invoice-input-group mb-3">
					<InputGroup.Prepend className="prepend">
						<InputGroup.Text className="prepend-text">Ulica</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl id="basic-url" aria-describedby="basic-addon3" />
				</InputGroup>


				<InputGroup className="invoice-input-group mb-3">
					<InputGroup.Prepend className="prepend">
						<InputGroup.Text className="prepend-text">Miejscowość</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl id="basic-url" aria-describedby="basic-addon3" />
				</InputGroup>
				</div>
			)
	}
}


