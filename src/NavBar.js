import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
const NavBar = () => {
    return (
        <Container>
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand className="fs-1 fw-bold" href="/">Spacious</Navbar.Brand>
            </Container>
          </Navbar>
      </Container>
    )
}

export default NavBar
