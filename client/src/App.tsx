import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import { Todo } from "./model/Todo";

function App(): JSX.Element {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      task: "Learn React 1",
      completed: false,
      deleted: false,
    },

    {
      id: 2,
      task: "Learn React 2",
      completed: false,
      deleted: false,
    },

    {
      id: 3,
      task: "Learn React 3",
      completed: false,
      deleted: false,
    },

    {
      id: 4,
      task: "Learn React 4",
      completed: false,
      deleted: false,
    },
  ]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        { id: todos.length + 1, task: todo, completed: false, deleted: false },
      ]);

      setTodo("");
    }
  };

  return (
    <div className="h-screen bg-blue-400 p-6">
      <div className="font-neucha text-4xl text-white text-center">TASKIFY</div>

      <SearchBar todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
