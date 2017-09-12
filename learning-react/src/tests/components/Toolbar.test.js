import React from 'react'
import Toolbar from '../../components/Toolbar'
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer'
import {
  MemoryRouter
} from 'react-router-dom'

test('Toolbar Test Snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Toolbar title="Testing" links={[{to: "#", text: "Testing"}]}/>
    </MemoryRouter>
  )
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
})

test('Toolbar Test', () => {
    const component = mount(
      <MemoryRouter>
        <Toolbar title="Testing" links={[{to: "/", text: "Testing"}]}/>
      </MemoryRouter>
    )
    
    let header = component.find('h3')
    expect(header.exists()).toBeTruthy()
    expect(header.text()).toBe("Testing")

    let a = component.find('a')
    expect(a.exists()).toBeTruthy()
    expect(a.text()).toBe("Testing")
    expect(a.prop('href')).toBe("/")
})