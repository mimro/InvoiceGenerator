import React, { Component } from 'react';
import { Table } from './InvoiceTable/Table';
import { InvoiceForm } from './InvoiceForm/InvoiceForm';
import { InvoiceTable } from './InvoiceTable/InvoiceTable';
import { InvoiceSpecificData } from './InvoiceForm/InvoiceSpecificData'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';



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
                },
				SpecificData:{
					Number:{name:"numer"},
					DateOfIssue:{name:"Data wystawuenia"},
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
			  <Grid container direction={'row'}  justify="center" alignItems="center" spacing={2}>
			  <Grid item xs={12}>
			  <Paper elevation ={3}>
			  <Box  p={5}>
                <InvoiceSpecificData/>
				</Box>
				</Paper>
				</Grid>
                <InvoiceForm formConfig={this.state.formConfig}/>
				 <Grid item xs={12}>
			  <Paper elevation ={3}>
			  <Box  p={5}>
                <InvoiceTable invoiceData={this.state.invoiceTableData} config={this.state.tableConfig} />
				</Box>
				</Paper>
				</Grid>
				</Grid>

		)
	}

}


