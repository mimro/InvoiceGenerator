export type Action = {
    name: string,
    val: string
}

export type recipientDetails = {
        companyName: string,
        address: string
};

const initialState: recipientDetails = {
        companyName: "",
        address: ""
};

export default function recipientDetailsReducer(state: recipientDetails = initialState, action: Action) {
    if (action.type === "SET_RECIPIENT_DETAILS") {
        return {...state, [action.name]: action.val};
    }
    else if (action.type === "UPDATE_FETCHED_INVOICE_DETAILS") {
        return Object.assign({}, state, action.payload.recipientDetails);
    }
    return state;
} 

