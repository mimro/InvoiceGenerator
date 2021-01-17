import { createSlice } from '@reduxjs/toolkit'
import { updateInvoiceData } from '../actions'

const invoiceDetailsSlice = createSlice({
    name: 'invoiceDetails',
    initialState: {
        number: "",
        issueDate: new Date().toISOString().substr(0, 10),
        sellingDate: "",
    },
    reducers: {
        setInvoiceDetails(state, action) {
            state[action.payload.name] = action.payload.value;
        },
    },
    extraReducers: {
        [updateInvoiceData]: (state, action) => {
            state.number = action.payload.invoiceSpecificData.number;
            state.issueDate = action.payload.invoiceSpecificData.issueDate;
            state.sellingDate = action.payload.invoiceSpecificData.sellingDate;
        }
    }
})

export const { setInvoiceDetails } = invoiceDetailsSlice.actions

export default invoiceDetailsSlice.reducer