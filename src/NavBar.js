import React from 'react'
import {Navbar, Nav, NavbarBrand, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'

const NavBar = () => {
    
    return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Stoic Quote Generator</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Quote Categories
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink href='/Adversity/'>
                    <DropdownItem>
                        On Adversity
                    </DropdownItem>
                </NavLink>
                <NavLink href='/Mortality'>
                    <DropdownItem>
                        On Mortality
                    </DropdownItem>
                </NavLink>
                <NavLink href='/Mental'>
                    <DropdownItem>
                        On Mental Wellness
                    </DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Navbar>
    </div>
    )
}

export default NavBar