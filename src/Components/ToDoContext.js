import React, { createContext, useState } from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
       setTodos([...todos, { text, id: Date.now() }]);
    };

    const removeToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const removeAllToDo = () => {
        setTodos([]);
    };

    return (
        <ToDoContext.Provider value={{ todos, addTodo, removeToDo, removeAllToDo }}>
            {children}
        </ToDoContext.Provider>
    );
};
