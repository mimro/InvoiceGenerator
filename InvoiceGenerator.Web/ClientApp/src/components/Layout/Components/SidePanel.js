import React from 'react';
import '../Styles/SidePanel.css'
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { postInvoiceData } from "../../../actions";



class SidePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: false,
        }
    }

    render() {

        return (
            <Paper elevation={6}>
                <div class="side-panel-container">
                    <Route render={({ history, location }) => (

                        <Button variant="outlined" color="primary" onClick={() => { location.pathname === "/" ? history.push('/preview') : history.push('/')}} style={{ margin: '10px', width: '60%' }}>
                            {location.pathname === "/" ? <span><VisibilityOutlinedIcon /> &nbsp; Podgląd faktury</span> : <span><CreateOutlinedIcon /> &nbsp; Edycja faktury</span>}
                        </Button>

                    )} />

                    <Button variant="outlined" color="primary" style={{ margin: '10px', width: '60%' }} onClick={() => {
                        
                        const invoiceHistory = {
                            invoiceNumber: this.props.invoiceSpecificData.number,                      
                            invoiceData: {
                                jsonEncodedInvoice: JSON.stringify({
                                    invoiceSpecificData: this.props.invoiceSpecificData,
                                    issuerDetails: this.props.issuerDetails,
                                    recipientDetails: this.props.recipientDetails,
                                    invoiceTableDetails: this.props.invoiceTableDetails,
                                })
                            }
                        }

                        this.props.postInvoiceData(invoiceHistory);
                    }}>
                        <SaveOutlinedIcon />&nbsp;&nbsp;  Zapisz fakturę
                        </Button>

                    <Route render={({ location }) => (
                        
                        <Button disabled={location.pathname !== "/preview"} variant="outlined" color="primary" onClick={() => {
                            let element = document.querySelector("#preview-container");
                            const pdf = new jsPDF();

                            if (pdf) {
                                html2canvas(element, {
                                    useCORS: true
                                })
                                    .then(canvas => {
                                        const imgData = canvas.toDataURL('image/png');
                                        let width = element.offsetWidth ;
                                        let height = element.offsetHeight;
                                        pdf.deletePage(1);
                                        pdf.addPage(width, height);
                                        pdf.addImage(imgData, 'PNG', 0, 0);
                                        pdf.save('invoice.pdf');
                                    });
                            } }} style={{ margin: '10px', width: '60%' }}>
                            <PictureAsPdfOutlinedIcon /> &nbsp; Generuj fakturę pdf
                        </Button>
                    )} />

                </div>
            </Paper>
        );
    }
}



function mapDispatchToProps(dispatch) {
    return {
        postInvoiceData: (data) => dispatch(postInvoiceData(data)),
    }
}

function mapStateToProps(state, ownProps) {
    return {
        invoiceSpecificData: state.invoiceSpecificData,
        issuerDetails: state.issuerDetails,
        recipientDetails: state.recipientDetails,
        invoiceTableDetails: state.invoiceTableDetails,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);