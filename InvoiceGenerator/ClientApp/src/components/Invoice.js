import React, { Component } from 'react';
import { Table } from './InvoiceTable/Table';
import { InvoiceForm } from './InvoiceForm/InvoiceForm';
import { InvoiceTable } from './InvoiceTable/InvoiceTable';
import { InvoiceSpecificData } from './InvoiceForm/InvoiceSpecificData'

export class Invoice extends Component {

	constructor(props) {
		super(props);
		this.state={
            invoiceTableData: [
                {
                    "id": 1,
                    "Name": "ABC123",
                    "Quantity": "1",
                    "jm": "ryczałt",
                    "NettoPrice": "850",
                    "NettoValue": "",
                    "Vat": "23%",
                    "VatValue": "",
                    "GrossValue": ""
                },
                {
                    "id": 2,
                    "Name": "EFG456",
                    "Quantity": "5",
                    "jm": "szt",
                    "NettoPrice": "400",
                    "NettoValue": "",
                    "Vat": "23%",
                    "VatValue": "",
                    "GrossValue": ""
                },
                {
                    "id": 3,
                    "Name": "HIJ678",
                    "Quantity": "4",
                    "jm": "km",
                    "NettoPrice": "220",
                    "NettoValue": "",
                    "Vat": "23%",
                    "VatValue": "",
                    "GrossValue": ""
                }
            ],
            tableConfig: {
                "properties": [
                    "Name",
                    "Quantity",
                    "jm",
                    "NettoPrice",
                    "NettoValue",
                    "Vat",
                    "VatValue",
                    "GrossValue"
                ],
                "headers": [
                    "Nazwa",
                    "Ilość",
                    "jm",
                    "Cena jednostkowa netto",
                    "Wartość netto",
                    "Vat",
                    "Wartość vat",
                    "Wartość brutto",
                    "Edytuj"
                ]
            },
            formConfig: {
                CompanyInputs: {
                    Seller: { text: "Sprzedawca" },
                    Buyer: { text: "Nabywca" },
                    CompanyName: { name: "Nazwa Firmy" },
                    VATID: { name: "NIP" },
                    Street: { name: "Ulica" },
                    City: { name: "Miasto" },
                    ZipCode: { name: "Kod pocztowy" }
                }
            },
            formData: {
                Company: {
                    
                }
            }
        }
	}

	render() {
		return (
            <div className="container">
                <InvoiceSpecificData/>
                <InvoiceForm formConfig={this.state.formConfig}/>
                <InvoiceTable invoiceData={this.state.invoiceTableData} config={this.state.tableConfig} />
			</div>
		)
	}

}


