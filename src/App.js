import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.mondule.scss";
import styles from "../src/Navbar.module.scss";
import { Navbar, Nav, Container } from "react-bootstrap/";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container>
        <Navbar className={styles.km_whole_navbar} expand="md" >
          <Container className={styles.km_navbar}>
            <Navbar  href="/">Kayte McDonough</Navbar>
            <Navbar.Toggle className={styles.km_toggle} aria-controls="basic-navbar-nav" />
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
          </Container>
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
