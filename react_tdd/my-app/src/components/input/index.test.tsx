import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import 'jest-styled-components'
import {Input} from './index'

const onChange = () => {}

describe('<Input />', () => {
    it('renders component', () => {
        render(<Input value="default value" onChange={onChange} />)

        const input = screen.getByDisplayValue('default value')
        expect(input).toBeInTheDocument()
    })

    it('change input value', () => {
        render(<Input placeholder="default value" />)
        const input = screen.getByPlaceholderText('default value') as HTMLInputElement
        expect(input).toBeInTheDocument()

        fireEvent.change(input, {target: {value: 'change value....'}})

        expect(input.value).toBe('change value....')
    })

    it('changes the data', () => {
        render(<Input placeholder="default placeholder" />)

        const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement
        fireEvent.change(input, {target: {value: 'study react'}})
        expect(input.value).toBe('study react')
    })
})
