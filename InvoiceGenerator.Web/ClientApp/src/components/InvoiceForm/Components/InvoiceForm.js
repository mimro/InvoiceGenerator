import React, { Component } from 'react';
import { connect } from "react-redux";

import InvoiceReceipant from "./CompanyData/InvoiceReceipant";
import InvoiceIssuer from "./CompanyData/InvoiceIssuer";
import InvoiceSpecificData from './InvoiceSpecificData';

import {
    setPreviewInvoice
} from "../../../redux-legacy/actions";
import '../styles/InvoiceForm.css';

class InvoiceForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="invoice-form-container">
                <div className="invoice-form-elem1">
                    <InvoiceSpecificData />
                </div>
                <div className="invoice-form-elem2">
                    <InvoiceIssuer />
                </div>
                <div className="invoice-form-elem3">
                    <InvoiceReceipant />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setPreviewInvoice: (previewInvoice) => dispatch(setPreviewInvoice(previewInvoice)),
    }
}

function mapStateToProps(state, ownProps) {
    return {
        previewInvoice: state.previewInvoice,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceForm);

