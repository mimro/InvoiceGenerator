import { createSlice } from '@reduxjs/toolkit'

const newRow = (id) => {
    return {
        "id": id,
        "Name": "",
        "Quantity": "",
        "jm": "",
        "NettoPrice": "",
        "NettoValue": 0,
        "Vat": "23",
        "VatValue": 0,
        "GrossValue": 0
    }
}
const initialStateRow = {
    "id": 1,
    "Name": "",
    "Quantity": "",
    "jm": "",
    "NettoPrice": "",
    "NettoValue": 0,
    "Vat": "23",
    "VatValue": 0,
    "GrossValue": 0
}

const initialState = {
    table: [initialStateRow],
    NettoValueSum: 0,
    VatValueSum: 0,
    GrossValueSum: 0,
    AmountInWords: "",
    payedOff: true
}

const invoiceTableSlice = createSlice({
    name: 'invoiceTable',
    initialState: initialState,
    reducers: {
        addItem(state) {
            state.table.push(newRow(state.table.length + 1))
        },
        removeItem(state, action) {
            state.table.splice(action.payload.id, 1);
        },
        updateItem(state, action) {
            let { id, field } = action.payload;
            let summaryValues = { NettoValueSum: 0, VatValueSum: 0, GrossValueSum: 0 };
            console.log("value "+ action.payload.value);

            //state.table.splice(id,)


            state.table[id] = initialStateRow;
            //state.table[id][field] = action.payload.value;
            //console.log(state.table[id][field]);
        }
    }
});




export const { addItem, removeItem, updateItem } = invoiceTableSlice.actions

export default invoiceTableSlice.reducer