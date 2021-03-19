import React from 'react';
//import './App.css';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import {LinkContainer} from 'react-router-bootstrap';




import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
    <>
    <Navbar expand="lg" variant="light" bg="primary">
      <LinkContainer to="/">
        <Navbar.Brand >Alunos</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        

        <LinkContainer to="/cadastrar">
          <Nav.Link >Cadastro</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/listar">
          <Nav.Link >Lista</Nav.Link>
        </LinkContainer>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
     
  
  );
}

export default Menu;
