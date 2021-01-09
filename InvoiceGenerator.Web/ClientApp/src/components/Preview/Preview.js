import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            previewHtml: ""
        }
    }

    componentDidMount() {

        const invoiceData = {
            invoiceSpecificData: this.props.invoiceSpecificData,
            issuerDetails: this.props.issuerDetails,
            recipientDetails: this.props.recipientDetails,
            invoiceTableDetails: this.props.invoiceTableDetails,
        }

        this.generatPreview(invoiceData);
    }

    render() {
        return (
            <div>
                {this.props.invoiceSpecificData.number}
            </div>
            );
    }

     generatPreview(invoiceData){
        axios.get('/Preview', {
            params: {
                invoiceData: JSON.stringify(invoiceData),
            }
        }).then(resp => {
            {
                this.setState({
                    previewHtml: resp.data
                });
            }
        });
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        invoiceSpecificData: state.invoiceSpecificData,
        issuerDetails: state.issuerDetails,
        recipientDetails: state.recipientDetails,
        invoiceTableDetails: state.invoiceTableDetails,
    }
}

export default connect(mapStateToProps)(Preview);