import React from "react";
import SignIn from "../../pages/SignIn";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

test("SignIn Test Snapshot", () => {
  const component = renderer.create(<SignIn />);
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test("SignIn Test", () => {
  const page = mount(<SignIn />);

  let signInButton = page.find("button");
  expect(signInButton.exists()).toBeTruthy();
  expect(signInButton.text()).toBe("Sign In");
});
