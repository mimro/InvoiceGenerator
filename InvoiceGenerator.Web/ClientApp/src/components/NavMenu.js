import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';
import { AppBar, Toolbar, IconButton, Typography,Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
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
                        Faktura .NET
    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
      </header>
    );
  }
}
