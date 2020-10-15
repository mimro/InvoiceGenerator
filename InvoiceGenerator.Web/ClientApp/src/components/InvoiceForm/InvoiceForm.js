import React, { Component } from 'react';
import  InvoiceIssuer  from './CompanyData/InvoiceIssuer'
import DisplayInvoiceIsuer from './CompanyData/DisplayInvoiceIssuer'
import { connect } from "react-redux";
import {
    setPreviewInvoice
} from "../../actions";

import './styles/InvoiceForm.css'
import InvoiceReceipant from './CompanyData/InvoiceReceipant';
import { Grid } from '@material-ui/core';

type Props = {
   setPreviewInvoice: Function,
   previewInvoice:boolean
};


 class InvoiceForm extends Component {

	constructor(props:Props) {
		super(props);
	}

	render() {
		
        return (
            <div class="row">

                    <InvoiceIssuer />
               
                <InvoiceReceipant />

               				
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

