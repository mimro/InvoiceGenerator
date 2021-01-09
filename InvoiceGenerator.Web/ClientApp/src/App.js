import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout/Components/Layout';
import { Invoice } from './components/Invoice';
import Template1 from './components/Preview/InvoiceViewTemplates/Template1';
import InvoicePreview from './components/Preview/InvoicePreview';
import LoginPage from './components/Login/LoginPage'


import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core';


import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {

        const mtheme: Theme = createMuiTheme({
            palette: {
                primary: {
                    light: '#757ce8',
                    main: '#1976d2',
                    dark: '#002884',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#ff7961',
                    main: '#4caf50',
                    dark: '#ba000d',
                    contrastText: '#000',
                },

            },
        });
        return (
            <ThemeProvider theme={mtheme}>
                <Layout>
                    <Route exact path='/' component={Invoice} />
                    <Route path='/temp' component={Template1} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/preview" component={InvoicePreview} />

                </Layout>
            </ThemeProvider>
        );
    }
}
