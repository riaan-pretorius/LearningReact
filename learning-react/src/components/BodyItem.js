import React, { Component } from 'react';
import { Col } from 'reactstrap';


class BodyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: props.heading,
            subText: props.subText
        }
    }
    render() {
        return (
            <Col sm="6">
                <h4>{this.state.heading}</h4>
                <p>{this.state.subText}</p>
            </Col>
        )
    }
}

export default BodyItem