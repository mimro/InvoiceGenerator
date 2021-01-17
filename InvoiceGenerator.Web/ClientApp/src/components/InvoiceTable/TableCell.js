import React, { Component } from 'react';
import { NumberInput } from './Inputs/NumberInput';
import { connect } from "react-redux";
import { NameInput, QuantityInput,JmInput,NettoPriceInput,VatInput  } from './Inputs/Inputs';

//import {
//	updateItem,
//} from "../../redux-legacy/actions";
import {
	updateItem,
	changeEditingState
} from "../../redux-toolkit/features/invoieTableSlice";

import './styles/TableCell.css'


class TableCell extends Component {

    constructor(props) {
		super(props);
		this.state = { editing: this.props.invoiceTable.editing };

		this.onBlur = this.onBlur.bind(this)
    }


	render() {
		

		const { value } = this.props;

		const components = {
			Name: [NameInput, true,''],
			Quantity: [QuantityInput,true,''],
			jm: [JmInput, true,''],
			NettoPrice: [NettoPriceInput, true,' PLN'],
			NettoValue: [NumberInput, false,' PLN'],
			Vat: [VatInput, true, '%'],
			VatValue: [NumberInput, false, ' PLN'],
			GrossValue: [NumberInput, false, ' PLN']
		}

		if (this.props.value === "")
		this.state.editing = true

		let current = components[this.props.name];
		const TagName = current[0];
		const isEditable = current[1];
		const additionalDisplayChar = current[2];
		return (this.state.editing && this.props.invoiceTable.editing) ?
			<td className="no-pad"><TagName value={this.props.value} ref={this.child} onChange={value=>this.onChange(this.props.id,this.props.name,value)} onBlur={this.onBlur} /></td> :
			<td className = "displayValue" onClick={() => this.onFocus(isEditable)}>{value + additionalDisplayChar}</td>
	}

	onChange(id,field,value)
	{
	this.props.updateItem(id,field,value);
	}
	onFocus(isEditable) {
		if (isEditable) {
			this.setState({ editing: true });
			this.props.changeEditingState(true)
		}
	}

	onBlur() {
		this.setState({ editing: false });
	}
	componentDidMount() {
    this.setState({ editing: false });
	}


}

function mapStateToProps(state) {
    return {
        invoiceTable: state.invoiceTable,
    }
}

function mapDispatchToProps(dispatch) {
    return {
		updateItem: (id, field, value) => dispatch(updateItem({ id, field, value })),
		changeEditingState: (isEditing) => dispatch(changeEditingState(isEditing ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableCell);