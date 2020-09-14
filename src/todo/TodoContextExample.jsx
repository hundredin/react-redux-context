import React, { useState, useContext } from 'react'
import TodoProvider from './TodoProvider'
import { Actions, TodosStateContext, TodosDispatchContext } from './TodoProvider'

const TodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useContext(TodosDispatchContext);
  
  const handleAdd = () => {
    if (value) {
      dispatch(Actions.create(value))
      setValue('')
    }
  }

  return (
    <div>
      <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

const TodoItem = ({todo}) => {
  const dispatch = useContext(TodosDispatchContext);

  const handleToggle = () => {
    dispatch(Actions.toggle(todo.id))
  }

  const handleRemove = () => {
    dispatch(Actions.remove(todo.id))
  }

  return (
    <li>
      <span onClick={handleToggle} className={todo.done ? 'done' : ''}>{todo.text}</span>
      <span onClick={handleRemove} style={{color: 'red'}}>(X)</span>
    </li>
  )
}

const TodoList = () => {
  const state = useContext(TodosStateContext);
  return (
    <div>
      <ul>
        {state.map(todo => {
          return <TodoItem key={todo.id} todo={todo}/>
        })}
      </ul>
    </div>
  )
}


const TodoContextExample = () => {
  return (
    <TodoProvider>
      <TodoForm/>
      <TodoList/>
    </TodoProvider>
  )
}

export default TodoContextExample