"use client";
import { ReactElement, useState } from "react";

export const ToDoInput = (): ReactElement => {
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
        />
        {/* Add Button */}
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
