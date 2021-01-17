const initialState = {
    companyName: "",
    address:""
};

export default function issuerDetailsReducer(state =initialState, action ) {
    if (action.type === "SET_ISSUER_DETAILS") {
        return {...state, [action.name]: action.val};
    }
    else if (action.type === "UPDATE_FETCHED_INVOICE_DETAILS") {
        return Object.assign({}, state, action.payload.issuerDetails);
    }
    return state;
} 

