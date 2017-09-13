import React from 'react'
import AboutUs from '../../Pages/AboutUs'
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer'

test('AboutUs Test Snapshot', () => {
  const component = renderer.create(
    <AboutUs />
  )
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('AboutUs Test', () => {
  const page = mount(
    <AboutUs />
  )
  
  let header = page.find('h1')
  expect(header.exists()).toBeTruthy()
  expect(header.text()).toBe("About Us")

  let p = page.find('p')
  expect(p.exists()).toBeTruthy()
  expect(p.text()).toBe("We got nothing")
})
