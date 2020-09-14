import React, { createContext, useReducer } from 'react';

const initialTodos = [
  {id: 1, text: 'this is todo 1', done: false},
  {id: 2, text: 'this is todo 2', done: false},
  {id: 3, text: 'this is todo 3', done: false}
]

export const TodosStateContext = createContext();
export const TodosDispatchContext = createContext();

const create = (text) => ({
  type: 'CREATE',
  text
})

const remove = (id) => ({
  type: 'REMOVE',
  id
})

const toggle = (id) => ({
  type: 'TOGGLE',
  id
})

function todosReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false
      });
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error('Unhandled action');
  }
}

export const Actions = {
  create, remove, toggle
}

export default function TodoProvider({children}) {
  const [state, dispatch] = useReducer(todosReducer, initialTodos)

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={state}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  )
}