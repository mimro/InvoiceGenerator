const initialState = {
    successSnackbarOpen: false,
    errorSnackbarOpen: false,
    infoSnackbarOpen: false,
    snackBarMessage: ""
};
export default function userInterfaceReducer(state = initialState, action) {
    if (action.type === "SNACKBAR_SUCCESS") {
        console.log(action.payload);
        return {
            ...state,
            successSnackbarOpen: true,
            infoSnackbarOpen: false,
            errorSnackbarOpen: false,
            snackBarMessage: action.payload
        };
    }
    else if (action.type === "SNACKBAR_ERROR") {
        return {
            ...state,
            errorSnackbarOpen: true,
            infoSnackbarOpen: false,
            successSnackbarOpen: false,
            snackBarMessage: action.payload
        };
    }
    else if (action.type === "SNACKBAR_INFO") {
        return {
            ...state,
            infoSnackbarOpen: true,
            successSnackbarOpen: false,
            errorSnackbarOpen: false,
            snackBarMessage: action.payload
        };
    }
    else if (action.type === "SNACKBAR_CLEAR") {
        return {
            ...state,
            successSnackbarOpen: false,
            errorSnackbarOpen: false,
            infoSnackbarOpen: false
        };
    }
    return state;
}

