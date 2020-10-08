import React from "react"

import {
  Navbar,
  Nav,
  NavDropdown,
  Container
} from "react-bootstrap"

import "./Navibar.css"

const Navibar = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
    style={{ backgroundColor: "#7b8888" }}
    fixed="top"
  >
    <Container>
      <Navbar.Brand href="/">
        Benjamin.Hao
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavDropdown title="Gallery" className="custom-text-align">
            <NavDropdown.Item eventKey="1" className="custom-text-align" href="/gallery/japan">
              Japan
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="2" className="custom-text-align" href="gallery">
              Belgium
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="3" className="custom-text-align" href="gallery">
              China
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/aboutme" className="custom-text-align">
            About Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navibar
