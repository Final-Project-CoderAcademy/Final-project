import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const NavBar = () => {
  return (
    <header>
      <Navbar bg="light" expand="md">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home" className="me-4">
              MyWay
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <LinkContainer to="/" className="me-4">
              <Nav.Link>ABOUT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/" className="me-4">
              <Nav.Link href="#link">BLOG</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/" className="me-4">
              <Nav.Link href="#link">FIND YOUR WAY</Nav.Link>
            </LinkContainer>

            <Nav className="ms-auto">
              <NavDropdown title="User-Name" id="basic-nav-dropdown">
                <LinkContainer to="/">
                  <NavDropdown.Item>MyHome</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item>
                  <FontAwesomeIcon
                    icon={solid("arrow-right-from-bracket")}
                    className="me-2"
                  />
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>

              {/* when the user is an Admin  */}
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <LinkContainer to="/">
                  <NavDropdown.Item>SITE LIST</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavDropdown.Item>USER LIST</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {/* when the user is NOT logged in */}
              <LinkContainer to="/login">
                <Nav.Link>
                  <FontAwesomeIcon
                    icon={solid("arrow-right-to-bracket")}
                    className="me-2"
                  />
                  LOG IN
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>
                  <FontAwesomeIcon icon={solid("user")} className="me-2" />
                  SIGN UP
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
