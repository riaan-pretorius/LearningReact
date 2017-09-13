// @flow
import React, { Component } from "react";
import { Col } from "reactstrap";

type Props = {
  heading: string,
  subText: string
};
type State = {
  heading: string,
  subText: string
};

class BodyItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      heading: props.heading,
      subText: props.subText
    };
  }
  render() {
    return (
      <Col sm="6">
        <h4>{this.state.heading}</h4>
        <p>{this.state.subText}</p>
      </Col>
    );
  }
}

export default BodyItem;
