import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./Reducers/TodoReducer";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = (todoTitle) => {
    dispatch({ type: "ADD_TODO", payload: todoTitle });
  };

  const toggleTodoCompleted = (id) => {
    dispatch({ type: "TODO_COMPLETED", id:id });
  };

  const clearTodo = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm add={add}/>
      <TodoList todos={state.todos} toggleTodoCompleted={toggleTodoCompleted} clearTodo={clearTodo} />
    </div>
  );
}
export default App;