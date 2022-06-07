import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const basketItems = useSelector((state) => {
 
    return state.basketItems;
  });

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">
                <Button variant="outline-primary me-1">Products</Button>
              </NavLink>
              <NavLink to="About">
                <Button variant="outline-primary me-1">About</Button>
              </NavLink>
              <NavLink to="Contact">
                <Button variant="outline-primary me-1">Contact</Button>
              </NavLink>
            </Nav>
            <Navbar.Brand href="#home"><h4 style={{marginRight:'400px',color:'blue'}}>Web-Store</h4></Navbar.Brand>
            <Nav>
              <NavLink to="SignUp">
                <Button variant="outline-primary me-1">
                  <span className="fa fa-user-plus me-1"></span>Register
                </Button>
              </NavLink>
              <NavLink to="Login">
                <Button variant="outline-primary me-1">
                  <span className="fa fa-sign-in me-1"></span>Login
                </Button>
              </NavLink>
              <NavLink to="Card">
                <Button variant="outline-primary me-1">
                  <span className="fa fa-shopping-card me-1"></span>Card (
                  {basketItems.length})
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
