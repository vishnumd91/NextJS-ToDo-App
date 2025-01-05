import { ReactElement } from "react";
import { CardProps } from "../typings/card.types";
import Card from "../ui/card";

const CardList = ({ todos }: CardProps): ReactElement => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {todos.map((todo) => (
        <Card
          key={todo.id}
          id={todo?.id}
          task={todo?.task}
          completed={todo?.completed}
        />
      ))}
    </div>
  );
};

export default CardList;
