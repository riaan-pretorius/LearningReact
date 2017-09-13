import React, { Component } from "react";
import Home from "./pages/Home";
import GitHubViewer from "./pages/GitHubViewer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Toolbar from "./components/Toolbar";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./css/bootstrap.css";

const links = [
  { to: "/", text: "Home" },
  { to: "/githubviewer", text: "GitHub Viewer" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" }
];

class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Row>
          <Col>
            <Router>
              <div>
                <Toolbar title="Project name" links={links} />
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/githubviewer" component={GitHubViewer} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
              </div>
            </Router>
          </Col>
        </Row>
      </Container>
    );
  }
}
const styles = {
  container: {
    paddingTop: 20
  }
};

export default App;
