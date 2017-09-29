import React from "react";
import Secure from "../../pages/Secure";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

test("Secure Test Snapshot", () => {
  const component = renderer.create(<Secure />);
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test("Secure Test", () => {
  const page = mount(<Secure />);

  let signInButton = page.find("button");
  expect(signInButton.exists()).toBeTruthy();
  expect(signInButton.text()).toBe("Sign Out");
});
