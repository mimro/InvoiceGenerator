import React, { Component } from 'react';
import { TableCell } from './TableCell';
import { EditButton } from './EditButton';


export class TableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.value
        }

    }

    render() {
        return (
            <tr value={this.props.value}> {this.renderCells()}

<EditButton/>
            </tr>
        );
    }
    renderCells() {    
        return ['Name', 'Quantity', 'jm', 'NettoPrice', 'NettoValue', 'Vat', 'VatValue'].map(field => (
            <TableCell key={field} value={this.state.data[field]} onChange={value => this.onChange(value,field)} />
        ))
    }

    onChange(value, field) {
        this.state.data[field] = value;

        this.props.onChange(this.state.data);
    }
}
