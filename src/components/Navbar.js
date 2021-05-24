import React, { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {
  render() {
    constructor(props) {
    super(props);
    this.state = {
      'NavItemActive':''
    }
  }
  activeitem = (x) => {
    if(this.state.NavItemId.length>0) {
      document.getElementById(this.state.NavItemActive).classList.remove('active')
    };
    this.setState({'NavItemActive':x},() => {
      document.getElementById(this.state.NavItemActive).classList.add('active')
    });
  };
    return (
      <nav>
        <ul>
          <NavItem item="Home" tolink="/"></NavItem>
          <NavItem item="About" tolink="/about"></NavItem>
          <NavItem item="Education" tolink="/education"></NavItem>
          <NavItem item="Skills" tolink="/skills"></NavItem>
          <NavItem item="Contact" tolink="/contact"></NavItem>
        </ul>
      </nav>
    )
  }
}