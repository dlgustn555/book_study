import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { TodoType } from '../types/todo'
import { useSelector } from '../store'
import { todoActions } from '../store/todo'

import Container from './todoList.style'
import TrashCanIcon from '../public/statics/svg/trash_can.svg'
import CheckMarkIcon from '../public/statics/svg/check_mark.svg'

import { patchTodoAPI, deleteTodoAPI, getTodosAPI } from '../lib/api/todo'

const TodoList: FC = () => {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const getTodoColorNums = () => todos.reduce((acc, todo) => {
    acc[todo.color] += 1
    return acc
  }, { red: 0, orange: 0, yellow: 0, green: 0, blue: 0, navy: 0 })

  const todoColorNums: {[key: string]: number} = getTodoColorNums()

  const handleTrashCanIconClick = (todo: TodoType) => async () => {
    await deleteTodoAPI(todo.id)
    const { data: newTodos } = await getTodosAPI()
    dispatch(todoActions.setTodo(newTodos))
  }

  const toggleCheckedStatus = async (todoId: number) => {
    const { data: newTodos } = await patchTodoAPI(todoId)
    dispatch(todoActions.setTodo(newTodos))
  }

  const handleCheckedIconClick = (todo: TodoType) => () => {
    toggleCheckedStatus(todo.id)
  }

  const handleUnCheckedIconClick = (todo: TodoType) => () => {
    toggleCheckedStatus(todo.id)
  }

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO<span>{todos.length}개</span>
        </p>

        <div className="todo-list-header-colors">
          {Object.keys(todoColorNums).map((color: string, index: number) => (
            <div className="todo-list-header-color-num" key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{todoColorNums[color]}개</p>
            </div>
          ))}
        </div>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li className="todo-item" key={todo.id}>

              <div className="todo-left-side">
                <div className={`todo-color-block bg-${todo.color}`} />
                <p className={`todo-text ${todo.checked ? 'checked-todo-text' : ''}`}>
                  {todo.text}
                </p>
              </div>

              <div className="todo-right-side">
                {todo.checked ? (
                  <>
                    <TrashCanIcon className="todo-trash-can" onClick={handleTrashCanIconClick(todo)} />
                    <CheckMarkIcon className="todo-check-mark" onClick={handleCheckedIconClick(todo)} />
                  </>
                ) : (
                  <button type="button" className="todo-button" onClick={handleUnCheckedIconClick(todo)} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default TodoList
