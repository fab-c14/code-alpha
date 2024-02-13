export const addTodo = text => ({
    type: 'ADD_TODO',
    payload: {
      id: Date.now(),
      text
    }
  });
  
  export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    payload: id
  });
  