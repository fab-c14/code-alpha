import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'tachyons';
const TodoItem = ({ todo, removeTodo, toggleTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false); // Track edit state
  const [editText, setEditText] = useState(todo.text); // Store edited text
  const dispatch = useDispatch()
  const handleEditTodo = () => {
    editTodo(todo.id, editText)
    setIsEditing(false)
  };

  const handleCancelEdit = () => {
    setEditText(todo.text); 
    setIsEditing(false);
  };

  return (
    <li className="mv3 ph3  pa3 shadow-1 bg-blue br3">
      {isEditing ? (
      <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="input-reset flex-auto f4 border-box ml2 br2"
          />
        <button className="bg-green white f4 b pv2 ph3 hover-bg-light-green br2" onClick={handleEditTodo}>
        Save
        </button>

        <button className="bg-red white f4 b pv2 ph3 hover-bg-light-red br2" onClick={handleCancelEdit}>
        Cancel
        </button>
        </>
      ) : ( 
        <span className={todo.completed ? 'f3 strike' : 'f3'}>
          {todo.text}
        </span>
      )}
      <button className="bg-green white f4 b pv2 ph3 hover-bg-light-green br2" onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button className="f4 b--black dib br2 shadow-2 ph3 pv2 hover-gray hover-bg-white br2" onClick={() => setIsEditing(true)}>
        Edit
        </button>

        <button className="f4 b2 red dib br2 shadow-2 ph3 pv2 hover-bg-washed-red br2" onClick={() => removeTodo(todo.id)}>
        Remove
        </button>
    </li>
  );
};

export default TodoItem;
