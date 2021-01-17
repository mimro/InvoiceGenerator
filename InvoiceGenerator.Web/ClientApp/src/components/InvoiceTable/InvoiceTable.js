import React, { Component } from 'react';
import TableRow from './TableRow';
import './styles/Table.css'
import { TableHeader } from './TableHeader';
import SummaryTable from './SummaryTable';
import { Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import { connect } from "react-redux";
import tableConfig from "./TableConfig"

//import {
//    addItem,
//    updateItem,
//    calculateTable
//} from "../../redux-legacy/actions";

import { addItem } from "../../redux-toolkit/features/invoieTableSlice";

class InvoiceTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            config: tableConfig
        }
    }
    render() {
        return (
            <div className="invoice-table-grid-container">
                <table id="invoice-table" className="table table-borderless table-responsive-sm table-responsive-md table-hover">
                    <thead>
                        <tr>
                            {this.renderHeaders()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>

                <Tooltip title="Dodaj wiersz" aria-label="add" onClick={() => this.addEmptyRow()}>
                    <Fab color="secondary">
                        <AddIcon />
                    </Fab>
                </Tooltip>
                <SummaryTable />
                <div id="amount-in-words" >
                    Kwota słownie: {this.props.invoiceTableDetails.AmountInWords}
                </div>
            </div>
        );
    }

    renderHeaders() {
        return this.state.config.headers.map((data, i) => (
            <TableHeader value={data} id={i} key={i} />
        ))
    }

    renderRows() {
        let { invoiceTableDetails } = this.props;
        return invoiceTableDetails.table.map((data, i) => (
            <TableRow key={data.id} id={i} value={data}  onMoveRowUp={this.moveRowUp} onMoveRowDown={this.moveRowDown} />
        ))

    }

    addEmptyRow() {
        this.props.addItem()
    }
}

function mapStateToProps(state, ownProps) {
    return {
        invoiceTableDetails: state.invoiceTableDetails,
        width: state.width
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (id, value) => dispatch(addItem(id, value)),
       // updateItem: (id, name, value) => dispatch(updateItem(id, name, value)),
      // calculateTable: () => dispatch(calculateTable()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceTable);
