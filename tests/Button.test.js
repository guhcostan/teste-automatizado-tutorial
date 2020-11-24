import React from 'react'
import toJson from 'enzyme-to-json'
import Button from '../components/Button'
import { mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('should render', () => {
    const spy = jest.spyOn(global.console, 'error')
    const onClick = jest.fn()
    let props = {
        text: 'Teste',
        onClick: onClick,
        disabled: false
    }
    const app = mount( 
        <Button {...props} />,
    )
    expect(toJson(app)).toMatchSnapshot()
    expect(spy).not.toHaveBeenCalled()
})

it('should click button', () => {
    const spy = jest.spyOn(global.console, 'error')
    const onClick = jest.fn()
    let props = {
        text: 'Teste',
        onClick: onClick,
        disabled: false
    }
    const app = mount( 
        <Button {...props} />,
    )
    app.simulate('click')
    expect(onClick).toHaveBeenCalled()
    expect(spy).not.toHaveBeenCalled()
})

it('should click button disabled', () => {
    const spy = jest.spyOn(global.console, 'error')
    const onClick = jest.fn()
    let props = {
        text: 'Teste',
        onClick: onClick,
        disabled: true
    }
    const app = mount( 
        <Button {...props} />,
    )
    app.simulate('click')
    expect(onClick).not.toHaveBeenCalled()
    expect(spy).not.toHaveBeenCalled()
})