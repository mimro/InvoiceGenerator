  import React from 'react';
  import './Template1.css';
  export default function Template1(props) {

  return (
  <div class="invoice-preview-container">
	  	<div class="box1" >
		<div>{props.invoiceData.issuerDetails.companyName}</div>
		<div>{props.invoiceData.issuerDetails.street}</div>
		<div>{props.invoiceData.issuerDetails.city} {props.invoiceData.issuerDetails.zipCode}</div>
		</div>
		<div class="box2" >
		<div>Miejsce wystawienia: {props.invoiceData.invoiceSpecificData.placeOfIssue}</div>
		<div>Data wystawienia: {props.invoiceData.invoiceSpecificData.issueDate}</div>
		<div>Data sprzedaży: {props.invoiceData.invoiceSpecificData.sellingDate}</div>
		</div>
				<div class="box3" >
		<div>{props.invoiceData.issuerDetails.companyName}</div>
		<div>{props.invoiceData.issuerDetails.street}</div>
		<div>{props.invoiceData.issuerDetails.street} {props.invoiceData.issuerDetails.city} {props.invoiceData.issuerDetails.zipCode}</div>
		<div>NIP: {props.invoiceData.issuerDetails.vatId}</div>
		</div>
					<div class="box4" >
		<div>{props.invoiceData.recipientDetails.companyName}</div>
		<div>{props.invoiceData.recipientDetails.street}</div>
		<div>{props.invoiceData.recipientDetails.street} {props.invoiceData.issuerDetails.city} {props.invoiceData.issuerDetails.zipCode}</div>
		<div>NIP: {props.invoiceData.recipientDetails.vatId}</div>
		</div>

		<div class="box5" >
		<div>Faktura VAT</div>
		<div>orginał / kopia</div>
		<div>Nr {props.invoiceData.invoiceSpecificData.number}</div>
		</div>

		<div class="box6" >
             <table className="table table-borderless table-responsive-sm">
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
                        {renderRows(props.invoiceData.invoiceTableDetails.table)}
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