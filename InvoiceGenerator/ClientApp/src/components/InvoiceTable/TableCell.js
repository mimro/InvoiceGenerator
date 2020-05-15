import React, { Component } from 'react';
import { Name } from './Inputs/Name' ;
import { TextInput} from './Inputs/TextInput';
import { NumberInput } from './Inputs/NumberInput';
import { SelectInput } from './Inputs/SelectInput';
import { Label } from './Inputs/Label';
import { connect } from "react-redux";
import { NameInput, QuantityInput,JmInput,NettoPriceInput,VatInput  } from './Inputs/Inputs';

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
			Name: [NameInput, true,''],
			Quantity: [QuantityInput,true,''],
			jm: [JmInput, true,''],
			NettoPrice: [NettoPriceInput, true,' PLN'],
			NettoValue: [NumberInput, false,''],
			Vat: [VatInput, true, '%'],
			VatValue: [NumberInput, false,''],
			GrossValue: [NumberInput,false,'']
		}
		console.log("value" + this.props.value)
		if (this.props.value === "") {
			this.state.editing = true;
		}
		let current = components[this.props.name];
		const TagName = current[0];
		const isEditable =current[1];
		const additionalDisplayChar = current[2];
		return this.state.editing ?
			<td className="no-pad"><TagName value={this.props.value} ref={this.child} onChange={value=>this.onChange(this.props.id,this.props.name,value)} onBlur={this.onBlur} /></td> :
			<td onClick={() => this.onFocus(isEditable)}>{value + additionalDisplayChar}</td>
	}

	onChange(id,field,value)
	{
	this.props.updateItem(id,field,value);
	
	}
	onFocus(isEditable) {
		if (isEditable) {
			this.setState({ editing: true });
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
		updateItem: (id, field, value) => dispatch(updateItem(id, field, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableCell);