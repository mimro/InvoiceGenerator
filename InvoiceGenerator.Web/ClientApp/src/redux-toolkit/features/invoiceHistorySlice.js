import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const history = {
    creationDate: "",
    invoiceNumber: "",
    jsonEncodedInvoice: "",
}
const initialState = {
    table: [history],
    isLoading: false,
    error: "",
    selectedListItemIndex: -1
}
export const fetchInvoiceHistoryList = createAsyncThunk(
    'invoiceHistory/fetchInvoiceHistoryList',
    async (thunkAPI) => {
        console.log('thunk test');
        return await axios.get('http://localhost:3003/api/invoicehistory').then(response => response.data );

    }
);

const invoiceHistorySlice = createSlice({
    name: 'invoiceHistory',
    initialState: initialState,
    reducers: {
        [fetchInvoiceHistoryList.pending]: (state) => {
            console.log('thunk pending')
            state.isLoading = true
        },
        [fetchInvoiceHistoryList.fulfilled]: (state, action) => {
            console.log('fetch test3')
            state.isLoading = false
            state.table = action.payload
        },
        getHistoryListFailure(state, action) {
            state.isLoading = false
            state.error = action.payload
        },

        selectListItem(state, action) {
            state.selectedListItemIndex = action.payload.id
        }
    }

});

//export function fetchInvoiceHistoryList() {
//    console.log('fetch test')
//    return async dispatch => {
//        dispatch(getHistoryList());
//        try {
//            await axios.get('http://localhost:3003/api/invoicehistory').then(response =>
//                dispatch(getHistoryListSuccess(response.data))
//            );
//        }
//        catch (e) {
//            dispatch(getHistoryListFailure(e));
//            console.log(e);
//        }
//    }
//}



export const fetchInvoiceHistoryById = createAsyncThunk(
    'invoiceHistory/fetchInvoiceHistoryById',
    async (thunkApi) => {
        const response = await axios.get('http://localhost:3003/api/invoicehistory').then(response => { return response.data }
        );
    }
)



export const { selectListItem, getHistoryList, getHistoryListSuccess, getHistoryListFailure } = invoiceHistorySlice.actions

export default invoiceHistorySlice.reducer