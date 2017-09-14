// @flow
import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink
} from "reactstrap";
import axios from "axios";

type Props = {
  username: string
};
type State = {
  username: string,
  user: Object,
  loading: boolean
};

class UserProfile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false
    };
    this.getUser(props.username);
  }
  componentWillReceiveProps(newProps) {
    this.setState({ username: newProps.username });
    this.getUser(newProps.username);
  }
  getUser(username) {
    this.setState({ loading: true });
    axios.get("https://api.github.com/users/" + username).then(response => {
      console.log(response);
      this.setState({
        username: username,
        user: response.data,
        loading: false
      });
    });
  }
  render() {
    return (
      <Col>
        {this.state.loading || !this.state.user ? (
          "Loading..."
        ) : (
          <Col>
            <Card>
              <CardBlock>
                <CardTitle>
                  <strong>Username:</strong>
                  {this.state.user.login}
                </CardTitle>
                <CardSubtitle>
                  <strong>Name:</strong>
                  {this.state.user.name}
                </CardSubtitle>
              </CardBlock>
              <img
                src={this.state.user.avatar_url}
                alt="Generic placeholder image"
                style={styles.profileImage}
              />
            </Card>
          </Col>
        )}
      </Col>
    );
  }
}

const styles = {
  profileImage: {
    borderStyle: "outset"
  }
};

export default UserProfile;
