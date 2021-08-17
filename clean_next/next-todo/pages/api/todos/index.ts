import { NextApiRequest, NextApiResponse } from 'next'
import Data from '../../../lib/data'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const todos = Data.todo.getList()
      res.statusCode = 200
      return res.send(todos)
    } catch (e) {
      res.statusCode = 500
      res.send(e)
    }
  }

  if (req.method === 'POST') {
    const { text, color } = req.body

    if (!text || !color) {
      res.statusCode = 400
      return res.send('text 혹은 color 가 없습니다.')
    }

    try {
      const todos = Data.todo.getList()
      const count = todos.length
      const todoId = count === 0 ? 1 : todos[count - 1].id + 1

      const newTodo = {
        id: todoId,
        text,
        color,
        checked: false
      }

      Data.todo.write([...todos, newTodo])
      res.statusCode = 200
      res.end()
    } catch (e) {
      res.statusCode = 500
      res.send(e)
    }
  }

  res.statusCode = 405
  res.end()
}
