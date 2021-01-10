import { combineReducers } from "redux";

import invoiceHistoryReducer from "./invoiceHistoryReducer";
import invoiceDetailsReducer from "./invoiceDetailsReducer";
import issuerDetailsReducer from "./issuerDetailsReducer";
import recipientDetailsReducer from "./recipientDetailsReducer";
import invoiceTableDetailsReducer from "./invoiceTableDetailsReducer";


const rootReducer = combineReducers({
	invoiceSpecificData: invoiceDetailsReducer,
	issuerDetails: issuerDetailsReducer,
	recipientDetails: recipientDetailsReducer,
	invoiceTableDetails: invoiceTableDetailsReducer,
	invoiceHistory: invoiceHistoryReducer
});

export default rootReducer;