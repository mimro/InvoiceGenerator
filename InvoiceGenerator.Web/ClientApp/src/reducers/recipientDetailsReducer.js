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
    return state;
} 

