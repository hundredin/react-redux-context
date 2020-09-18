import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from './modules'

export default function configureStore(initialState) {

  const middleware = applyMiddleware(
    logger
  )

  const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(middleware)
  )

  return store
}
