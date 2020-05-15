import React, { Component } from 'react';
import  TableRow  from './TableRow';
import { Button } from 'reactstrap';
import './styles/Table.css'
import { TableHeader } from './TableHeader';
import  SummaryTable  from './SummaryTable';
import {Tooltip,Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import { connect } from "react-redux";

import {
    addItem,
	updateItem,
	setWidth,
	calculateTable
} from "../../actions";

type Props = {
  invoiceTableDetails:{
	table: Array,
	NettoValueSum:?number,
	VatValueSum:?number,
	GrossValueSum:?number
},
   addItem:Function,
   updateItem:Function,
   calculateTable:Function
};

 class InvoiceTable extends Component {

    constructor(props: Props) {
        super(props)
        this.state = {
            invoiceData: this.props.invoiceTableDetails.table,
            config: this.props.config
        }
    }
    render() {
        return (
            <div className="container">
                <table className="table table-borderless table-responsive-sm table-responsive-md table-hover">
                    <thead>
                        {this.renderHeaders()}
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
            </div>
        );
    }

    renderHeaders() {
        return this.state.config.headers.map((data, i) => (
            <TableHeader value={data} id={i} />
        ))
    }

    renderRows() {
	let {invoiceTableDetails} =this.props;
        return invoiceTableDetails.table.map((data, i) => (
            <TableRow key={data.id} id={i} value={data} onChange={this.props.calculateTable} onMoveRowUp={this.moveRowUp} onMoveRowDown={this.moveRowDown} />
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
		updateItem: (id, name, value) => dispatch(updateItem(id, name, value)),
		calculateTable:  () => dispatch(calculateTable()),
        setWidth: (width) => dispatch(setWidth(width))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceTable);
