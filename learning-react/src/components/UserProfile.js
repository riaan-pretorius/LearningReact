// @flow
import React, { Component } from "react";
import { Col, Card, CardBlock, CardTitle, CardSubtitle } from "reactstrap";
import axios from "axios";

type Props = {
  username: string
};
type State = {
  username: string,
  user: ?Object,
  loading: boolean
};

class UserProfile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      username: props.username,
      user: null
    };
    //this.getUser(props.username);
  }
  componentDidMount() {
    this.getUser(this.state.username);
  }
  componentWillReceiveProps(newProps) {
    this.getUser(newProps.username);
  }
  getUser = (username: string) => {
    if (this.state.username !== username) {
      this.setState({ loading: true });
      axios
        .get("https://api.github.com/users/" + username)
        .then(response => {
          this.setState({
            username: username,
            user: response.data,
            loading: false
          });
        })
        .catch(function() {
          console.log("Promise Rejected");
        });
    }
  };
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
                alt="Generic placeholder"
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
