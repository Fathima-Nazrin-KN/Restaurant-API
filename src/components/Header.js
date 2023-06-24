import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Moredetails from './Moredetails';

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">RESTRO APP</Navbar.Brand>
      
      <Nav className="float-right">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header