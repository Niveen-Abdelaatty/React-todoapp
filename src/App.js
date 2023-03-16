import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    const newTodo = {
      text: e.target.value,
      id: new Date(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>To DO App</h1>
      <TodoList todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
