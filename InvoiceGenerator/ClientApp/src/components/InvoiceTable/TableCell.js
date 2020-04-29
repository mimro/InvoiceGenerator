import React, { Component } from 'react';
import { Name } from './Inputs/Name' ;
import { TextInput } from './Inputs/TextInput';
import { NumberInput } from './Inputs/NumberInput';
import { SelectInput } from './Inputs/SelectInput';

import './styles/TableCell.css'


export class TableCell extends Component {

    constructor(props) {
        super(props);
		this.state = { editing: false };
		this.child = React.createRef();

		this.onBlur = this.onBlur.bind(this)
    }

	render() {

		const { value, onChange } = this.props;

		const components = {
			Name: TextInput,
			Quantity: NumberInput,
			jm: SelectInput,
			NettoPrice:NumberInput,
			NettoValue: NumberInput,
			Vat:NumberInput,
			VatValue:NumberInput,
			GrossValue:NumberInput
		}

		if (this.props.value === "") {
			this.state.editing = true;
		}

		const TagName = components[this.props.id];

		return this.state.editing ?
			<td className="no-pad"><TagName value={this.props.value} ref={this.child} onChange={this.props.onChange} onBlur={this.onBlur} /></td> :
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
				return <input className="form-control editor edit-text" type={this.getType(this.props.id)} ref='input' value={value} onChange={this.props.onChange}  />
		}
		
	}

	onFocus() {
		this.setState({ editing: true }, () => { this.child.current.onFocus() });
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


