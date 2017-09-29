import React, { Component } from "react";
import Home from "./pages/Home";
import GitHubViewer from "./pages/GitHubViewer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Toolbar from "./components/Toolbar";
import Secure from "./pages/Secure";
import SignIn from "./pages/SignIn";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { browserHistory } from "react-router";
import axios from "axios";

import "./css/bootstrap.css";

const links = [
  { to: "/", text: "Home" },
  { to: "/githubviewer", text: "GitHub Viewer" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
  { to: "/sign-in", text: "Sign In" },
  { to: "/secure", text: "Secure" }
];

const initialState = {
  isSignedIn: false,
  authResponse: {}
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  signIn = () => {
    debugger;
    const clientId = localStorage.Test;
    axios
      .get("https://api.github.com/?access_token=" + clientId)
      .then(response => {
        if (response.status === 200)
          this.setState({
            isSignedIn: true,
            authResponse: response
          });
      })
      .catch(function() {
        console.log("Promise Rejected");
      });

    //this.context.router.history.push("/secure");
  };
  signOut = () => {
    const clientId = "1ac8baf1ca24643c6dd4";

    this.setState({ isSignedIn: false });
  };
  isSignedIn() {
    return this.state.isSignedIn;
  }
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
                <Route
                  path="/sign-in"
                  render={props => (
                    <SignIn
                      signIn={this.signIn}
                      isSignedIn={this.state.isSignedIn}
                    />
                  )}
                />
                <Route
                  path="/secure"
                  render={props =>
                    this.state.isSignedIn === true ? (
                      <Secure
                        {...props}
                        signOut={this.signOut}
                        authResponse={this.state.authResponse}
                      />
                    ) : (
                      <Redirect to={{ pathname: "/sign-in" }} />
                    )}
                />
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
