const history = {
    creationDate: "",
    invoiceNumber: "",
    jsonEncodedInvoice: "",
}
const initialState= {
    table: [history],
    isLoading: true,
    error: "",
    selectedListItemIndex:-1
}

const invoiceHistoryReducer = (state = initialState, action) => {
    if (action.type === 'FETCH_INVOICE_HISTORY_SUCCESS') {
        return Object.assign({}, state, {
            table: action.payload.history,
            isLoading: false
        });
    }
    else if (action.type === "SET_INVOICE_HISTORY_LOADING") {
        return Object.assign({}, state, {
            isLoading: action.payload,
        }); 
    }
    else if (action.type === "SELECT_LIST_ITEM") {
        return Object.assign({}, state, {
            selectedListItemIndex: action.payload,
        });
    }
    else
        return state
}



export default invoiceHistoryReducer