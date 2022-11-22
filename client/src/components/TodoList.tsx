import React from "react";
import { Todo } from "../model/Todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoList({ todos, setTodos }: TodoListProps): JSX.Element {
  return (
    <div className="mt-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
