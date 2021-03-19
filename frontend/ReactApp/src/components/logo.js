import React from 'react';
import logo from './logo.svg';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';


function Logo() {
  return (
    <>
      <Image src={logo} roundedCircle/>
   </>
  );
}

export default Logo;
