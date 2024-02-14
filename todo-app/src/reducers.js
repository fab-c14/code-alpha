import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETED } from "./actions";

const initialState = {
    todos: [
        { id: 1, text: "Example Todo 1" },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id) 
            };
        case EDIT_TODO:
            return {
                ...state,
                todos:state.todos.map(todo=>todo.id===action.payload.text.strike())
            };
        case COMPLETED:
            return{
                ...state,
                todos:[...state.todos,action.payload.text.strike()]
            }
        default:
            return state;
    }
};

export default reducer;
