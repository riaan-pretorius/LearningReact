import React, { Component } from 'react';
import { NavItem } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom'


class ToolbarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: props.to,
            text: props.text
        }
    }
    render() {
        return (
            <NavItem>
                <NavLink to={this.state.to} className="nav-link" exact>{this.state.text}</NavLink>
            </NavItem>
        )
    }
}

export default ToolbarItem