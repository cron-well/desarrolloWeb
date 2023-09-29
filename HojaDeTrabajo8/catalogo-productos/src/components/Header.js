import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    
      <Navbar bg="primary" data-bs-theme="dark">
       <Container>
       <Navbar.Brand href="#home">Catalogo de productos</Navbar.Brand>
       </Container>
      </Navbar>
    
  );
}

export default Header;
