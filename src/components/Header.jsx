import React, { Component } from 'react'
import { Collapse, Nav, Navbar, NavItem, NavLink, NavbarToggler } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark> 

          {/* Static Navigation */}
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
          </Nav>
          {/* Collapse Nav Toggle */}
          <NavbarToggler className="mr-2" />

          {/* Collapse Nav */}
          <Collapse navbar>
            <Nav navbar>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;