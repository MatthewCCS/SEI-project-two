import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { userIsAuthenticated } from '../../../../../development/HOMEWORK/matthewshek/breadbored-start/src/helpers/auth'

// import react components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'



const PageNavbar = () => {


  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">🫡</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        
          
        
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )

}

export default PageNavbar