import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Actions } from './modules/todo'


const TodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  
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
  const dispatch = useDispatch();

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
  const todos = useSelector(state => state.todo.todos)

  return (
    <div>
      <ul>
        {todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo}/>
        })}
      </ul>
    </div>
  )
}


const TodoReduxApp = () => {
  return (
    <div>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default TodoReduxApp