import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl"; // the locale you want
registerLocale("pl", pl); // register it with the name you want

export class InvoiceSpecificData extends Component {

	constructor(props) {
		super(props);
		this.state= {

        }
	}

	render() {

		const style = {
			inputStyleNumber: {
				width: "30%",
				display: "inline-block"

			},

			inputStylePlace: {
				width: "30%",
				display: "inline-block",
				float: "right"
			},

			inputStyle: {
				width: "30%",
				display: "block",
				"margin-top": "10px"
			},

			dateContainer:{
			"margin-top":"10px",
			width:"100%"
			},

			inputStyleDateOfIssue:{
				display:"inline-block",
				float: "left",
				"margin-rigt": "2px"
			},
			
			inputStyleDateOfSelling:{
				display:"inline-block",
				float: "right"
			}

		}
		return (
			<div className="container specificData">
		
				<FormControl style={style.inputStyleNumber} className="invoice-specific-data" placeholder="numer" />
				<FormControl style={style.inputStylePlace} className="invoice-specific-data" placeholder="miejsce wystawienia" />
				<div style={style.dateContainer}>
				<DatePicker style={style.inputStyleDateOfIssue} locale="pl" placeholderText="Data wystawienia" className="form-control" />
					<DatePicker style={style.inputStyleDateOfSelling} locale="pl" placeholderText="Data sprzedarzy" className="form-control" />
					</div>



			</div>
		)
	}
}


