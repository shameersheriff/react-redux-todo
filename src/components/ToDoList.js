import React from "react";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {todo.text}
          <button
            onClick={() => removeTodo(todo.id)}
            className="btn btn-danger btn-sm"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
