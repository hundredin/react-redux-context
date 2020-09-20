import { combineReducers } from 'redux';
import todo from './todo';
import todoThunk from './todo-thunk';

const rootReducers = combineReducers({
  todo,
  todoThunk
})

export default rootReducers
