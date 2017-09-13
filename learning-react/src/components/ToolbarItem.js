// @flow
import React, { Component } from "react";
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

type Props = {
  to: string,
  text: string
};
type State = {
  to: string,
  text: string
};

class ToolbarItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      to: props.to,
      text: props.text
    };
  }
  render() {
    return (
      <NavItem>
        <NavLink to={this.state.to} className="nav-link" exact>
          {this.state.text}
        </NavLink>
      </NavItem>
    );
  }
}

export default ToolbarItem;
