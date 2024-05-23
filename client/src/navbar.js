import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {useState} from "react";

export function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Navbar
      collapseOnSelect
      expand=""
      className="bg-dark border border-0 rounded-3 mb-5"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="https://github.com/vandojo/on-the-menu">
          VanDoJo
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="nav_toggle"
          id="nav_toggle"
          className="border-0 link-secondary"
        />
        <Navbar.Collapse id="nav_collapse" className="border-0">
          <Nav className="me-auto ">
            <NavDropdown.Item className="link-secondary" href="#">
              Home
            </NavDropdown.Item>
            <NavDropdown.Item className="link-secondary" href="#">
              Pantry
            </NavDropdown.Item>

            <NavDropdown.Item className="link-secondary" href="#">
              Login
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
