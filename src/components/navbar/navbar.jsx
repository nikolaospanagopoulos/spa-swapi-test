import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './navbar.css'
const Header = () => {

  //I CREATED THE NAVBAR USING REACT BOOTSTRAP AND THE LINK CONTAINER FROM 'RECT ROUTER BOOTSTRAP'
  return (
    <header>
      <Navbar  className='navbar-bootstrap'>
      <Container>
      <Nav.Link href='/' onClick={() => window.location.href=`/`}> <h4 className='title-nav'>Home</h4>  </Nav.Link>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto'>
            <LinkContainer to='/films' exact>
          <Nav.Link ><h4 className='title-nav'>MOVIES</h4></Nav.Link>
          </LinkContainer>
          <LinkContainer to='/people' exact>
          <Nav.Link ><h4 className='title-nav'>PEOPLE</h4></Nav.Link>
        
          </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
