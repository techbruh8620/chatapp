import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
const MainNav = () => {
  const buttonStyles = {
    margin: "10px",
  };
  const searchStyles = {
    BorderTopLeftRadius: "0px",
    outline: "none",
  };
  const searchIconStyles = {
    backgroundColor: "gray",
    padding: "8px",
    borderRadius: "5px",
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="#fff"
      className="bg-body-tertiary"
    >
      <Container>
        <div className="navcomp">
          <Navbar.Brand href="#home"> WOMASHOP </Navbar.Brand>
          <div className="search">
            <Search style={searchIconStyles} size={36} />
            <Form className="Form">
              <Form.Group className="mb-3" style={searchStyles}>
                <Form.Control placeholder="Search Product" type="Search" />
              </Form.Group>
            </Form>
          </div>
          <div>
            <Button style={buttonStyles}>Sign in</Button>
            <Button variant="secondary">Sign up</Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MainNav;
