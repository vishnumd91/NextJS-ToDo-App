export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export interface CardProps {
  todos: Todo[];
}
