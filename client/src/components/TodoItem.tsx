import React, { useEffect, useRef, useState } from "react";
import { BsCheckLg, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { Todo } from "../model/Todo";

type TodoItemProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoItem({
  todo,
  todos,
  setTodos,
}: TodoItemProps): JSX.Element {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.task);

  const handleOnCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleOnDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleOnEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: editTodo } : todo))
    );
    setEdit(!edit);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex items-center bg-white rounded-lg shadow-lg p-4 my-4 hover:scale-105 transform transition duration-300 ease-in-out"
      onSubmit={(e) => handleOnEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          className="flex-1"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.completed ? (
        <s className="flex-1">{todo.task}</s>
      ) : (
        <span className="flex-1">{todo.task}</span>
      )}

      <div className="flex items-center gap-2 ">
        <span
          className="hover:cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out"
          onClick={() => {
            if (!edit && !todo.completed) {
              setEdit(!edit);
            }
          }}
        >
          <BsFillPencilFill />
        </span>

        <span
          className="hover:cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out"
          onClick={() => handleOnDelete(todo.id)}
        >
          <BsFillTrashFill />
        </span>

        <span
          className="hover:cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out"
          onClick={() => handleOnCheck(todo.id)}
        >
          <BsCheckLg />
        </span>
      </div>
    </form>
  );
}
