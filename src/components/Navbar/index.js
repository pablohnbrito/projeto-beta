import React, { useState } from 'react';
import {} from 'reactstrap'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const Navegador = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="text-white mr-auto">
      <Navbar  color="dark" dark expand="md">
        <NavbarBrand href="/" >Página Inicial</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavItem className="mr-auto">
                <NavLink className="ml-3">Sobre</NavLink>
              </NavItem>
              <NavItem >
                <NavLink className="ml-3">Contato</NavLink>
              </NavItem>
            </Nav>
          <NavbarText ><h6>Abc</h6></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navegador;