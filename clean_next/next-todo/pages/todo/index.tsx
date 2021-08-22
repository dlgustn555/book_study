import React from 'react'
import { NextPage } from 'next'

import TodoList from '../../components/TodoList'
import { getTodosAPI } from '../../lib/api/todo'
import { wrapper } from '../../store'

import todo from '../../store/todo'

const app: NextPage = () => {
  return <TodoList />
}

// 리덕스를 사용하여 서버 사이드에서 api로 받아온 todo 리스트 데이터를 리덕스 스토어에 저장하고,
// 저장된 스토어를 클라이언트에 전달한다.
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  try {
    const { data: todos } = await getTodosAPI()
    store.dispatch(todo.actions.setTodo(todos))
    return { props: {} }
  } catch {
    return { props: {} }
  }
})

export default app
