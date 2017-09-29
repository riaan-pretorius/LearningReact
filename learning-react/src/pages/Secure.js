import React, { Component } from "react";
import { Button } from "reactstrap";

class Secure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signOut: props.signOut,
      isSignedIn: props.isSignedIn,
      authResponse: props.authResponse
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isSignedIn: nextProps.isSignedIn,
      signOut: nextProps.signOut,
      authResponse: nextProps.authResponse
    });
  }
  render() {
    return (
      <div>
        <div>Secure PAGE</div>
        <p>
          <Button color="info" onClick={() => this.state.signOut()}>
            Sign Out
          </Button>
        </p>
        <hr />
        <pre>{JSON.stringify(this.state.authResponse, null, 2)}</pre>
      </div>
    );
  }
}

export default Secure;
