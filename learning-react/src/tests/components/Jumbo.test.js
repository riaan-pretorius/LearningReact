import React from 'react'
import Jumbo from '../../components/Jumbo'
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer'

test('Jumbo Test Snapshot', () => {
  const component = renderer.create(
    <Jumbo title="Jumbotron heading"
      subText="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
      buttonText="Sign up today" />
  )
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
})

test('Jumbo Test', () => {
    const component = mount(
        <Jumbo title="Jumbotron heading"
        subText="Cras justo odio."
        buttonText="Sign up today" />
    )
    expect(component.find('.jumbotron').exists()).toBeTruthy()

    let header = component.find('h1')
    expect(header.exists()).toBeTruthy()
    expect(header.text()).toBe("Jumbotron heading")

    let p = component.find('p')
    expect(p.exists()).toBeTruthy()
    expect(p.text()).toBe("Cras justo odio.")

    let button = component.find('button')
    expect(button.exists()).toBeTruthy()
    expect(button.text()).toBe("Sign up today")
})