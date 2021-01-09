import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import invoiceHistoryReducer from "./invoiceHistoryReducer";
import widthReducer from "./widthReducer";
import invoiceDetailsReducer from "./invoiceDetailsReducer";
import issuerDetailsReducer from "./issuerDetailsReducer";
import recipientDetailsReducer from "./recipientDetailsReducer";
import invoiceTableDetailsReducer from "./invoiceTableDetailsReducer";
import previewInvoiceReducer from "./previewInvoiceReducer";



const rootReducer = combineReducers({
    width: widthReducer,
	invoiceSpecificData: invoiceDetailsReducer,
	issuerDetails: issuerDetailsReducer,
	recipientDetails: recipientDetailsReducer,
	invoiceTableDetails: invoiceTableDetailsReducer,
	previewInvoice: previewInvoiceReducer,
	invoiceHistory: invoiceHistoryReducer
});

export default rootReducer;