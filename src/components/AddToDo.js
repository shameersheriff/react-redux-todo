import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: { text: input, id: Date.now() } });
    setInput('');
  };

  return (
    <div>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
