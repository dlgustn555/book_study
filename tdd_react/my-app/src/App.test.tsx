/* eslint-disable no-undef */
import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import App from './App'
import exp from 'node:constants'

let todoList: HTMLElement | null = null

beforeEach(() => {
    render(<App />)
    todoList = screen.getByTestId('todoList')
})
describe('<App />', () => {
    it('1. todo 리스트는 처음에는 한개도 없다.', () => {
        // 체크 1: todoList 영역을 제대로 찾았는가??
        expect(todoList).toBeInTheDocument()

        // 체크 2: todoList 영역에는 자식 컨포넌트가 존재하는가??
        // 아직 추가전 이므로 자식 컴포넌트가 없다.
        expect(todoList?.firstChild).toBe(null)
    })

    it('2 todo 1개를 추가하면 todo 리스트에는 자식 노드가 1개 생긴다.', () => {
        // 0 input 태그가 존재한다.
        const input = screen.getByPlaceholderText('할 일을 입력') as HTMLInputElement
        expect(input).toBeInTheDocument()

        // 1 input 태그에 값을 입력한다.
        fireEvent.change(input, {target: {value: '가나다라....'}})
        expect(input.value).toBe('가나다라....')

        // 2 "추가" 버튼을 클릭한다.
        const addButton = screen.getByText('추가')
        expect(addButton).toBeInTheDocument()
        fireEvent.click(addButton)

        // 3 todo 리스트에 자식 노드 갯수를 확인한다.
        const todo = screen.getByText('가나다라....')
        expect(todo).toBeInTheDocument()
        expect(todoList?.childElementCount).toBe(1)
    })
})
