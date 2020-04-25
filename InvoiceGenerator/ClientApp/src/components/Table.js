import React, { Component } from 'react';
import { TableRow } from './TableRow';
import { Button } from 'reactstrap';

export class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            invoiceData: [
                {
                    "Name": "Nazwa",
                    "Quantity": "Ilosc",
                    "jm": "jm",
                    "NettoPrice": "Cena netto",
                    "NettoValue":"123",
                    "Vat": "23%",
                    "VatValue": "400"
                },
                {
                    "Name": "Nazwa2",
                    "Quantity": "Ilosc2",
                    "jm": "jm2",
                    "NettoPrice": "Cena netto2",
                    "NettoValue": "222",
                    "Vat": "23%",
                    "VatValue": "777"
                },
                {
                    "Name": "Nazwa2",
                    "Quantity": "Ilosc2",
                    "jm": "jm2",
                    "NettoPrice": "Cena netto2",
                    "NettoValue": "222",
                    "Vat": "23%",
                    "VatValue": "777"
                }
            ]
        }
    }

  render () {
    return (
        <div className="container">
            <table className="table table-bordered table-responsive-sm table-hover">
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
            <TableRow key={i} value={data} onChange={value => this.onChange(data,value)} />
        ))

    }

    onChange(data,value) {
       this.setState({ [data]: value })
    }

    addEmptyRow() {
        this.setState({
            invoiceData: this.state.invoiceData.concat({
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
}
