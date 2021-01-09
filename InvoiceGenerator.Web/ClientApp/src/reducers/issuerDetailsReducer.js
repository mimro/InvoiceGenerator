export type Action = {
    name: string,
    val: string
}

export type issuerDetails = {
    companyName: string,
    address:string
};

const initialState: issuerDetails = {
    companyName: "",
    address:""
};

export default function issuerDetailsReducer(state: issuerDetails = initialState, action: Action) {
    if (action.type === "SET_ISSUER_DETAILS") {
        return {...state, [action.name]: action.val};
    }
    return state;
} 

