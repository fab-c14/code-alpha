import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="pa2 mb2"
        placeholder="Add new todo"
      />
      <button type="submit" className="pa2">Add Todo</button>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodoForm);
