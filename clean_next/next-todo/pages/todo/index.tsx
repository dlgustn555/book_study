import React from 'react'
import { NextPage } from 'next'

import TodoList from '../../components/TodoList'
import { TodoType } from '../../types/todo'
import { getTodosAPI } from '../../lib/api/todo'
import { wrapper } from '../../store'

import { todoActions } from '../../store/todo'

interface Props {
  todos: TodoType[]
}

const app: NextPage<Props> = ({ todos }) => {
  return <TodoList todos={todos} />
}

// 리덕스를 사용하여 서버 사이드에서 api로 받아온 todo 리스트 데이터를 리덕스 스토어에 저장하고,
// 저장된 스토어를 클라이언트에 전달한다.
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  try {
    const { data: todos } = await getTodosAPI()
    store.dispatch(todoActions.setTodo(todos))
    return { props: { todos } }
  } catch {
    return { props: { todos: [] } }
  }
})

export default app
