import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Menu from '../../components/Menu';
//import Logo from './logo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Formulario from '../../components/Formulario';
//import Relatorio from './Relatorio';

import 'bootstrap/dist/css/bootstrap.min.css';
function Cadastro() {
  return (
    <>
      <Container>
       <Row>
         <Col>
          <Menu />
         </Col>
       </Row> 
       <Row>
         <Col>
         <Formulario />
         </Col>
       </Row>
      </Container> 
    </>
  );
}

export default Cadastro;