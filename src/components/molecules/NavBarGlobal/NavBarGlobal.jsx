import React, { useState } from 'react';
import LogoSingIn from '../../../assets/logoOficial.png' //En el apartado de la imagen, no lo pone en automatico

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

function NavBarGlobal() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  return (
      <Navbar
      color='dark'
      dark
      fixed='top'
      >
        <NavbarBrand href="/">
        <img src={LogoSingIn} alt="ROSTER CAPS" style={{height: "60px"}} />
        </NavbarBrand> //modificandose
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="">Iniciar Sesion</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Registrarse</NavLink>
            </NavItem>


            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                MARCAS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>NEW ERA</DropdownItem>
                <DropdownItem>47</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
  )
}

export default NavBarGlobal