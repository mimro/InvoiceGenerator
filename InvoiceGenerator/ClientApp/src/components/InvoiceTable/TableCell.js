import React, { Component } from 'react';
import { Name } from './Inputs/Name' ;
import { TextInput } from './Inputs/TextInput';
import { NumberInput } from './Inputs/NumberInput';
import { SelectInput } from './Inputs/SelectInput';
import { Label } from './Inputs/Label';


import './styles/TableCell.css'


export class TableCell extends Component {

    constructor(props) {
        super(props);
		this.state = { editing: false };
		this.child = React.createRef();

		this.onBlur = this.onBlur.bind(this)
    }

	const styles={
	editableInput:{
	
	}
	}

	render() {

		const { value, onChange } = this.props;

		const components = {
			Name: [TextInput, true],
			Quantity: [NumberInput,true],
			jm: [SelectInput, true],
			NettoPrice: [NumberInput, true],
			NettoValue: [NumberInput, false],
			Vat: [TextInput, true],
			VatValue: [NumberInput, false],
			GrossValue: [NumberInput,false]
		}

		if (this.props.value === "") {
			this.state.editing = true;
		}
		let current = components[this.props.id];
		const TagName = current[0];
		const isEditable =current[1];
		return this.state.editing ?
			<td className="no-pad"><TagName value={this.props.value} ref={this.child} onChange={this.props.onChange} onBlur={this.onBlur} /></td> :
			<td onClick={() => this.onFocus(isEditable)}>{value}</td>
	}


	onFocus(isEditable) {
		if (isEditable) {
			this.setState({ editing: true }, () => { this.child.current.onFocus() });
		}
	}

	onBlur() {
		this.setState({ editing: false });
	}
}


