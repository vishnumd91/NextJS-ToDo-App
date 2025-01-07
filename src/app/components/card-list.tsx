"use client";

import { ReactElement } from "react";
import { Todo } from "../typings/card.types";
import Card from "../ui/card";
import { useQuery } from "@tanstack/react-query";
import { getToDos } from "../services/todo-list.service";

const CardList = (): ReactElement => {
  // Fetch ToDos
  const { data: todos } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getToDos,
  });

  return (
    <div className="flex justify-center items-center flex-wrap ml-auto mr-auto">
      {todos?.length === 0 ? (
        <div className="w-full flex flex-col flex-wrap justify-center items-center">
          <h1 className="text-3xl font-bold mb-4 mt-5 flex justify-center items-center">
            No Todos Found!
          </h1>
        </div>
      ) : (
        todos?.map((todo) => (
          <div
            key={todo.id}
            className="w-full flex flex-col flex-wrap justify-center items-center"
          >
            <Card id={todo?.id} task={todo?.task} completed={todo?.completed} />
          </div>
        ))
      )}
    </div>
  );
};

export default CardList;
