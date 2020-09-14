import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import Logout from './Logout';
import logo from './images/logo.png';

const NavBar = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <Container className="nav-container">
      <Navbar bg="light" expand="sm">
        <Navbar.Brand as={Link} to="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{ width: 70, marginTop: -7 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="mr-auto" href="/">
              View All Posts
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className="mr-2" href="/manage">
              Manage My Content
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item>
              <Dropdown drop="down">
                <Dropdown.Toggle variant="" size="sm">
                  <img
                    alt="avatar"
                    height="50"
                    width="50"
                    src={
                      currentUser?.avatar
                        ? currentUser.avatar
                        : 'https://www.iconfinder.com/data/icons/communication-232/384/Account_circle-512.png'
                    }
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Logout />
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
