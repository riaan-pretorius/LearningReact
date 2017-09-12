import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';


class ToolbarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            href: props.href,
            text: props.text,
            active: props.active
        }
    }
    render() {
        return (
            <NavItem>
                <NavLink href={this.state.href} active={this.state.active}>{this.state.text}</NavLink>
            </NavItem>
        )
    }
}

export default ToolbarItem