import React, { Component } from 'react';
import { TableRow } from './TableRow';
import { Button } from 'reactstrap';
import './styles/Table.css'
import { TableHeader } from './TableHeader';
import { SummaryTable } from './SummaryTable';

export class InvoiceTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            invoiceData: this.props.invoiceData,
            config: this.props.config
        }

        this.removeRow = this.removeRow.bind(this);
        this.moveRowUp = this.moveRowUp.bind(this);
        this.moveRowDown = this.moveRowDown.bind(this);

        this.SumValues = this.SumValues.bind(this);
    }
    render() {
        return (
            <div className="container">
                <table className="table table-borderless table-responsive-sm table-hover">
                    <thead>
                        {this.renderHeaders()}
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                <Button onClick={() => this.addEmptyRow()}>+</Button>
                <SummaryTable value={this.SumValues()} />
            </div>
        );
    }

    renderHeaders() {
        return this.state.config.headers.map((data, i) => (
            <TableHeader value={data} id={i} />
        ))
    }

    renderRows() {
        return this.state.invoiceData.map((data, i) => (
            <TableRow key={data.id} id={i} value={data} onChange={value => this.onChange(data, value)} onRemoveRow={this.removeRow} onMoveRowUp={this.moveRowUp} onMoveRowDown={this.moveRowDown} />
        ))

    }

    onChange(data, value) {
        this.setState({ [data]: value })
    }

    addEmptyRow() {
        this.setState({
            invoiceData: this.state.invoiceData.concat({
                "id": this.state.invoiceData.length + 1, // TODO - fix key repetition
                "Name": "",
                "Quantity": "",
                "jm": "",
                "NettoPrice": "",
                "NettoValue": "",
                "Vat": "23%",
                "VatValue": ""
            })

        });
    }

    removeRow(rowId) {
        const newlist = this.state.invoiceData;
        newlist.splice(rowId, 1);


        this.setState({ invoiceData: newlist });
    }

    moveRowUp(rowId) {

        var moveUpArray = this.state.invoiceData;
        if (rowId !== -1 && rowId !== 0) {
            var index = rowId;
            var f = moveUpArray.splice(index, 1)[0];
            moveUpArray.splice(index - 1, 0, f);
            this.setState({ invoiceData: moveUpArray });
        }
    }

    moveRowDown(rowId) {
        var moveDownArray = this.state.invoiceData;
        if (rowId !== -1 && rowId !== this.state.invoiceData.length) {
            var index = rowId;
            var f = moveDownArray.splice(index, 1)[0];
            moveDownArray.splice(index + 1, 0, f);
            this.setState({ invoiceData: moveDownArray });
        }
    }

    SumValues() {
        var sumNV = 0;
        this.state.invoiceData.forEach((x) => {
            sumNV += x.NettoValue;
        });

        var sumVV = 0;
        this.state.invoiceData.forEach((x) => {
            sumVV += x.VatValue;
        });

        var sumGV = 0;
        this.state.invoiceData.forEach((x) => {
            sumGV += x.GrossValue;
        });
        return [sumNV, sumVV, sumGV];
    }
}


