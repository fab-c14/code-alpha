import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import 'tachyons'
function App() {
  return (
    <div className="pa3 App">
      <h1 className="tc">Todo App</h1>
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
