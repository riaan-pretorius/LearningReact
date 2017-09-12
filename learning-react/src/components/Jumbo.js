import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';


class Jumbo extends Component {
    constructor(props) {
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
        )
    }
}

const styles = {
    jumbotron: {
        textAlign: 'center'
    }
}

export default Jumbo