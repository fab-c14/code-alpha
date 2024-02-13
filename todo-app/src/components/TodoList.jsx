import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos // Assuming 'todos' is the key in your Redux store that holds the todo list
});

export default connect(mapStateToProps)(TodoList);
