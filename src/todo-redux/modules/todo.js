import createReducer from '../createReducer'

const CREATE = 'TODO/CREATE'
const REMOVE = 'TODO/REMOVE'
const TOGGLE = 'TODO/TOGGLE'

const initialState = {
  todos: [
    {id: 1, text: 'this is todo 1', done: false},
    {id: 2, text: 'this is todo 2', done: false},
    {id: 3, text: 'this is todo 3', done: false}
  ]
}

const create = (text) => ({
  type: CREATE,
  payload: text
})

const remove = (id) => ({
  type: REMOVE,
  payload: id
})

const toggle = (id) => ({
  type: TOGGLE,
  payload: id
})

export const Actions = {
  create,
  remove,
  toggle
}

const todoReducer = createReducer(initialState, {
  [CREATE]: (state, action) => {
    const nextId = Math.max(...state.todos.map(todo => todo.id)) + 1;
        
    state.todos.push({
      id: nextId,
      text: action.payload,
      done: false
    })
  },
  [TOGGLE]: (state, action) => {
    const todo = state.todos.find(todo => todo.id === action.payload)
    todo.done = !todo.done    
  },
  [REMOVE]: (state, action) => {
    const index = state.todos.findIndex(todo => todo.id === action.payload)
    state.todos.splice(index, 1)
  }
})

export default todoReducer