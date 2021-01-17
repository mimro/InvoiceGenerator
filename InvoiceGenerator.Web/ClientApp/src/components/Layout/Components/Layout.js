import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import SidePanel from './SidePanel';
import InoiceHistorySidePanel from './InoiceHistorySidePanel';
import MessageSnackBar from './MessageSnackBar';

import '../Styles/Layout.css';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <div className="grid-container">
                    <Container class="main-container">
                        <Paper elevation={6}>
                            {this.props.children}
                        </Paper>
                    </Container>
                    <div className="side-bar-container">
                        <div className="side-bar">
                            
                            <SidePanel />
                        </div>
                        <div className="side-bar-history">
                            <MessageSnackBar />
                            <InoiceHistorySidePanel />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
