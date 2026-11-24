"use client";
import { TodoListCard } from "./TodoListCard";
import { TodoList } from "@/data/todos";
import { TodoOverlay } from "./TodoOverlay";
import { useState } from "react";
interface TodoListCardProps {
  todoList: TodoList[];
}
export function TodoContent({ todoList }: TodoListCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  console.log(todoList);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto px-4 py-4">
        {todoList.map((e, i) => (
          <div
            className="flex flex-col justify-center"
            key={i}
            onClick={() => setSelectedIndex(i)}
          >
            <TodoListCard todoList={e} />
          </div>
        ))}
      </div>
      <div>
        {selectedIndex !== null && (
          <div
            className={`flex fixed inset-0 z-50 items-center justify-center backdrop-blur-xs bg-[#ffffff3d]`}
            onClick={() => setSelectedIndex(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full md:w-fit"
            >
              <TodoOverlay items={todoList} selectedIndex={selectedIndex} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
