import "./App.css";
import React from 'react';

import TodoList from './Components/ToDoList';
import TodoInput from './Components/ToDoInput';
import { ToDoProvider } from "./Components/ToDoContext";

const App = () => {
  return (
    <ToDoProvider>
      <div className="App">
        <h1>Todo List</h1>
        <TodoInput/>
        <TodoList/>
      </div>
    </ToDoProvider>
  );
};

export default App;

