import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap/";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="km_nav_bar" expand="lg">
          <Container className="km_nav_container">
            <Navbar className="km_nav_bar_brand" href="/">Kayte McDonough</Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="km_nav_collapse"id="basic-navbar-nav">
              <Nav className="me-auto km_nav_link_group">
                <Link className="km_nav_link" to="/">
                  Home
                </Link>
                <Link className="km_nav_link" to="/projects">
                  Projects
                </Link>
                <Link className="km_nav_link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <nav>
          <h1>Kayte McDonough</h1>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
