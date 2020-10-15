 import React from 'react';
import './Template1.css';
import { connect } from "react-redux";

 function Template1(props) {

	 let style = {
		 gridTemplateAreas: '"invoiceSpecificData issuerDetails" "recipientDetails additionalData" "invoiceTableSection invoiceTableSection"',
		 invoiceSpecificData: {
			 border: "5px solid black"
		 },
	 };

	 return (
		 <div class="invoice-preview-container" style={style}>
		  <div class="invoiceSpecificData" style={style.invoiceSpecificData} >
		<div>Miejsce wystawienia: {props.invoiceSpecificData.placeOfIssue}</div>
		<div>Data wystawienia: {props.invoiceSpecificData.issueDate}</div>
		<div>Data sprzedaży: {props.invoiceSpecificData.sellingDate}</div>
		</div>
		  <div class="issuerDetails" >
		<div>{props.issuerDetails.companyName}</div>
		<div>{props.issuerDetails.street}</div>
		<div>{props.issuerDetails.street} {props.issuerDetails.city} {props.issuerDetails.zipCode}</div>
		<div>NIP: {props.issuerDetails.vatId}</div>
		</div>
		<div class="recipientDetails" >
		<div>{props.recipientDetails.companyName}</div>
		<div>{props.recipientDetails.street}</div>
		<div>{props.recipientDetails.street} {props.issuerDetails.city} {props.issuerDetails.zipCode}</div>
		<div>NIP: {props.recipientDetails.vatId}</div>
		</div>

		<div class="additionalData" >
		<div>Faktura VAT</div>
		<div>orginał / kopia</div>
		<div>Nr {props.invoiceSpecificData.number}</div>
		</div>

			 <div class="invoiceTableSection" >
             <table className="invoiceTable">
                    <thead>
					<th>Nazwa</th>
                    <th>Ilość</th>
                    <th>jm</th>
                   <th>Cena jednostkowa netto</th>
                   <th>Wartość netto</th>
                   <th>Vat</th>
                   <th>Wartość vat</th>
                    </thead>
                    <tbody>
                        {renderRows(props.invoiceTableDetails.table)}
                    </tbody>
                </table>
		</div>
	</div>
  );
}

const renderRows= (arr)=>{
 return arr.map((data, i) => (
           <tr>
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
