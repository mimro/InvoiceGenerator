import React, { Component } from 'react';
import TableCell from './TableCell';
import EditButton from './EditButton';
import tableConfig from './TableConfig'

export default class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                {
                    this.renderCells()
                }
                <EditButton id={this.props.id} />
            </tr>
        );
    }

    renderCells() {
        return tableConfig.properties.map((field, i) => (
            <TableCell key={i} id={this.props.id} name={field.name} value={this.props.value[field.name]} />
        ))
    }

}