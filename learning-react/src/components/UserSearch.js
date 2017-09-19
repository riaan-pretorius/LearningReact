// @flow
import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupButton,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import axios from "axios";
import UserProfile from "./UserProfile";

type Props = {
  searchText: string,
  result: Array<Object>,
  currentUser: Object
};
type State = {
  searchText: string,
  result: Array<Object>,
  currentUser: ?Object
};

class UserSearch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: "",
      result: [],
      currentUser: null
    };
  }
  getUsers = () => {
    axios
      .get("https://api.github.com/search/users?q=" + this.state.searchText)
      .then(response => {
        this.setState({ result: response.data.items });
      })
      .catch(function() {
        console.log("Promise Rejected");
      });
  };
  getUserList = () => {
    return this.state.result.map((item, index) => {
      return (
        <ListGroupItem
          key={index}
          action
          active={
            this.state.currentUser !== null ? (
              this.state.currentUser.id === item.id
            ) : (
              false
            )
          }
          onClick={() => {
            this.setState({
              currentUser: item
            });
          }}
        >
          {item.login}
        </ListGroupItem>
      );
    });
  };
  render() {
    return (
      <Row>
        <Col sm={4} style={styles.box}>
          <Form>
            <InputGroup className="userSearch">
              <Input
                placeholder="Search github user"
                onChange={event => {
                  this.setState({ searchText: event.target.value });
                }}
              />
              <InputGroupButton>
                <Button
                  onClick={this.getUsers}
                  disabled={this.state.searchText.length === 0}
                >
                  Search
                </Button>
              </InputGroupButton>
            </InputGroup>
          </Form>
          {this.state.result.length > 0 ? (
            <Col className="userResults">
              <h4>Search results</h4>
              <ListGroup>{this.getUserList()}</ListGroup>
            </Col>
          ) : (
            ""
          )}
        </Col>
        <Col sm={8}>
          {this.state.currentUser ? (
            <UserProfile username={this.state.currentUser.login} />
          ) : (
            ""
          )}
        </Col>
      </Row>
    );
  }
}

const styles = {
  box: {
    borderRight: "5px",
    borderRightStyle: "groove"
  }
};

export default UserSearch;
