import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import ToolbarItem from './ToolbarItem'


class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            links: props.links
        }
    }
    getLinks() {
        return this.state.links.map((link) => {
            return <ToolbarItem href={link.href} text={link.text} active={link.active} />
        })
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
        )
    }
}

const styles = {
    nav: {
      float: 'right'
    }
  }

export default Toolbar