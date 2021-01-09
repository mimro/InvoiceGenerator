import React from 'react';
import '../Styles/SidePanel.css'
import Paper from '@material-ui/core/Paper'
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { fetchInvoiceHistoryList, setInvoiceHistoryLoading, selectListItem, fetchInvoiceHistoryById } from "../../../actions";
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider';

class InoiceHistorySidePanel extends React.Component {

    render() {

        return (
            <Paper elevation={6}>
                <h4 class="invoice-history-header"> Historia faktur <Button onClick={() => this.reloadData()}><RefreshOutlinedIcon color="primary" /></Button></h4>
                {
                    this.props.invoiceHistory.isLoading === true &&
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
        this.props.fetchData();
    }

    reloadData() {
        this.props.setLoadingStatus(true);
        this.props.fetchData();
    }

    handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
        id:number
    ) => {
        this.props.setSelectedIndex(index);
        this.props.fetchInvoiceHistoryById(id)
    };

    renderList() {
        let { invoiceHistory } = this.props;
        return invoiceHistory.table.map((data, i) => (
            <ListItem button key={i} /*style={{ borderTop: '1px solid #A6A6A6' }}*/
                selected={invoiceHistory.selectedListItemIndex === i}
                onClick={(event, index,id) => this.handleListItemClick(event, index, data.id)}>
                <ListItemText primary={data.invoiceNumber} secondary={data.creationDate.replace("T"," ") }/>
                <Divider />
            </ListItem>
           
        ))
    }

}


function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchInvoiceHistoryList()),
        setLoadingStatus: (status) => dispatch(setInvoiceHistoryLoading(status)),
        setSelectedIndex: (index) => dispatch(selectListItem(index)),
        fetchInvoiceHistoryById: (id) => dispatch(fetchInvoiceHistoryById(id))
    }
}

function mapStateToProps(state, ownProps) {
    return {
        invoiceHistory: state.invoiceHistory,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InoiceHistorySidePanel);