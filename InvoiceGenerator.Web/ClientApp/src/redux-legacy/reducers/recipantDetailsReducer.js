export type Action = {
    name: string,
    val: string
}

export type recipantDetails = {
        companyName: string,
        address: string
};

const initialState: recipantDetails = {
        companyName: "",
        address: ""
};

export default function recipantDetailsReducer(state: recipantDetails = initialState, action: Action) {
    if (action.type === "SET_REcipant_DETAILS") {
        return {...state, [action.name]: action.val};
    }
    else if (action.type === "UPDATE_FETCHED_INVOICE_DETAILS") {
        return Object.assign({}, state, action.payload.recipantDetails);
    }
    return state;
} 

