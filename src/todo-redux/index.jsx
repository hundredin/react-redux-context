import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import TodoReduxApp from './TodoReduxApp'
import TodoThunk from './TodoThunk'

const initialState = {}
const store = configureStore(initialState)

const TodoApp = () => {
  return (
    <Provider store={store}>
      <TodoThunk />
    </Provider>
  )
}

export default TodoApp