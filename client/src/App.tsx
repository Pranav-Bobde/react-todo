import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App(): JSX.Element {
  return (
    <div className="h-screen bg-blue-400">
      <h1 className="font-neucha text-center text-3xl">Taskify</h1>

      <SearchBar />
    </div>
  );
}

export default App;
