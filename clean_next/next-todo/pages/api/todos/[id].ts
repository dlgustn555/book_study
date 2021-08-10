import { NextApiRequest, NextApiResponse } from 'next'
import Data from '../../../lib/data'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PATCH') {
    res.statusCode = 405
    return res.end()
  }

  try {
    const todoId = Number(req.query.id)

    if (!Data.todo.exist(todoId)) {
      res.statusCode = 404
      return res.end()
    }

    const todos = Data.todo.getList()
    const changedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, checked: !todo.checked }
      }
      return todo
    })

    Data.todo.write(changedTodos)

    res.statusCode = 200
    return res.send(changedTodos)
  } catch (e) {
    res.statusCode = 500
    return res.send(e)
  }
}
