import React from 'react'
import { Link } from 'react-router-dom'

// import react components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'



const PageNavbar = () => {


  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">AIC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/collection">Collection</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )

}

export default PageNavbar