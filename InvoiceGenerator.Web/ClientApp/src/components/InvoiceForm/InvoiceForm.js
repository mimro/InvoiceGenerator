import React, { Component } from 'react';
import InvoiceIssuer from './CompanyData/InvoiceIssuer'
import InvoiceSpecificData from './InvoiceSpecificData'
import { connect } from "react-redux";
import {
    setPreviewInvoice
} from "../../redux-legacy/actions";

import './styles/InvoiceForm.css'
import InvoiceReceipant from './CompanyData/InvoiceReceipant';
import { Grid } from '@material-ui/core';

type Props = {
    setPreviewInvoice: Function,
    previewInvoice: boolean
};


class InvoiceForm extends Component {

    constructor(props: Props) {
        super(props);
    }

    render() {

        return (
            <div class="invoice-form-container">
                <div class="invoice-form-elem1">
                    <InvoiceSpecificData />
                </div>
                <div class="invoice-form-elem2">
                    <InvoiceIssuer />
                </div>
                <div class="invoice-form-elem3">
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

