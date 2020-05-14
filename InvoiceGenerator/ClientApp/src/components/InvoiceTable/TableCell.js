import React, { Component } from 'react';
import { Name } from './Inputs/Name' ;
import { TextInput } from './Inputs/TextInput';
import { NumberInput } from './Inputs/NumberInput';
import { SelectInput } from './Inputs/SelectInput';
import { Label } from './Inputs/Label';
import { connect } from "react-redux";

import {
	updateItem,
} from "../../actions";

import './styles/TableCell.css'

type Props = {
   updateItem:Function,
};
class TableCell extends Component {

    constructor(props) {
        super(props);
		this.state = { editing: false };
		this.child = React.createRef();

		this.onBlur = this.onBlur.bind(this)
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
		console.log("value" + this.props.value)
		if (this.props.value === "") {
			this.state.editing = true;
		}
		let current = components[this.props.name];
		const TagName = current[0];
		const isEditable =current[1];
		return this.state.editing ?
			<td className="no-pad"><TagName value={this.props.value} ref={this.child} onChange={this.props.onChange} onBlur={this.onBlur} /></td> :
			<td onClick={() => this.onFocus(isEditable)}>{value}</td>
	}

	onChange(id,field,value)
	{
	console.log(id+"  " +field+"  "+value);
	this.props.updateItem(id,field,3);
	
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

function mapStateToProps(state, ownProps) {
    return {
        invoiceTableDetails: state.invoiceTableDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return {
		updateItem: (id, name, value) => dispatch(updateItem(id, name, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableCell);