import React from 'react'
import { Link } from 'react-router-dom'

// import react components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'



const PageNavbar = () => {


  return (
    <header>
      <Navbar className="bg-secondary" variant="light" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Art_Institute_of_Chicago_logo.svg/512px-Art_Institute_of_Chicago_logo.svg.png" width="30px" alt="Art Institute of Chicago"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/artworks">Collection</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </header>
  )

}

export default PageNavbar