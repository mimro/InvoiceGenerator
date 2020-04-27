import React, { Component } from 'react';
import { TableRow } from './TableRow';
import { Button } from 'reactstrap';

export class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            invoiceData: [
                {
                    "id": 1,
                    "Name": "STR19/01877",
                    "Quantity": "1",
                    "jm": "Ryczalt",
                    "NettoPrice": "850",
                    "NettoValue": "850",
                    "Vat": "23%",
                    "VatValue": "195"
                },
                {
                    "id": 2,
                    "Name": "Nazwa2",
                    "Quantity": "5",
                    "jm": "Ryczalt",
                    "NettoPrice": "400",
                    "NettoValue": "222",
                    "Vat": "23%",
                    "VatValue": "777"
                },
                {
                    "id": 3,
                    "Name": "Nazwa3",
                    "Quantity": "4",
                    "jm": "Ryczalt",
                    "NettoPrice": "400",
                    "NettoValue": "222",
                    "Vat": "23%",
                    "VatValue": "777"
                }
            ]
        }

        this.removeRow = this.removeRow.bind(this);
        this.moveRowUp = this.moveRowUp.bind(this);
        this.moveRowDown = this.moveRowDown.bind(this);
    }

  render () {
    return (
        <div className="container">
            <table className="table table-borderless table-responsive-sm table-hover">
                <thead>
                    <th>Nazwa</th>
                    <th>Ilosc</th>
                    <th>jm</th>
                    <th>Cena jednostkowa netto</th>
                    <th>Wartosc netto</th>
                    <th>Vat</th>
                    <th>Wartosc vat</th>
                    <th>Edytuj</th>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>

            <Button onClick={() => this.addEmptyRow()}>+</Button>
        </div>
    );
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

    removeRow(rowId)
    {
        const newlist = this.state.invoiceData;
        newlist.splice(rowId, 1);
  

        this.setState({ invoiceData: newlist});
    }

    moveRowUp(rowId) { 
        
        var moveUpArray = this.state.invoiceData;
        if (rowId !== -1 && rowId !==0) {
            var index = rowId;
            var f = moveUpArray.splice(index, 1)[0];
            moveUpArray.splice(index - 1, 0, f);
            this.setState({ invoiceData: moveUpArray});
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
}


