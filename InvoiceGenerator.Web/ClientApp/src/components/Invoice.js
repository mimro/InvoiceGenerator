import React, { Component } from 'react';
import InvoiceForm from './InvoiceForm/InvoiceForm';
import InvoiceTable from './InvoiceTable/InvoiceTable';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core';
import InvoiceInfo from './InvoiceForm/InvoiceInfo';


export class Invoice extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        const mtheme: Theme = createMuiTheme({
            palette: {
                primary: {
                    light: '#757ce8',
                    main: '#4791db',
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

        return (
            <ThemeProvider theme={mtheme}>
                <InvoiceInfo />
                <InvoiceForm />
                <Box p={5}>
                    <InvoiceTable />
                </Box>
            </ThemeProvider>
        )
    }



}


