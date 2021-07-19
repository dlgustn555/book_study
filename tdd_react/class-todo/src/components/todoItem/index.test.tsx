import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {ToDoItem} from 'components/todoItem'
import {Button} from 'components/button'

import 'jest-styled-components'

const onClick = () => {}

describe('<TodoItem />', () => {
    it('render correctly check', () => {
        render(<ToDoItem label="Todo Item..." onClick={onClick} />)

        // Leabel 태그 체크
        const todoItem = screen.getByText('Todo Item...')
        expect(todoItem).toBeInTheDocument()

        const deleteButton = screen.getByText('삭제')
        expect(deleteButton).toBeInTheDocument()
    })

    it('Click the Delete Button!!', () => {
        const handleClick = jest.fn()
        render(<ToDoItem label="Todo Item.." onClick={handleClick} />)

        const deleteButton = screen.getByText('삭제')
        // 삭제 버튼이 존재하는가??
        expect(deleteButton).toBeInTheDocument()

        expect(handleClick).toHaveBeenCalledTimes(0)
        fireEvent.click(deleteButton)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
