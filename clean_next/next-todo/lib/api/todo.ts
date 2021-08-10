import api from './index'
import { TodoType } from '../../types/todo'

/**
 * TODO 관련 API들을 모아서 관리하게 되면, API를 후에 찾기 쉽고,
 * 재사용이 가능해 진다.
 */

export const getTodosAPI = () => api.get<TodoType[]>('/api/todos')

export const patchTodoAPI = (id: number) => api.patch<TodoType[]>(`/api/todos/${id}`)
