export type Action = {
    name: string,
    val: string
}

export type invoiceDetailState = {
        number: string,
        issueDate: string,
        sellingDate: string,
        placeOfIssue: string,
};

const initialState: invoiceSpecificData = {
        number: "",
        issueDate: new Date().toISOString().substr(0, 10),
        sellingDate: "",
        placeOfIssue: "",
};

export default function invoiceDetailsReducer(state: invoiceDetailState = initialState, action: Action) {
    if (action.type === "SET_INVOICE_DETAILS") {
        return {...state, [action.name]: action.val};
    }
    return state;
} 

