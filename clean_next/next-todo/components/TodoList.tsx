import React, { FC } from 'react'
import styled from 'styled-components'
import { TodoType } from '../types/todo'

const Container = styled.div`
    width: 100%;
`

interface Props {
    todos: TodoType[]
}

const TodoList: FC<Props> = ({ todos }: Props) => {
  return (
    <Container>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TodoList
