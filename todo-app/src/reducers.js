import { combineReducers } from 'redux';
import {ADD_TODO,REMOVE_TODO,EDIT_TODO,TOGGLE_TODO} from './actions'
const initialState = {
  todos: [],
};

const todosReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case EDIT_TODO:
      return state.map((todo) =>{
          console.log(todo)
          console.log(action.payload)
          return todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        }
      );
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({ todos: todosReducer });

export default rootReducer;
