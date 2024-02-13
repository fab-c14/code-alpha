import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions'; 

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <form className="pa3" onSubmit={handleSubmit}>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={handleChange}
      />
      <button
        className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-green hover-bg-dark-green"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
