import React from 'react';
import '../styles/SidePanel.css'
import Paper from '@material-ui/core/Paper'
import { connect } from "react-redux";

import Button from '@material-ui/core/Button';
import Stepper from './Stepper';
import { Route } from 'react-router-dom'

import {
    postInvoiceData
} from "../../actions";

class SidePanel extends React.Component {

    render() {

        return (         
            <Paper elevation={6}>
                <div class="side-panel-container">
                   
                    <div class="progress-stepper">
                        <Stepper />
                    </div>
                    
                    <div class="next-step-button-container">
                        <Button variant="contained" color="primary" id="next-step-button" >
                            Następny krok
                     </Button>
                        <Route render={({ history }) => (
                            <button
                                type='button'
                                onClick={() => { history.push('/preview') }}
                            >
                                Click Me!
                            </button>
                        )} />
                    </div>
                    </div>
                
            </Paper>
        );
    }
}



function mapDispatchToProps(dispatch) {
    return {
        postInvoiceData: (name, value) => dispatch(postInvoiceData()),
    }
}

function mapStateToProps(state, ownProps) {
    return {
        issuerDetails: state.issuerDetails,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);