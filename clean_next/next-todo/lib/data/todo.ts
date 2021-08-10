import { readFileSync, writeFileSync } from 'fs'
import { TodoType } from '../../types/todo'

/**
 * 데이터 사용과 관련된 기능들을 관리하는데 사용
 */

type GetListFn = () => TodoType[]

const getList: GetListFn = () => {
  const todosBuffer = readFileSync('C:/workspace/STUDY/book_study/clean_next/next-todo/data/todos.json')
  const todoString = todosBuffer.toString()
  return JSON.parse(todoString || '[]')
}

const exist = (id: number) => {
  const todos = getList()
  return todos.some((todo) => todo.id === id)
}

const write = (todos: TodoType[]) => {
  writeFileSync('C:/workspace/STUDY/book_study/clean_next/next-todo/data/todos.json', JSON.stringify(todos))
}

export default {
  getList,
  exist,
  write
}
