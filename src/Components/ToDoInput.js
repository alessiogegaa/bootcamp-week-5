import React, { useState, useContext } from 'react';
import { ToDoContext } from './ToDoContext';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(ToDoContext);

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '10px 0' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        style={{
          padding: '8px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          flex: '1',
        }}
      />
      <button
        onClick={handleAddTodo}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
