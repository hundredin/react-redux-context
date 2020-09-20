import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from './modules/todo-thunk';
import { Actions } from './modules/todo'


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
      <span onClick={handleToggle} className={todo.completed ? 'done' : ''}>{todo.title}</span>
      <span onClick={handleRemove} style={{color: 'red'}}>(X)</span>
    </li>
  )
}

const TodoList = () => {
  const todos = useSelector(state => state.todoThunk.todos)

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


const TodoThunk = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <div>
      <TodoList/>
    </div>
  )
}

export default TodoThunk