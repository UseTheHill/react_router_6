import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.mondule.scss";

// import { Container } from "react-bootstrap/";

// Pages
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      {/* <Container> */}
      <Navbar />
      <BrowserRouter>
        {/* <Navbar className={styles.km_navbar} expand="md">
            <Navbar href="/">Kayte McDonough</Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
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
          </Navbar> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* </Container> */}
    </div>
  );
}

export default App;
