import { TodoType } from '../types/todo'

interface TodoReduxState {
    todos: TodoType[]
}

// * ※※ 스토어 초기 상태
const initialState: TodoReduxState = {
  todos: []
}

// * ※※ Action 타입 정의
// * 3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야 한다.
export const INIT_TODO_LIST = 'todo/INIT_TODO_LIST'

//  * ※※ 액션 생성자 정의
//  * 2. 항상 모듈의 action 생성자들을 함수형태로 export 해야 한다.
export const setTodo = (payload: TodoType[]) => ({
  type: INIT_TODO_LIST,
  payload
})

// * ※※ 리듀서
// * 1. 항상 reducer()란 이름의 함수를 export default 해야 한다.
export default function reduce(state = initialState, action: any) {
  switch (action.type) {
    case INIT_TODO_LIST:
      const newState = { ...state, todos: action.payload }
      return newState
    default:
      return state
  }
}

export const todoActions = { setTodo }
