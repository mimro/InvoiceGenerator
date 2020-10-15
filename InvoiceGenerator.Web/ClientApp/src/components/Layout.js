import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import SidePanel from './LayoutComponents/SidePanel'
import './styles/Layout.css';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <div class="grid-container">
                    <Container class="main-container">
                        <Paper elevation={6}>
                            {this.props.children}
                        </Paper>  
                    </Container>
                    <div class="side-container">
                        <SidePanel/>
                    </div>
                </div>

            </div>
        );
    }
}
