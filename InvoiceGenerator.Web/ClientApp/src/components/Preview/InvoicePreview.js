import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Template1 from './InvoiceViewTemplates/Template1';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #66a3ff',
    boxShadow: theme.shadows[5],
	overflow:'scroll',
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
        <div className={classes.paper}>
            <Template1 invoiceData={invoiceData} />
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => generatePdf(invoiceData) }>
                Generuj
      </Button>
        </div>
    );
}

const generatePdf = (invoiceData) => {

    fetch('https://localhost:44330/Documents/DocumentGeneration/Index', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            invoiceData
        })
    })

    //let element = document.querySelector(".invoice-preview-container");
    //const pdf = new jsPDF();
    //if (pdf) {
    //    html2canvas(element, {
    //        useCORS: true
    //    })
    //        .then(canvas => {
    //            const imgData = canvas.toDataURL('image/png');
    //            console.log(imgData);
    //            let width = (element.offsetWidth * 0.7) ;
    //            let height = element.offsetHeight * 0.7;
    //            pdf.deletePage(1);
    //            pdf.addPage(width, height);
    //            pdf.addImage(imgData, 'PNG', 10, 10);
    //            pdf.save('download.pdf');
    //        });
    //}
}

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

