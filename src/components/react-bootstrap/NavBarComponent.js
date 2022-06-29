import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, FormControl, Button, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./NavBarComponent.css";
import { Link } from "react-router-dom";

export default function NavComponent() {
  return (
    // <Navbar variant="dark" expand="lg" fixed="top" className="height-navbar-i">
    <Navbar expand="lg" fixed="top" className="height-navbar-i">
      <Container className="font-color">
        <Navbar.Brand href="/" className="nav__link">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/product" className="nav__link">
              Product
            </Nav.Link>
            <Nav.Link href="/link" className="nav__link">
              Link
            </Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="nav__link"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href="/login" className="nav__link">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
