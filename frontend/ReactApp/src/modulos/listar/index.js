import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Menu from '../../components/Menu';
//import Logo from './logo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
//import Formulario from './Formulario';
import Relatorio from '../../components/Relatorio';

import 'bootstrap/dist/css/bootstrap.min.css';
function Lista() {
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
         <Relatorio />
         </Col>
       </Row>
      </Container> 
    </>
  );
}

export default Lista;