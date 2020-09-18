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

export default function todoReducer(state = initialState, action ) {
  switch (action.type) {
    case CREATE:
      const nextId = Math.max(...state.todos.map(todo => todo.id)) + 1;
      
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: nextId,
            text: action.payload,
            done: false
          }
        ]
      })
    case TOGGLE:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo)
      });
    case REMOVE:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      })
    default:
      return state
  }
}