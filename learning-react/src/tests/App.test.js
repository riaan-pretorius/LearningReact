import React from 'react'
import App from '../App'
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer'

test('App Test Snapshot', () => {
  const component = renderer.create(
    <App />
  )
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('App Test', () => {
  const app = mount(
    <App />
  )
  
  expect(app.find('.container').exists()).toBeTruthy()
  expect(app.find('.row').exists()).toBeTruthy()
  expect(app.find('.col').exists()).toBeTruthy()
})
