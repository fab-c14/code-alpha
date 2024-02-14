import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { editTodo, removeTodo,toggleTodo } from '../actions';
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removeTodos = (id) => dispatch(removeTodo(id));
  const toggleTodos = (id) => dispatch(toggleTodo(id));
  const editTodos = (id,text) => dispatch(editTodo(id,text));

  return (
    <ul className="list pl2 ml2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodos}
          toggleTodo={toggleTodos}
          editTodo={editTodos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
