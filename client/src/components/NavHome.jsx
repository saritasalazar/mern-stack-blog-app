import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import logo from './images/logo.png';
const NavHome = () => {
  return (
    <div>
      <Container className="nav-container">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">
            <img
              className="logo"
              src={logo}
              alt="logo"
              style={{ width: 70, marginTop: -7 }}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavHome;
