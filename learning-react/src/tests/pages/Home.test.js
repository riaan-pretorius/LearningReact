import React from 'react'
import Home from '../../pages/Home'
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer'

test('ContactUs Test Snapshot', () => {
  const component = renderer.create(
    <Home />
  )
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

test('ContactUs Test', () => {
    const page = mount(
        <Home />
    )
  
    expect(page.find('.jumbotron').exists()).toBeTruthy()
  
    let header = page.find('h1')
    expect(header.exists()).toBeTruthy()
    expect(header.text()).toBe("Jumbotron heading")

    let button = page.find('button')
    expect(button.exists()).toBeTruthy()
    expect(button.text()).toBe("Sign up today")
})
