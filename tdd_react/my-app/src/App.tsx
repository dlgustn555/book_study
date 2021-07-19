import React, {useState} from 'react'
import Styled from 'styled-components'
import {Button, Input, ToDoItem} from 'components'

const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`

const InputContainer = Styled.div`
    display: flex;
`
const ToDoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`

function App(): React.ReactElement {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState<string[]>([])

    const handleChangeInputValue = ({currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(currentTarget.value)
    }

    const handleAddTodo = () => {
        setTodoList([...todoList, todo])
        setTodo('')
    }

    const handleDeleteTodo = (index: number) => () => {
        const newTodoList = todoList.filter((_, i) => i !== index)
        setTodoList(newTodoList)
    }

    return (
        <Container>
            <Contents>
                <InputContainer>
                    <Input value={todo} placeholder="할 일을 입력" onChange={handleChangeInputValue} />
                    <Button label="추가" onClick={handleAddTodo} />
                </InputContainer>

                <ToDoListContainer data-testid="todoList">
                    {todoList.map((todo, index) => (
                        <ToDoItem key={index} label={todo} onClick={handleDeleteTodo(index)} />
                    ))}
                </ToDoListContainer>
            </Contents>
        </Container>
    )
}

export default App
