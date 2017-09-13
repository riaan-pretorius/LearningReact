// @flow
import React, { Component } from "react";
import { Row, Col, Nav } from "reactstrap";
import ToolbarItem from "./ToolbarItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

type Props = {
  title: string,
  links: Array<Object>
};
type State = {
  title: string,
  links: Array<Object>
};

class Toolbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: props.title,
      links: props.links
    };
  }
  getLinks() {
    return this.state.links.map((link, index) => {
      return <ToolbarItem key={index} to={link.to} text={link.text} />;
    });
  }
  render() {
    return (
      <Col>
        <Row>
          <Col sm="4">
            <h3 className="text-muted">{this.state.title}</h3>
          </Col>
          <Col sm="8">
            <Nav style={styles.nav} pills>
              {this.getLinks()}
            </Nav>
          </Col>
        </Row>
      </Col>
    );
  }
}

const styles = {
  nav: {
    float: "right"
  }
};

export default Toolbar;
