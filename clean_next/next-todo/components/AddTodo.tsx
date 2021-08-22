import React, { FC, useState, ChangeEventHandler } from 'react'

import { useRouter } from 'next/router'
import BrushIcon from '../public/statics/svg/brush.svg'

import { addTodoAPI } from '../lib/api/todo'
import { TodoType } from '../types/todo'

import Container from './AddTodo.style'

const AddTodo: FC = () => {
  const Router = useRouter()
  const [text, setText] = useState('')
  const [selectedColor, setSelectedColor] = useState<TodoType['color']>('red')

  const handleAddButtonClick = async () => {
    try {
      await addTodoAPI({ text, color: selectedColor })
      Router.push('/todo')
    } catch (e) {
      console.log(e)
    }
  }
  const handleColorButtonClick = (color: TodoType['color']) => () => {
    setSelectedColor(color)
  }

  const handleChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setText(event.target.value)
  }

  return (
    <Container>
      <div className="add-todo-header">
        <h1 className="add-todo-header-title">Add Todo</h1>
        <button type="button" className="add-todo-submit-button" onClick={handleAddButtonClick}>
          추가하기
        </button>
      </div>

      <div className="add-todo-colors-wrapper">
        <div className="add-todo-color-list">
          {['red', 'orange', 'yellow', 'green', 'blue', 'navy'].map((color, index) => (
            <button
              key={index}
              type="button"
              className={`bg-${color} add-todo-color-button ${selectedColor === color && 'add-todo-selected-color'}`}
              onClick={handleColorButtonClick(color as TodoType['color'])}
            />
          ))}
        </div>
        <BrushIcon />
      </div>

      <textarea value={text} onChange={handleChangeTextarea} placeholder="할 일을 입력해주세요." />
    </Container>
  )
}

export default AddTodo
