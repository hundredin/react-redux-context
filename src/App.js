import React from 'react';
import './App.css';
import ContextExample from './ContextExample'
import TodoContextExample from './todo/TodoContextExample'
import TodoReduxExample from './todo-redux'

function App() {
  return (
    <div className="App">
      {/* <ContextExample /> */}
      {/* <TodoContextExample /> */}
      <TodoReduxExample />
    </div>
  );
}

export default App;
