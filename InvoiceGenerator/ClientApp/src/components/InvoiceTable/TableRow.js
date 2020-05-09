import React, { Component } from 'react';
import  TableCell  from './TableCell';
import  EditButton from './EditButton';

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
        this.calculateData();
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
            <TableCell key={field} id={this.state.id} name={field} value={this.state.data[field]} onChange={value => this.onChange(this.state.id,field,value)} />
        ))
    }

    onChange(id, field,value) {
        this.state.data[field] = value;
        this.calculateData();
		this.props.updateItem(value,this.state.data);

        this.props.onChange(this.state.data);
    }

    calculateData() {
        this.state.data.NettoValue = this.state.data.NettoPrice * this.state.data.Quantity;
        this.state.data.VatValue = (this.state.data.NettoValue * this.state.data.Vat.replace("%", ""))/100;
        this.state.data.GrossValue = this.state.data.NettoValue - this.state.data.VatValue;
        this.props.onChange(this.state.data);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        invoiceTableDetails: state.invoiceTableDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return {
		updateItem: (id, value) => dispatch(updateItem(id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);