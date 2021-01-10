export type invoiceDetailState = {
        number: string,
        issueDate: string,
        sellingDate: string,
};

const initialState: invoiceSpecificData = {
        number: "",
        issueDate: new Date().toISOString().substr(0, 10),
        sellingDate: "",
};

export default function invoiceDetailsReducer(state: invoiceDetailState = initialState, action) {
    if (action.type === "SET_INVOICE_DETAILS") {
        return {...state, [action.name]: action.val};
    }
    else if (action.type === "UPDATE_FETCHED_INVOICE_DETAILS") {
        return Object.assign({}, state, action.payload.invoiceSpecificData);
    }
    return state;
} 

