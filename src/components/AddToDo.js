import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: { text: input, id: Date.now() } });
    setInput("");
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-control mb-2"
        placeholder="Add a new task"
      />
      <button onClick={addTodo} className="btn btn-primary">
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
