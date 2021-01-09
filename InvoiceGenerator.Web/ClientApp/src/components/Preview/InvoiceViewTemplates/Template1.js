import React from 'react';
import './Template1.css';
import { connect } from "react-redux";

function Template1(props) {

    let style = {
        gridTemplateAreas: '"invoiceSpecificData invoiceSpecificData" "recipientDetails issuerDetails" "invoiceTableSection invoiceTableSection" "signSection summaryTableSection" "signSection amountInWordsSection"',
    };

    return (
        <div id="template1-container">
            <h1 class="invoice-header">Faktura VAT Nr {props.invoiceSpecificData.number}</h1>
            <div class="invoice-preview-container" style={style}>

                <div class="invoiceSpecificData" style={style.invoiceSpecificData} >
                    <div>Miejsce wystawienia: {props.invoiceSpecificData.placeOfIssue}</div>
                    <div>Data wystawienia: {props.invoiceSpecificData.issueDate}</div>
                    <div>Data sprzedaży: {props.invoiceSpecificData.sellingDate}</div>
                </div>
                <div class="issuerDetails" >
                    <div>Dane sprzedawcy </div>
                    <div>Nazwa firmy: {props.issuerDetails.companyName}</div>
                    <div>Adress: {props.issuerDetails.address}</div>
                </div>
                <div class="recipientDetails" >
                    <div>Dane nabywcy </div>
                    <div>Nazwa firmy: {props.recipientDetails.companyName}</div>
                    <div>Adress: {props.recipientDetails.address}</div>
                </div>



                <div class="invoiceTableSection" >
                    <table className="invoiceTable">
                        <thead>
                            <tr>
                            <th>Nazwa</th>
                            <th>Ilość</th>
                            <th>jm</th>
                            <th>Cena jednostkowa netto</th>
                            <th>Wartość netto</th>
                            <th>Vat</th>
                                <th>Wartość vat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows(props.invoiceTableDetails.table)}
                        </tbody>
                    </table>
                </div>
                <div class="summaryTableSection" >
                    <table id="summary-table" className="table table-borderless table-responsive-sm table-hover">
                        <thead>
                            <tr>
                                <th> Wartość netto</th>
                                <th>Vat </th> 
                                <th> Wartość brutto	</th> 

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{props.invoiceTableDetails.NettoValueSum}</td>
                            <td>{props.invoiceTableDetails.VatValueSum}</td>
                            <td>{props.invoiceTableDetails.GrossValueSum}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="amountInWordsSection" >
                    {props.invoiceTableDetails.AmountInWords}
                </div>
            </div>
        </div>

    );
}

const renderRows = (arr) => {
    return arr.map((data, i) => (
        <tr key={i}>
            <td>{data.Name}</td>
            <td>{data.Quantity}</td>
            <td>{data.jm}</td>
            <td>{data.NettoPrice}</td>
            <td>{data.NettoValue}</td>
            <td>{data.Vat}</td>
            <td>{data.VatValue}</td>
        </tr>
    ))
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
)(Template1)
