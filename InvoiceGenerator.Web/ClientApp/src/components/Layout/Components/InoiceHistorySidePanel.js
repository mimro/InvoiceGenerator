import React from 'react';
import '../Styles/SidePanel.css'
import Paper from '@material-ui/core/Paper'
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
//import { fetchInvoiceHistoryList, selectListItem, fetchInvoiceHistoryById } from "../../../redux-legacy/actions";
import { fetchInvoiceHistoryList, fetchInvoiceHistoryById, selectListItem  } from "../../../redux-toolkit/features/invoiceHistorySlice";
//import { snackBarSuccess, snackBarError } from "../../../redux-legacy/actions";
import { snackBarSuccess, snackBarError } from "../../../redux-toolkit/features/userInterfaceSlice";

import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FETCH_INVOICE_HISTORY_FULLFILLED, FETCH_ERROR, INVOICE_HISTORY_LABEL} from '../../../Resources/wordings_PL'

class InoiceHistorySidePanel extends React.Component {

    render() {

        return (
            <Paper elevation={6}>
                <h4 className="invoice-history-header">{INVOICE_HISTORY_LABEL} <IconButton color="primary" aria-label="refresh" component="span" onClick={() => this.reloadData()}><RefreshOutlinedIcon color="primary" /></IconButton></h4>
                {
                    this.props.history.isLoading === true &&
                    <CircularProgress style={{ marginLeft: '20px' }} />
                }
                <List>
                    {this.renderList()}
                </List>
            <div>
                </div>
            </Paper>
        );
    }

    componentDidMount() {
        this.props.fetchData()
            .then(this.props.snackBarSuccess(FETCH_INVOICE_HISTORY_FULLFILLED))
            .catch(() => { this.props.snackBarError(FETCH_ERROR) });
    }

    reloadData() {
        this.props.fetchData();
    }

    handleListItemClick = (
        event,
        id
    ) => {
        this.props.setSelectedIndex(id);
        this.props.fetchInvoiceHistoryById(id)
    };

    renderList() {
        let { history } = this.props;
        return history.table.map((data, i) => (

            <ListItem button key={i} 
                selected={history.selectedListItemIndex === data.id}
                onClick={(event, id) => this.handleListItemClick(event, data.id)}>
                <ListItemText primary={data.invoiceNumber} secondary={data.creationDate.replace("T", " ")} /> 
            </ListItem>
           
        ))
    }

}


function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchInvoiceHistoryList()),
        setSelectedIndex: (index) => dispatch(selectListItem(index)),
        fetchInvoiceHistoryById: (id) => dispatch(fetchInvoiceHistoryById(id)),
        snackBarSuccess: (message) => dispatch(snackBarSuccess(message)),
        snackBarError: (message) => dispatch(snackBarError(message))
    }
}

function mapStateToProps(state, ownProps) {
    return {
        history: state.history,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InoiceHistorySidePanel);