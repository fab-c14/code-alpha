import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import 'tachyons'
function App() {
  return (
    <div className="pa3">
      <h1 className="tc">Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
