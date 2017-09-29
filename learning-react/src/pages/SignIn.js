import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: props.signIn,
      isSignedIn: props.isSignedIn
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isSignedIn: nextProps.isSignedIn
    });
  }
  render() {
    return this.state.isSignedIn ? (
      <Redirect to="/secure" />
    ) : (
      <Button color="info" onClick={() => this.state.signIn()}>
        Sign In
      </Button>
    );
  }
}

export default SignIn;
