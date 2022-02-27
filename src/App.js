import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.mondule.scss";
// import "./Navbar.module.scss";
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap/";

// Pages
// import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  // const [toggleMenu, setToggleMenu] = useState(false);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", changeWidth);

  //   return () => {
  //     window.removeEventListener("resize", changeWidth);
  //   };
  // }, []);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="#home">Kayte</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto ">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <nav>
          {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
              <li>
                <Link className="items" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="items" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="items" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          )}
          <button onClick={toggleNav} className="kt_btn">
            BTN
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
