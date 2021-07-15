import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import 'jest-styled-components'

import {Button} from 'components'

const onClick = () => {}

describe('<Button />', () => {
    it('renders components correctly', () => {
        render(<Button label="Button Test" onClick={onClick} />)
        const label = screen.getByText('Button Test')
        expect(label).toBeInTheDocument()

        const parent = label.parentElement
        expect(parent).toHaveStyleRule('background-color', '#304FFE')
        expect(parent).toHaveStyleRule('background-color', '#1E40FE', {
            modifier: ':hover',
        })
    })

    it('changes backgroundColor and hoverColor Props', () => {
        const backgroundColor = 'silver'
        const hoverColor = 'green'

        render(
            <Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick} />
        )

        const label = screen.getByText('Button Test')
        expect(label).toBeInTheDocument()

        const parent = label.parentElement
        expect(parent).toHaveStyleRule('background-color', backgroundColor)
        expect(parent).toHaveStyleRule('background-color', hoverColor, {
            modifier: ':hover',
        })
    })

    it('clicks the button', () => {
        const handleClick = jest.fn()
        render(<Button label="Button Test" onClick={handleClick} />)

        const label = screen.getByText('Button Test')

        expect(handleClick).toHaveBeenCalledTimes(0)

        fireEvent.click(label)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
