import React from "react";
import TodoList from "./components/ToDoList";
import AddTodo from "./components/AddToDo";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
