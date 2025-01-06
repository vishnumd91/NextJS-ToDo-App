"use client";

import { ReactElement } from "react";
import { Todo } from "../typings/card.types";

const Card = ({ id, completed, task }: Todo): ReactElement => {
  return (
    <div key={id} className="w-1/2 p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">{task}</h3>
        {/* Edit and Delete Buttons */}
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
