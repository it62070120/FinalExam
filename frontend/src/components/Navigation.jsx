import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./../page/Home";

const Navigation = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar style={{backgroundColor: "#F5F5F5"}} variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand style={{color: "#F16322"}} as={Link} to="/">
                <h1>KMITL</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link style={{color: "#272727"}} as={Link} to="/">
                    <h5>HOME</h5>
                  </Nav.Link>
                  <Nav.Link style={{color: "#272727"}} as={Link} to="/">
                    <h5>Register</h5>
                  </Nav.Link>
                  <Nav.Link style={{color: "#272727"}} as={Link} to="/">
                    <h5>Login</h5>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route name="home" path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };

export default Navigation;