import { createSlice } from '@reduxjs/toolkit'

const userInterfaceSlice = createSlice({
    name: 'userInterface',
    initialState: {
        successSnackbarOpen: false,
        errorSnackbarOpen: false,
        infoSnackbarOpen: false,
        snackBarMessage: ""
    },
    reducers: {
        snackBarSuccess(state, action) {
            state.successSnackbarOpen = true;
            state.errorSnackbarOpen = false;
            state.infoSnackbarOpen = false;
            state.snackBarMessage = action.payload;
        },
        snackBarError(state, action) {
            state.successSnackbarOpen = false;
            state.errorSnackbarOpen = true;
            state.infoSnackbarOpen = false;
            state.snackBarMessage = action.payload;
        },
        snackBarInfo(state, action) {
            state.successSnackbarOpen = false;
            state.errorSnackbarOpen = false;
            state.infoSnackbarOpen = true;
            state.snackBarMessage = action.payload;
        },
        snackBarClear(state) {
            state.successSnackbarOpen = false;
            state.errorSnackbarOpen = false;
            state.infoSnackbarOpen = false;
            state.snackBarMessage = "";
        }
    }
})

export const { snackBarSuccess, snackBarError, snackBarInfo, snackBarClear } = userInterfaceSlice.actions

export default userInterfaceSlice.reducer