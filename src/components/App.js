import React from "react";
import AddTodo from "./AddToDo";
import TodoList from "./ToDoList";

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
