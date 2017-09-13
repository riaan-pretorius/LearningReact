import React from "react";
import GitHubViewer from "../../pages/GitHubViewer";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

test("GitHubViewer Test Snapshot", () => {
  const component = renderer.create(<GitHubViewer />);
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test("GitHubViewer Test", () => {
  const page = mount(<GitHubViewer />);

  expect(page.find(".userSearch").exists()).toBeTruthy();
  expect(page.find(".userResults").exists()).toBeTruthy();
  expect(page.find(".userProfile").exists()).toBeTruthy();
});
