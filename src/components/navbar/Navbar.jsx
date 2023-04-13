import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function OffcanvasExample() {
  const expand = "md";
  return (
    <Navbar expand={expand} className="mb-3 header">
    <Container>
      <Navbar.Brand style={{ fontFamily: "Lalezar", fontSize: "25px" }}href="#">
          websot
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} 
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavLink to="/" className=" nav-color">
              home 
            </NavLink>
            <NavLink to="/about" className=" nav-color">
               about{" "}
            </NavLink>
            <NavLink to="/contact" className=" nav-color">
              contact
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  );
}
export default OffcanvasExample;
