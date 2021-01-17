import { createAction } from '@reduxjs/toolkit';
import { INVOICE_HISTORY_URL } from '../../Resources/endpoints_LOCAL'
import { fetchInvoiceHistoryList } from "../features/invoiceHistorySlice";
//import { snackBarSuccess, snackBarError } from "../../redux-legacy/actions";
import { snackBarSuccess, snackBarError } from "../features/userInterfaceSlice";

import axios from 'axios';
export const updateInvoiceData = createAction('updateInvoiceData');


export function postInvoiceData(invoiceHistory) {
    return async dispatch => {
        try {
            await axios({
                method: 'post',
                url: INVOICE_HISTORY_URL,
                data: {
                    "invoiceNumber": invoiceHistory.invoiceNumber,
                    "invoiceData": invoiceHistory.invoiceData
                }
            }
            ).then(response => {
                //dispatch(postInvoiceDataSuccess(response))
                dispatch(fetchInvoiceHistoryList())
                dispatch(snackBarSuccess("Poprawnie zapisano dane faktury"))
            }
            );
        }
        catch (e) {
            console.log(e);
            dispatch(snackBarError("Wystapil blad podczas zapisywania faktury"))

        }
    }
}