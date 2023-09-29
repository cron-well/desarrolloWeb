import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <footer>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Luis Angel Godoy 9490-08-1610 & Kayra Maoly Gálvez Pacheco 9490-20-10115</Navbar.Brand>
        <br></br>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
