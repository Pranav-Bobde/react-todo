import React from "react";
import { Todo } from "../model/Todo";

type SearchBarProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
};

export default function SearchBar({
  todo,
  setTodo,
  handleAddTodo,
}: SearchBarProps): JSX.Element {
  return (

    <div className="mt-4">
      <form
        className="relative flex items-center"
        onSubmit={(e) => handleAddTodo(e)}
      >
        <input
          value={todo}
          onChange={(e) => setTodo(e.currentTarget.value)}
          className="w-full rounded-full px-6 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          type="text"
          placeholder="Enter a Todo"
        />

        <button
          type="submit"
          className="absolute rounded-full bg-blue-400 z-10 p-2 text-white right-0 mr-2"
        >
          Go
        </button>
      </form>
    </div>
  );
}
