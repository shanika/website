import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar
    className="mb-4"
    bg="dark"
    variant="dark"
    expand="lg"
    style={{ backgroundColor: "var(--primary)" }}
    sticky="top"
  >
    <Container>
      <Link className="navbar-brand">{siteTitle}</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <NavDropdown title="Resources" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/resources">
              Resource Library
            </Link>
            <a
              href="https://docs.google.com/document/d/1WrQKloQQ-tAZ6fN-NRTLyd5Lo5eQOkgOiyRCgwsID0s/edit"
              className="dropdown-item"
            >
              How to start a support group
            </a>
            <Link className="dropdown-item" to="/resources/volunteers">
              Guidance for Volunteers
            </Link>
          </NavDropdown>
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
