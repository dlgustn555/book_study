import React from 'react'
import { NextPage } from 'next'

import TodoList from '../components/TodoList'
import { TodoType } from '../types/todo'

const todos: TodoType[] = [
  { id: 1, text: 'Next.js 5장 Todo 리스트', color: 'red', checked: false },
  { id: 2, text: 'Next.js 6장 넥스트 API', color: 'orange', checked: false },
  { id: 3, text: '아산병원 가기', color: 'green', checked: false },
  { id: 4, text: '삼겹살 구어먹기', color: 'blue', checked: false },
  { id: 5, text: '씻고 출발 준비하기', color: 'navy', checked: false },
]
const app: NextPage = () => {
  return <TodoList todos={todos} />
}

export default app
