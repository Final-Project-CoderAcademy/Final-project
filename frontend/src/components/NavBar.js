import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { logOut } from "../actions/userActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const logOutHandler = (e) => {
    dispatch(logOut());
  };

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
            <LinkContainer to="/blogs" className="me-4">
              <Nav.Link href="#link">BLOG</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/sites" className="me-4">
              <Nav.Link href="#link">FIND YOUR WAY</Nav.Link>
            </LinkContainer>

            <Nav className="ms-auto">
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/myhome">
                    <NavDropdown.Item>MyHome</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logOutHandler}>
                    <FontAwesomeIcon
                      icon={solid("arrow-right-from-bracket")}
                      className="me-2"
                    />
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
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
                </>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/sitelist">
                    <NavDropdown.Item>SITE LIST</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>USER LIST</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
