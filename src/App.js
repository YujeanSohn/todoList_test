import React, { useState } from "react";

import Input from "./components/Input";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");

  return (
    <div className="wrapper">
      <div className="header">
        <p>Todo List</p>
      </div>
      <Input
        content={content}
        todos={todos}
        setContent={setContent}
        setTodos={setTodos}
      />
      <div className="content_wrapper">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
