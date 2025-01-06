"use client";
import { ReactElement, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

export const ToDoInput = (): ReactElement => {
  const [task, setTask] = useState<string>("");
  const queryClient = useQueryClient();

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = async () => {
    await mutation.mutateAsync(task);
  };

  const mutation = useMutation({
    mutationFn: async (task: string) => {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: uuidv4(), task, completed: false }),
      });
      return response.json();
    },
    onMutate: () => {
      setTask("");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
        refetchType: "active",
      });
    },
  });

  return (
    // Main container
    <div className="p-3 w-full flex flex-col">
      <h1 className="text-3xl font-bold mb-4 mt-5 flex justify-center items-center">
        Todo List!
      </h1>
      {/* Input Container */}
      <div className="flex justify-center items-center gap-3 w-2/4 ml-auto mr-auto">
        <input
          type="text"
          className="border border-gray-300 rounded-l py-2 px-4 w-full"
          placeholder="Enter a new todo"
          value={task}
          onChange={handleTaskChange}
        />
        {/* Add Button */}
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
