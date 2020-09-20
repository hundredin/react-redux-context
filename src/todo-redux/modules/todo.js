import produce from 'immer'
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
      
      return produce(state, draft => {
        draft.todos.push({
          id: nextId,
          text: action.payload,
          done: false
        })
      })
    case TOGGLE:
      return produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === action.payload)
        todo.done = !todo.done
      });
    case REMOVE:
      // return Object.assign({}, state, {
      //   todos: state.todos.filter(todo => todo.id !== action.payload)
      // })
      // 사실 이런건 immer 를 쓰는 것보다 기존 filter 방식을 쓰는게 더 직관적이긴 하다.
      return produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === action.payload)
        draft.todos.splice(index, 1)
      })

    default:
      return state
  }
}