export type Action = {
    name: string,
    val: string
}

export type recipientDetails = {
        companyName: string,
        vatId: string,
        street: string,
        city: string,
		zipCode:string
};

const initialState: recipientDetails = {
        companyName: "",
        vatId: "",
        street: "",
        city: "",
		zipCode:""
};

export default function recipientDetailsReducer(state: recipientDetails = initialState, action: Action) {
    if (action.type === "SET_RECIPIENT_DETAILS") {
        return {...state, [action.name]: action.val};
    }
    return state;
} 

