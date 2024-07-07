import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import LogoSingIn from '../../../assets/logoOficial.png' 

function NavBarPrincipal(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-dark bg-dark navbar-expand-lg" {...args}
      fixed='top'>
      <NavbarBrand href="/"><img src={LogoSingIn} alt="ROSTER CAPS" height="70" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Mis Compras</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Mi Carrito
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Marcas
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>NEW ERA</DropdownItem>
                <DropdownItem>47</DropdownItem>
                <DropdownItem>GOORIN BROS.</DropdownItem>
                <DropdownItem>MR. CROOSBOW</DropdownItem>
                <DropdownItem>DANDY HATS</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>REGRESAR</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Disenos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>PLANAS</DropdownItem>
                <DropdownItem>CURVAS</DropdownItem>

            
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>ROOSTER CAPS</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarPrincipal;
