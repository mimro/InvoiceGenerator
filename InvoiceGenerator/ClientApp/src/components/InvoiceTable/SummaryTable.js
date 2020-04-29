import React, { Component } from 'react';
import { TableHeader } from './TableHeader';
import './styles/SummaryTable.css'

export class SummaryTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config: {
                properties: ['NettoValueSummary', 'VatValueSummary', 'GrossValueSummary'],
                headers: [
                    "Wartość netto",
                    "Vat",
                    "Wartość brutto",
                    ]
            }
        }
    }

    render() {
        return (
            <table className="table table-borderless table-responsive-sm table-hover summary-table">
                <thead>
                    {this.renderHeaders()}
                </thead>
                <tbody>
                    {this.renderCells()}
                </tbody>
            </table>
        );
    }

    renderHeaders() {
        return this.state.config.headers.map((data, i) => (
            <TableHeader value={data} id={i} />
        ))
    }

    renderCells() {
        return this.props.value.map(field => (
            <td>{field}</td>
        ))
    }
}
