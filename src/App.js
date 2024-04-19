import React from 'react';
import TodoList from './components/ToDoList';
import AddTodo from './components/AddToDo';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
