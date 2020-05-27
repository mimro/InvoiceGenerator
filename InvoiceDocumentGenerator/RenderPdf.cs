using jsreport.Binary;
using jsreport.Local;
using jsreport.Types;
using System;
using System.IO;
using System.Threading.Tasks;

namespace InvoiceDocumentGenerator
{
    public class RenderPdf
    {
        public async Task render()
        {
            var rs = new LocalReporting()
                .UseBinary(JsReportBinary.GetBinary())
                .AsUtility()
                .Create();


            var report = await rs.RenderAsync(new RenderRequest
            {
                Template = new Template
                {
                    Recipe = Recipe.ChromePdf,
                    Engine = Engine.Handlebars,
                    Content = @"<style>.invoice-preview-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  width: 14.7cm;
  height: 20.79cm; 
     transform:scale(0.7);
  background-color:#FFF;
    grid-row-gap: 5px;
font-family: 'Times New Roman', Times, serif;
}

.box1{
	  grid-column-start: 1; 
	  font-size:20px;
	  font-weight:bold;
	   font-style: italic;
}

.box2{
	  grid-column-start: 3; 
	  	  font-size:20px;
	  font-weight:bold;
	   font-style: italic;
}

.box3{
	  grid-column-start: 1; 
	  grid-row-start:2;
}

.box4{
	  grid-column-start: 3; 
	  grid-row-start:2;

}

.box5{
	  grid-column-start: 2; 
	  grid-column-end: 2; 

	  grid-row-start:3;
	  	  font-size:30px;
	  font-weight:bold;
}

.box6{
	  grid-column-start: 1; 
	  grid-column-end: 3; 

	  grid-row-start:4;
}</style><body> <div class='invoice-preview-container'>< div class='box1' >
		<div>{props.invoiceData.issuerDetails.companyName
    }</div>
		<div>{props.invoiceData.issuerDetails.street
}</div>
		<div>{props.invoiceData.issuerDetails.city} {props.invoiceData.issuerDetails.zipCode}</div>
		</div>
		<div class='box2' >
		<div>Miejsce wystawienia: {props.invoiceData.invoiceSpecificData.placeOfIssue}</div>
		<div>Data wystawienia: {props.invoiceData.invoiceSpecificData.issueDate}</div>
		<div>Data sprzedaży: {props.invoiceData.invoiceSpecificData.sellingDate}</div>
		</div>
				<div class='box3' >
		<div>{props.invoiceData.issuerDetails.companyName}</div>
		<div>{props.invoiceData.issuerDetails.street}</div>
		<div>{props.invoiceData.issuerDetails.street} {props.invoiceData.issuerDetails.city} {props.invoiceData.issuerDetails.zipCode}</div>
		<div>NIP: {props.invoiceData.issuerDetails.vatId}</div>
		</div>
					<div class='box4' >
		<div>{props.invoiceData.recipientDetails.companyName}</div>
		<div>{props.invoiceData.recipientDetails.street}</div>
		<div>{props.invoiceData.recipientDetails.street} {props.invoiceData.issuerDetails.city} {props.invoiceData.issuerDetails.zipCode}</div>
		<div>NIP: {props.invoiceData.recipientDetails.vatId}</div>
		</div>

		<div class='box5' >
		<div>Faktura VAT</div>
		<div>orginał / kopia</div>
		<div>Nr { props.invoiceData.invoiceSpecificData.number}</div>
		</div>

		<div class='box6' >
             <table className = 'table table-borderless table-responsive-sm' >
                    < thead >

                    < th > Nazwa </ th >
                    < th > Ilość </ th >
                    < th > jm </ th >
                   < th > Cena jednostkowa netto</th>
                      <th>Wartość netto</th>
                   <th>Vat</th>
                      <th>Wartość vat</th>
                    </thead>
                    <tbody>
                        { renderRows(props.invoiceData.invoiceTableDetails.table)}
                    </tbody>
                </table>
		</div>
	</div></body>"
				}
            });

            using (var fs = File.Create("out.pdf"))
            {
                report.Content.CopyTo(fs);
            }
        }
    }
}
