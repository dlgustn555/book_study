import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'

// 리듀서 모듈 import
import todo from './todo'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

// 리듀서들을(ex todo) 모듀렬로 관리하여, combineReducers를 사용하여 하나로 모으게 된다.
const rootReducer = combineReducers({
  todo: todo.reducer
})

// 합쳐진 리듀서에 타입이 '__NEXT_REDUX_WRAPPER_HYDRATE__' 인 리듀서를 추가한다.
// Hydrate는 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해주는 역할을 한다.
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }

    if (state.count) {
      nextState.count = state.count
    }

    return nextState
  }

  return rootReducer(state, action)
}

// 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>

// 리덕스 스토어를 만들어 리턴한다.
const initStore = () => {
  return configureStore({
    reducer,
    devTools: true
  })
}

export const wrapper = createWrapper(initStore)
