import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import { Invoice } from './components/Invoice';
import Template1 from './components/Preview/InvoiceViewTemplates/Template1';
import LoginPage from './components/Login/LoginPage'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
           <Route exact path='/' component={Invoice} />
        <Route path='/temp' component={Template1} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
         <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
         <Route path="/login" component={LoginPage}/>
      </Layout>
    );
  }
}
