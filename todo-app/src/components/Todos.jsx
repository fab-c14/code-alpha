import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, editTodo, completeTodo } from '../actions'; // assuming you have these actions defined
const Todos = () => {
  const [newText,setNewText] = useState('')
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  const handleComplete = (id,text) => {
    dispatch(completeTodo(id,text));
  };

  const renderTodos = () => {
    return todos.map(todo => (
      <li key={todo.id} className="flex items-center mb2">
        <span className={`mr2 ${todo.completed ? 'strike' : ''}`}>{todo.text}</span>
        {!todo.completed && (
          <>
            <button className="f6 link dim ph3 pv2 mb2 dib white bg-green" onClick={() => handleComplete(todo.id)}>Complete</button>
            <button className="f6 link dim ph3 pv2 mb2 dib white bg-blue" onClick={() => handleEdit(todo.id,todo.text)}>Edit</button>
          </>
        )}
        <button className="f6 link dim ph3 pv2 mb2 dib white bg-red" onClick={() => handleRemove(todo.id)}>Delete</button>
      </li>
    ));
  };

  return (
    <div className="pa3">
      <h2 className="mb3">Todo List</h2>
      <ul className="list pl0">
        {renderTodos()}
      </ul>
    </div>
  );
};

export default Todos;
