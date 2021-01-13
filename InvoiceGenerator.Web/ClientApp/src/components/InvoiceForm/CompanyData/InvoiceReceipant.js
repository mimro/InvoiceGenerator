import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { connect } from "react-redux";
import '../styles/Common.css';
import {
    setRecipientDetails
} from "../../../redux-legacy/actions";

class InvoiceReceipant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.companyData
        }
    }



    render() {

        const { recipientDetails } = this.props;
        return (

            <div class="company-data-form-container">
                <h5 class="company-data-header" style={{ marginBottom: "15px" }}> Dane nabywcy</h5>
                    <TextField name="companyName" value={recipientDetails.companyName} onChange={this.handleChange} id="standard-basic" label="Nazwa firmy" variant="outlined" />

                    <TextField name="address" value={recipientDetails.address} onChange={this.handleChange} id="standard-basic" style={{ marginTop: '20px' }} label="Adres" variant="outlined" />
                </div>
        )
    }

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
            const { name, value } = e.target;
            this.props.setRecipientDetails(name, value);
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRecipientDetails: (name, value) => dispatch(setRecipientDetails(name, value)),
    }
}

function mapStateToProps(state, ownProps) {
    return {
        recipientDetails: state.recipientDetails,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceReceipant);
