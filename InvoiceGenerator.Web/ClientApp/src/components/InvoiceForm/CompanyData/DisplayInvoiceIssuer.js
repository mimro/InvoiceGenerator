import React from 'react';
import { connect } from 'react-redux';


class DisplayInvoiceIsuer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { issuerDetails } = this.props; 
        return (
            <div class ="row" >
                <div> <label name="companyName" >{issuerDetails.companyName}</label></div>
                    <div><label name="companyName" >{issuerDetails.vatId}</label></div>
                        <div> <label name="companyName" >{issuerDetails.street}</label></div>
                </div>

        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        issuerDetails: state.issuerDetails,
    }
}

export default connect(mapStateToProps)(DisplayInvoiceIsuer);