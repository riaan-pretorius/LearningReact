import React from 'react'
import ToolbarItem from '../../components/ToolbarItem'
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer'
import {
  MemoryRouter
} from 'react-router-dom'

test('ToolbarItem Test Snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <ToolbarItem to="/" text="Testing" />
    </MemoryRouter>
  )
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
})

test('ToolbarItem Test', () => {
    const component = mount(
      <MemoryRouter>
        <ToolbarItem to="/" text="Testing" />
      </MemoryRouter>
    )
    
    let a = component.find('a')
    expect(a.exists()).toBeTruthy()
    expect(a.text()).toBe("Testing")
    expect(a.prop('href')).toBe("/")
})