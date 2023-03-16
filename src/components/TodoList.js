function TodoList({ todos, addTodo }) {
  return (
    <div>
      <h1>Create a new Todo</h1>
      <input
        type='text'
        placeholder='create a todo'
        onKeyDown={(e) => {
          e.key === 'Enter' && addTodo(e);
        }}
      />

      <h1>Display not completed todos</h1>
        {}


      <h1>Display not completed todos</h1>
    </div>
  );
}

export default TodoList;
