import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import customLoggerMiddleware from './customLoggerMiddleware'
import rootReducers from './modules'

export default function configureStore(initialState) {

  const middleware = applyMiddleware(
    customLoggerMiddleware
  )

  const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(middleware)
  )

  return store
}
