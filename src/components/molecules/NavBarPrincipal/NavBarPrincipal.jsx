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

import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

import styles from './NavBarPrincipal.module.css'

import LogoSingIn from '../../../assets/logoOficial.png' 
import ImputRegistro from '../../atoms/ImputRegistro/ImputRegistro';

function NavBarPrincipal(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-dark bg-dark navbar-expand-lg" {...args}
      fixed='top'
      >
      <NavbarBrand href="/"><img src={LogoSingIn} alt="ROSTER CAPS" style={{height: "50px"}} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/miscompras">Mis Compras</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Marcas
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/newera">New Era</DropdownItem>
                <DropdownItem href='/47caps'>47 Caps</DropdownItem>
                <DropdownItem href='/goorinbros'>Goorin Bros.</DropdownItem>
                <DropdownItem href='/mrkash'>Mr. Kash</DropdownItem>
                <DropdownItem href='/ranchcorral'>Ranch & Corral</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Disenos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/planas'>Planas</DropdownItem>
                <DropdownItem href='/curvas'>Curvas</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <IoSearchOutline
              size="35px"
              style={{ position:"absolute", right:"530px", bottom:"22px", color: "white"}}
              />
            </NavItem>

            <div className={styles.imput}>
            <NavItem>
              <ImputRegistro/>
            </NavItem>
            </div>


            <NavItem>
              <NavLink href="/carrito">
                <FaShoppingCart 
                size="30px"
                style={{marginLeft:"920px"}}
                /> 
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href=" ">
              {/*Este es el icono del Perfil, falta rutearlo*/}
              <MdAccountCircle   
              size="35px"
              style={{marginLeft:"10px", position:"absolute", bottom:"20px"}}
              />
              </NavLink>
            </NavItem>

         
          </Nav>
          <NavbarText>ROOSTER CAPS</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarPrincipal;
