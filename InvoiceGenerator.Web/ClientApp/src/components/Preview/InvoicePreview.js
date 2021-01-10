import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Template1 from './InvoiceViewTemplates/Template1';

const useStyles = makeStyles((theme) => ({
    incoivePreviewContainer: {
        height: '700px',
        width: 'auto',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #66a3ff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '5%',
        left: '25%'
    },
}));

function InvoicePreview(props) {
    const classes = useStyles();

    const invoiceData = {
        invoiceSpecificData: props.invoiceSpecificData,
        issuerDetails: props.issuerDetails,
        recipientDetails: props.recipientDetails,
        invoiceTableDetails: props.invoiceTableDetails,
    }

    return (
        <div className={classes.incoivePreviewContainer} id="preview-container">
            <Template1 invoiceData={invoiceData} />

        </div>

    );
}


const mapStateToProps = (state, ownProps) => {
    return {
        invoiceSpecificData: state.invoiceSpecificData,
        issuerDetails: state.issuerDetails,
        recipientDetails: state.recipientDetails,
        invoiceTableDetails: state.invoiceTableDetails,
    }
}


export default connect(
    mapStateToProps
)(InvoicePreview)

