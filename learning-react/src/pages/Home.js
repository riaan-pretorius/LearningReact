import React, { Component } from "react";
import Jumbo from "../components/Jumbo";
import BodyItem from "../components/BodyItem";
import { Row, Col } from "reactstrap";

const bodyItems = [
  {
    heading: "Subheading",
    subText:
      "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum."
  },
  {
    heading: "Subheading",
    subText:
      "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum."
  },
  {
    heading: "Subheading",
    subText:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."
  },
  {
    heading: "Subheading",
    subText:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."
  },
  {
    heading: "Subheading",
    subText: "Maecenas sed diam eget risus varius blandit sit amet non magna."
  },
  {
    heading: "Subheading",
    subText: "Maecenas sed diam eget risus varius blandit sit amet non magna."
  }
];

class Home extends Component<{}, {}> {
  getBodyItems() {
    return bodyItems.map((item, index) => {
      return (
        <BodyItem key={index} heading={item.heading} subText={item.subText} />
      );
    });
  }
  render() {
    return (
      <Col>
        <Jumbo
          title="Jumbotron heading"
          subText="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
          buttonText="Sign up today"
        />
        <Row>{this.getBodyItems()}</Row>
      </Col>
    );
  }
}

export default Home;
