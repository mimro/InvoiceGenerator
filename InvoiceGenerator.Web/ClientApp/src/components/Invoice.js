import React, { Component } from 'react';
import  InvoiceForm  from './InvoiceForm/InvoiceForm';
import  InvoiceTable  from './InvoiceTable/InvoiceTable';
import  InvoiceSpecificData  from './InvoiceForm/InvoiceSpecificData'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InvoiceInfo from './InvoiceForm/InvoiceInfo';


export class Invoice extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
            <ThemeProvider theme={theme}>
               
                    <InvoiceInfo />

                    <Grid container direction={'row'} justify="center" alignItems="center" spacing={2}>

			  <Grid item xs={12}>
			  
			  <Box  p={5} mt={3}>
                <InvoiceSpecificData />
				</Box>
                        </Grid>

                <InvoiceForm />
				 <Grid item xs={12}>
			  
			  <Box  p={5}>
                <InvoiceTable/>
				</Box>
				
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
      main: '#0366fc',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#fa4b5f',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
