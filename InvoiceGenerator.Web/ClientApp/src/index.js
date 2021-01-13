import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";
import createReduxStore from "./redux-legacy/store/createReduxStore";
import configureReduxToolkitStore from "./redux-toolkit/store/configureReduxToolkitStore";

import rootReducer from "./redux-legacy/reducers";

let store = createReduxStore(); //createReduxStore();
   // configureReduxToolkitStore(); //

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
        <Provider store={store}>
            <App />
        </Provider>,
  </BrowserRouter>,
  rootElement);