import React, { Component } from 'react';
import { TableHeader } from './TableHeader';
import './styles/SummaryTable.css'
import { connect } from "react-redux";



 class SummaryTable extends Component {

    constructor(props ) {
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
	let {invoiceTableDetails} = this.props;
        return (
            <table className="table table-borderless table-responsive-sm table-hover summary-table">
                <thead>
                    {this.renderHeaders()}
                </thead>
                <tbody>
                    <td>{invoiceTableDetails.NettoValueSum}</td>
                    <td>{invoiceTableDetails.VatValueSum}</td>
                    <td>{invoiceTableDetails.GrossValueSum}</td>
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

function mapStateToProps(state, ownProps) {
    return {
        invoiceTableDetails: state.invoiceTableDetails,
    }
}

export default connect(mapStateToProps)(SummaryTable);
