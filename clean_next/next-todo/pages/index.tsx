import React from 'react'
import { NextPage, GetServerSideProps } from 'next'

import TodoList from '../components/TodoList'
import { TodoType } from '../types/todo'
import { getTodosAPI } from '../lib/api/todo'

interface Props {
  todos: TodoType[]
}

const app: NextPage<Props> = ({ todos }) => {
  return <TodoList todos={todos} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: todos } = await getTodosAPI()
    return { props: { todos } }
  } catch {
    return { props: { todos: [] } }
  }
}

export default app
