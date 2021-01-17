import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { connect } from "react-redux";
import '../../styles/Common.css';

//import {
//    setRecipantDetails
//} from "../../../../redux-legacy/actions";


import {
    setRecipantDetails
} from "../../../../redux-toolkit/features/recipantSlice";


import { RECIPANT_DATA_LABEL } from '../../../../Resources/wordings_PL';

class InvoiceReceipant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.companyData
        }
    }



    render() {

        const { recipant } = this.props;
        return (

            <div className="company-data-form-container">
                <h5 className="company-data-header" style={{ marginBottom: "15px" }}> {RECIPANT_DATA_LABEL}</h5>
                <TextField name="companyName" value={recipant.companyName} onChange={this.handleChange} id="standard-basic" label="Nazwa firmy" variant="outlined" />

                <TextField name="address" value={recipant.address} onChange={this.handleChange} id="standard-basic" style={{ marginTop: '20px' }} label="Adres" variant="outlined" />
                </div>
        )
    }

    handleChange = (e) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
            const { name, value } = e.target;
            this.props.setRecipantDetails(name, value);
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRecipantDetails: (name, value) => dispatch(setRecipantDetails({ name, value })),
    }
}

function mapStateToProps(state, ownProps) {
    return {
        recipant: state.recipant,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceReceipant);
