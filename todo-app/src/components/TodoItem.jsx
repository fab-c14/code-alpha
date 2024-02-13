import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todoActions';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between pa2 mb2 bg-light-blue">
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)} className="bg-red white bn pa2">
        Remove
      </button>
    </div>
  );
};

export default connect(null, { removeTodo })(TodoItem);
