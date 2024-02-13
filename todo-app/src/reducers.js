import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./actions";

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
                todos: state.todos.filter(todo => todo.id !== action.payload.id) // Access payload ID
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
                )
            };
        default:
            return state;
    }
};

export default reducer;
