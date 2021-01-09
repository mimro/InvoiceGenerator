import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Template1 from './InvoiceViewTemplates/Template1';
import Button from '@material-ui/core/Button';
import $ from "jquery";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    incoivePreviewContainer: {
    height:'700px',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #66a3ff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
	top:'5%',
	left:'25%'
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

const generatePreview = (invoiceData) => {
    axios.get('/Preview/Index', {
        params: {
            invoiceData: JSON.stringify(invoiceData),
        }
    }).then(resp => {
        {
          
        }
    });
    }
    //fetch('/Documents/DocumentGeneration/Index', {
    //    method: 'POST',
    //    headers: {
    //        'Content-Type': 'application/json'
    //    },
    //    body: { invoiceData: JSON.stringify( invoiceData ) }
    //})
    //var data = { invoiceData: invoiceData }
    //const requestOptions = {
    //    method: 'POST',
    //    headers: {'Content-Type': 'application/json'},
    //    body: { invoiceData: JSON.stringify(invoiceData) },
    //    dataType: 'json'
    //};

    //fetch('/Documents/DocumentGeneration/Index', requestOptions)
    //    .then(response => response.json())
    //    .then(data => data);


    //$.ajax({
    //    type: "POST",
    //    url: '/Documents/DocumentGeneration/Index',
    //    dataType: 'JSON',
    //    data: { invoiceData: JSON.stringify(invoiceData) },
    //    success: function (data) { console.log(data) },
    //    error: function (data) { console.log(data) }
    //});





const mapStateToProps = (state , ownProps) => {
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

