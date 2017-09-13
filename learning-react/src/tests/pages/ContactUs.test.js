import React from 'react'
import ContactUs from '../../pages/ContactUs'
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer'

test('ContactUs Test Snapshot', () => {
  const component = renderer.create(
    <ContactUs />
  )
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('ContactUs Test', () => {
  const page = mount(
    <ContactUs />
  )
  
  let header = page.find('h1')
  expect(header.exists()).toBeTruthy()
  expect(header.text()).toBe("Contact Us")

  let p = page.find('p')
  expect(p.exists()).toBeTruthy()
  expect(p.text()).toBe("Please dont contact us.")
})
