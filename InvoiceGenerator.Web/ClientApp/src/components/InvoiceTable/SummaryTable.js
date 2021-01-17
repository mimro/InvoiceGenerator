import React, { Component } from 'react';
import { TableHeader } from './TableHeader';
import './styles/SummaryTable.css'
import { connect } from "react-redux";



class SummaryTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config: {
                properties: ['NettoValueSum', 'VatValueSum', 'GrossValueSum'],
                headers: [
                    "Wartość netto",
                    "Vat",
                    "Wartość brutto",
                ]
            }
        }
    }

    render() {
        let { invoiceTable } = this.props;
        return (
            <table id="summary-table" className="table table-borderless table-responsive-sm table-hover">
                <thead>
                    <tr>
                        {this.renderHeaders()}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{invoiceTable.NettoValueSum}</td>
                        <td>{invoiceTable.VatValueSum}</td>
                        <td>{invoiceTable.GrossValueSum}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    renderHeaders() {
        return this.state.config.headers.map((data, i) => (
            <TableHeader value={data} id={i} key={i} />
        ))
    }

    renderCells() {
        return this.props.value.map(field => (
            <td>{field}</td>
        ))
    }
}

function mapStateToProps(state, ownProps) {
    return {
        invoiceTable: state.invoiceTable,
    }
}

export default connect(mapStateToProps)(SummaryTable);
