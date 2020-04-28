import React, { Component } from 'react';
import { InputField } from './InputField';
import './styles/TableCell.css'

export class TableCell extends Component {

    constructor(props) {
        super(props);
        this.state = { editing: false };
    }

	render() {

		const { value, onChange } = this.props;
		if (this.props.value === "") {
			this.state.editing = true;
        }
		return this.state.editing ?
			<td className="no-pad">{this.generateInput()}</td> :
			<td onClick={() => this.onFocus()}>{value}</td>
	}
	generateInput() {
		const { value, onChange, id } = this.props;
	
			if (id === "jm")
			{
				return <select id="jm" name="jm" ref='input' value={value} onChange={e => onChange(e.target.value)} onBlur={e => this.onBlur()}>
					<option value="ryczałt">ryczałt</option>
					<option value="km">km</option>
					<option value="szt">szt</option>
				</select>
			}
				else {
				return <input className="form-control editor edit-text" type={this.getType(this.props.id)} ref='input' value={value} onChange={e => onChange(e.target.value)} onBlur={e => this.onBlur()} />
		}
		
	}

	onFocus() {
		this.setState({ editing: true }, () => this.refs.input.focus());
	}

	onBlur() {
		this.setState({ editing: false });
	}

	getType(id) {
		if (id === "Quantity" || id === "NettoPrice" || id === "NettoValue" || id === "VatValue") {
			return "number"
		}
		else {
			return "text"
        }
	}


}


