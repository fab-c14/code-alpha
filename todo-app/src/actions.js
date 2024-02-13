export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETED = 'COMPLETED'

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: generateUniqueId(), 
        text: text
    }
});
export const removeTodo = (id)=>({
    type:REMOVE_TODO,
    payload: {
        id: id 
    }
})
export const editTodo = (id,newText)=>({
    type:REMOVE_TODO,
    payload: {
        id: id ,
        text:newText
    }
})
export const completeTodo = (id)=>({
    type:COMPLETED,
    payload: {
        id: id 
    }
})
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}
