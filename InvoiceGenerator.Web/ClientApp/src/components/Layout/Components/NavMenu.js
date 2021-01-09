import React, { Component } from 'react';

import '../Styles/NavMenu.css';
import { AppBar, Toolbar, IconButton, Typography,Button } from '@material-ui/core';
export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">

                    </IconButton>
                    <Typography variant="h6">
                        Generator faktur
    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
      </header>
    );
  }
}
