import { createSlice } from '@reduxjs/toolkit'
import { updateInvoiceData } from '../actions'

const recipantSlice = createSlice({
    name: 'recipantDetails',
    initialState: {
        companyName: "",
        address: "",
    },
    reducers: {
        setRecipantDetails(state, action) {
            state[action.payload.name] = action.payload.value;
        }
    },
    extraReducers: {
        [updateInvoiceData]: (state, action) => {
            state.companyName = action.payload.recipantDetails.companyName;
            state.address = action.payload.recipantDetails.address;
        }
    }
})

export const { setRecipantDetails } = recipantSlice.actions

export default recipantSlice.reducer