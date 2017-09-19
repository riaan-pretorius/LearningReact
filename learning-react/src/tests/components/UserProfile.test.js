import React from "react";
import UserProfile from "../../components/UserProfile";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

test("UserProfileTest Snapshot", () => {
  const component = renderer.create(<UserProfile username="riaan-pretorius" />);
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test("UserProfile Test", () => {
  const component = mount(<UserProfile username="riaan-pretorius" />);
  setTimeout(() => {
    expect(component.find(".card").exists()).toBeTruthy();

    let header = component.find("h4");
    expect(header.exists()).toBeTruthy();
    expect(header.text()).toBe("Username:riaan-pretorius");

    let p = component.find("h6");
    expect(p.exists()).toBeTruthy();
    expect(p.text()).toContain("Name:");

    let button = component.find("img");
    expect(button.exists()).toBeTruthy();
  }, 2000);
});
