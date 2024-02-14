import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../actions';
import 'tachyons';
const AddTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text))
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-reset flex-auto f4 border-box ml2 pa2"
        placeholder="What needs to be done?"
      />
      <button type="submit" className="button-reset f4 bg-blue white b ph2 pv2 ml2 hover:bg-light-blue">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
