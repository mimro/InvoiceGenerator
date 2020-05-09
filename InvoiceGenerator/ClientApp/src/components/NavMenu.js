import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

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
    <IconButton edge="start"color="inherit" aria-label="menu">
	<MenuIcon />
    </IconButton>
    <Typography variant="h6" >
      Generator faktur
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
      </header>
    );
  }
}
