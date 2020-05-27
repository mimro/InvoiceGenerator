import React, { Component } from 'react';
import  TableCell  from './TableCell';
import  EditButton from './EditButton';

export default class TableRow extends Component {

    constructor(props:Props) {
        super(props);

    }

    render() {
        return (
            <tr>
				{
					this.renderCells()
				}
                <EditButton id={this.props.id}   />
            </tr>
        );
    }

    renderCells() {    
        return ['Name', 'Quantity', 'jm', 'NettoPrice', 'NettoValue', 'Vat', 'VatValue', 'GrossValue'].map(field => (
            <TableCell key={field} id={this.props.id} name={field} value={this.props.value[field]} />
        ))
    }

}