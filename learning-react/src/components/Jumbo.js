// @flow
import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";

type Props = {
  title: string,
  subText: string,
  buttonText: string
};
type State = {
  title: string,
  subText: string,
  buttonText: string
};

class Jumbo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: props.title,
      subText: props.subText,
      buttonText: props.buttonText
    };
  }
  render() {
    return (
      <Jumbotron style={styles.jumbotron}>
        <h1>{this.state.title}</h1>
        <p>{this.state.subText}</p>
        <Button color="success">{this.state.buttonText}</Button>
      </Jumbotron>
    );
  }
}

const styles = {
  jumbotron: {
    textAlign: "center"
  }
};

export default Jumbo;
