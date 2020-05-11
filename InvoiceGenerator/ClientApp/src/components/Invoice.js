import React, { Component } from 'react';
import  InvoiceForm  from './InvoiceForm/InvoiceForm';
import  InvoiceTable  from './InvoiceTable/InvoiceTable';
import  InvoiceSpecificData  from './InvoiceForm/InvoiceSpecificData'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
				    
                },

				SpecificData:{


				}
            }
        }
	}

onChange = (e) => {
var someProperty = {...this.state.formData.SpecificData.number}
someProperty = e.target.value;
this.setState({someProperty})
 }

	render() {
		return (
					 <ThemeProvider theme={theme}>
			  <Grid container direction={'row'}  justify="center" alignItems="center" spacing={2}>
			  <Grid item xs={12}>
			  <Paper elevation ={3} >
			  <Box  p={5} mt={3}>
                <InvoiceSpecificData  formData = {this.state.formData.SpecificData} onChange = {this.onChange}/>
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
				</ThemeProvider>
		)
	}



}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#009bd6',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#00415a',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
