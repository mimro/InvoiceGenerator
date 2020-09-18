import React, { Component } from 'react';
import  InvoiceIssuer  from './InvoiceIssuer'
import InvoiceReceipant from './InvoiceReceipant'
import InvoiceAdditionalData from './InvoiceAdditionalData'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


import { connect } from "react-redux";

import {
    setPreviewInvoice
} from "../../actions";



type Props = {
   setPreviewInvoice: Function,
   previewInvoice:boolean
};


 class InvoiceForm extends Component {

	constructor(props:Props) {
		super(props);
		this.state={
        }
	}

	render() {
		
		return (

		 <Grid container direction={'row'} align="center"  item xs={12} spacing={15}>
				<Grid item xs={12} sm={6} xl={3} style={{ 'border': '1px black solid', 'margin': '10px'  }}>
					<Box p={3} component={InvoiceIssuer}/>					
			</Grid>

				<Grid item xs={12} sm={6} xl={3} style={{ 'border': '1px black solid', 'margin':'10px' }}>
					<Box p={3} component={InvoiceReceipant}>
					
				  </Box>

			</Grid>	
			</Grid>
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

