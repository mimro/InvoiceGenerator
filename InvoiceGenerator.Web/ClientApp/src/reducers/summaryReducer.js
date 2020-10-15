export const steps = {
    CREATION: 1,
    TEMPLATE_SELECTION: 2,
    INVOICE_DONWLOAD:3,
};

export type Action = {
    name: string,
    val: string
}

export type summaryDetails = {
    step: 0,
};

export default function summeryReducer(state: summaryDetails = initialState, action: Action) {
    if (action.type === "SET_RECIPIENT_DETAILS") {
        return { ...state, [action.name]: action.val };
    }
    return state;
}

