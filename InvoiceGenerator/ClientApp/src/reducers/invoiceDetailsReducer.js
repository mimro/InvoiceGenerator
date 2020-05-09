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

let today = new Date();
const initialState: invoiceSpecificData = {
        number: "",
        issueDate: today.getFullYear()+'-0'+(today.getMonth()+1)+'-0'+today.getDate(),
        sellingDate: "",
        placeOfIssue: "",
};

export default function invoiceDetailsReducer(state: invoiceDetailState = initialState, action: Action) {
    if (action.type === "SET_INVOICE_DETAILS") {
        return {...state, [action.name]: action.val};
    }
    return state;
} 

