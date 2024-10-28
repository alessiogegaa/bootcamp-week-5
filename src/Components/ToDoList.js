import React, { useContext } from 'react';
import { ToDoContext } from './ToDoContext';

const TodoList = () => {
  const { todos, removeToDo, removeAllToDo } = useContext(ToDoContext);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto'  }}>
      <button
        onClick={() => removeAllToDo()}
        style={{
          padding: '10px 15px',
          marginBottom: '10px',
          fontSize: '16px',
          backgroundColor: '#FF6347',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Delete All
      </button>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              marginBottom: '8px',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
            }}
          >
            <span style={{ fontSize: '16px' }}>{todo.text}</span>
            <button
              onClick={() => removeToDo(todo.id)}
              style={{
                padding: '5px 10px',
                fontSize: '14px',
                color: '#fff',
                backgroundColor: '#007BFF',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
