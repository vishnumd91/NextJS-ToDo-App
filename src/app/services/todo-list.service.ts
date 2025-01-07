import { v4 as uuidv4 } from "uuid";

export const getToDos = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todos`);
  return response.json() ?? [];
};

export const addToDo = async (task: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: uuidv4(), task, completed: false }),
  });
  return response.json();
};
