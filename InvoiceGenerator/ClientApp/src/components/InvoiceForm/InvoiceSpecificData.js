import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import { registerLocale } from "react-datepicker";
import TextField from '@material-ui/core/TextField'
import DatePicker from '@material-ui/pickers'

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
			<div>	
			<TextField id="standard-basic" label="numer" variant="outlined" />
			<TextField id="standard-basic" label="miejsce wystawienia" variant="outlined" />
			<TextField id="date" label="data wystawienia"   type="date"    defaultValue="2017-05-24"   variant="outlined"/>
		</div>
		)
	}
}


