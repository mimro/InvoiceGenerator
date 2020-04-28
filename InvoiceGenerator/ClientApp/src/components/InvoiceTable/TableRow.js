import React, { Component } from 'react';
import { TableCell } from './TableCell';
import { EditButton } from './EditButton';

export class TableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.value,
        }
        this.calculateData();
    }

    render() {
        return (
            <tr> {this.renderCells()}
                <EditButton id={this.props.id} removeRow={this.props.onRemoveRow} moveRowUp={this.props.onMoveRowUp} moveRowDown={this.props.onMoveRowDown} />
            </tr>
        );
    }
    renderCells() {    
        return ['Name', 'Quantity', 'jm', 'NettoPrice', 'NettoValue', 'Vat', 'VatValue', 'GrossValue'].map(field => (
            <TableCell key={field} id={field} value={this.state.data[field]} onChange={value => this.onChange(value,field)} />
        ))
    }

    onChange(value, field) {
        this.state.data[field] = value;
        this.calculateData();

        this.props.onChange(this.state.data);
    }

    calculateData() {
        this.state.data['NettoValue'] = this.state.data['NettoPrice'] * this.state.data['Quantity'];
        this.state.data['VatValue'] = (this.state.data['NettoValue'] * this.state.data['Vat'].replace("%", ""))/100;
        this.state.data['GrossValue'] = this.state.data['NettoValue'] - this.state.data['VatValue']
        this.props.onChange(this.state.data);
    }
}
