import React from 'react';

import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import 'tachyons'
import './App.css';

function App() {

  return (
   
      <div className="pa4 tc shadow-3 bg-light-moon-gray shadow-1 border-box box-shadow-1">
        <h1>Todo App</h1>
        <AddTodoForm  />
        <TodoList />
      </div>

  );
}

export default App;
