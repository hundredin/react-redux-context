const RECEIVE_TODOS = 'TODO/RECEIVE'

const initialState = {
  todos: []
}

export const getTodos = () => (dispatch, getState) => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => dispatch(receiveTodos(data)))
}

const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  payload: todos
})

export default function todoThunkReducer(state = initialState, action ) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        todos: action.payload
      })
    default:
      return state
  }
}