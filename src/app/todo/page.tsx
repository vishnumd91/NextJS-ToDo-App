import { ReactElement } from "react";
import { ToDoInput } from "../components/todo-input";
import "../globals.css";
import CardList from "../components/card-list";

const ToDoPage = (): ReactElement => {
  return (
    <div>
      {/* Todo Input */}
      <div>
        <ToDoInput />
      </div>
      {/* List Todos in a Card Format */}
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default ToDoPage;
