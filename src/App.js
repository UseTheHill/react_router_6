import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.mondule.scss";
import styles from "../src/Navbar.module.scss";
import { Navbar, Nav, Container } from "react-bootstrap/";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faKeyboard}  from '@fortawesome/free-solid-svg-icons';

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Navbar className={styles.km_navbar} expand="md">
            <Navbar href="/">Kayte McDonough</Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              {/* <span>
              <FontAwesomeIcon icon={fa-solid fa-keyboard} />
              </span> */}
            </Navbar.Toggle>
            <Navbar.Collapse
              className={styles.km_collapse}
              id="basic-navbar-nav"
            >
              <Nav className={styles.km_nav}>
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
