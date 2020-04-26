import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import './styles/InvoiceForm.css'
export class InvoiceForm extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<InputGroup className = "invoice-input-group">
				<InputGroup.Prepend className="prepend">
					<InputGroup.Text className="prepend-text">Sprzedawca</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl as="textarea" aria-label="With textarea"
					placeholder="Nazwa Firmy 
Adres
NIP" />

				<InputGroup.Prepend className="prepend">
					<InputGroup.Text>Nabywca</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl as="textarea"
					placeholder="Nazwa Firmy 
Adres
NIP" />
				
			</InputGroup>
			)
	}
}


