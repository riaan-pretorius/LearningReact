import React from 'react'
import BodyItem from '../../components/BodyItem'
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer'

test('BodyItem Test Snapshot', () => {
    const component = renderer.create(
    <BodyItem heading="Testing" subText="Testing SubText" />
    )
    let test = component.toJSON();
    expect(test).toMatchSnapshot();
    //expect(test.props.heading).toBe("Testing");
    //expect(test.props.subText).toBe("Testing SubText");
})

test('BodyItem Test', () => {
    const component = mount(
        <BodyItem heading="Testing" subText="Testing SubText" />
    )
    expect(component.find('.col').exists()).toBeTruthy()

    let header = component.find('h4')
    expect(header.exists()).toBeTruthy()
    expect(header.text()).toBe("Testing")

    let p = component.find('p')
    expect(p.exists()).toBeTruthy()
    expect(p.text()).toBe("Testing SubText")
})