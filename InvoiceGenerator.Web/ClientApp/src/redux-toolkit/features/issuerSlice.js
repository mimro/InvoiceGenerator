import { createSlice } from '@reduxjs/toolkit'
import { updateInvoiceData } from '../actions'

const issuerDetails = createSlice({
    name: 'issuerDetails',
    initialState: {
        companyName: "",
        address: "",
    },
    reducers: {
        setIssuerDetails(state, action) {
            console.log("asdaSD");
            state[action.payload.name] = action.payload.value;
        }
    },
    extraReducers: {
        [updateInvoiceData]: (state, action) => {
            state.companyName = action.payload.issuer.companyName;
            state.address = action.payload.issuer.address;
        }
    }
})

export const { setIssuerDetails } = issuerDetails.actions

export default issuerDetails.reducer