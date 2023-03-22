"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavbarHeader() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        {/* <Container> */}
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')}> Home
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/table2')}>
            Features</Nav.Link>
          <Nav.Link onClick={() => navigate('/table2')}>Product</Nav.Link>
          <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
          <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
        </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default NavbarHeader;

