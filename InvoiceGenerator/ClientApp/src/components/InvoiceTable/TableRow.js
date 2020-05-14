import React, { Component } from 'react';
import  TableCell  from './TableCell';
import  EditButton from './EditButton';
import { $,multiply,divide,minus } from 'moneysafe';

import { connect } from "react-redux";

import {
	updateItem,
} from "../../actions";

type Props = {
   updateItem:Function,
};

 class TableRow extends Component {

    constructor(props:Props) {
        super(props);
        this.state = {
            data: this.props.value,
			id:this.props.id,
        }
    }

    render() {
        return (
            <tr>{this.renderCells()}
                <EditButton id={this.props.id} removeRow={this.props.onRemoveRow} moveRowUp={this.props.onMoveRowUp} moveRowDown={this.props.onMoveRowDown} />
            </tr>
        );
    }
    renderCells() {    
        return ['Name', 'Quantity', 'jm', 'NettoPrice', 'NettoValue', 'Vat', 'VatValue', 'GrossValue'].map(field => (
            <TableCell key={field} id={this.props.id} name={field} value={this.props.value[field]} onChange={value => this.onChange(this.props.id,field,value)} />
        ))
    }

    onChange(id, field,value) {

	console.log(id+"  " +field+"  "+value);

        this.state.data[field] = value;

		this.props.updateItem(id,field,value);


    }
}

function mapStateToProps(state, ownProps) {
    return {
        invoiceTableDetails: state.invoiceTableDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return {
		updateItem: (id, field,val) => dispatch(updateItem(id, field,val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);