import React from 'react';
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
//import { snackBarSuccess, snackBarError, snackBarInfo, snackBarClear } from "../../../redux-legacy/actions";
import { snackBarSuccess, snackBarError, snackBarInfo, snackBarClear } from "../../../redux-toolkit/features/userInterfaceSlice";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class MessageSnackBar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let { successSnackbarOpen, errorSnackbarOpen, infoSnackbarOpen } = this.props.userInterface;
        return (
            <Snackbar style={{width:'400px'}} open={successSnackbarOpen || errorSnackbarOpen || infoSnackbarOpen}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                autoHideDuration={4000}
                onClose={() => this.handleClose()}
            >
                <Alert onClose={() => this.handleClose()} severity={successSnackbarOpen ?
                    "success" : errorSnackbarOpen ? "error" : infoSnackbarOpen ? "info" : "info"}>
                    {this.props.userInterface.snackBarMessage}
                </Alert>
            </Snackbar>
        );
    }

    handleClose() {
        this.props.snackBarClear()
    }
}


function mapDispatchToProps(dispatch) {
    return {
        snackBarSuccess: (message) => dispatch(snackBarSuccess(message)),
        snackBarError: (message) => dispatch(snackBarError(message)),
        snackBarInfo: (message) => dispatch(snackBarInfo(message)),
        snackBarClear: () => dispatch(snackBarClear())
    }
}

function mapStateToProps(state, ownProps) {
    return {
        userInterface: state.userInterface,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageSnackBar);