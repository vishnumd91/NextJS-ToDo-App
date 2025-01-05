import { ReactElement } from "react";
import { ToDoInput } from "../components/todo-input";
import "../globals.css";
import CardList from "../components/card-list";

const ToDoPage = async (): Promise<ReactElement> => {
  // Fetch ToDos
  const response = await fetch("http://localhost:3001/todos");
  const todos = await response.json();
  return (
    <div>
      {/* Todo Input */}
      <div>
        <ToDoInput />
      </div>
      {/* List Todos in a Card Format */}
      <div>
        <CardList todos={todos} />
      </div>
    </div>
  );
};

export default ToDoPage;
