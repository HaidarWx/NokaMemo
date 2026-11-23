"use client";
import { TodoListCard } from "./TodoListCard";
import { TodoList } from "@/data/todos";
interface TodoListCardProps {
  todoList: TodoList[];
}
export function TodoContent({ todoList }: TodoListCardProps) {
  console.log(todoList);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto px-4 py-4">
      {todoList.map((e, i) => (
        <TodoListCard key={i} todoList={e} />
      ))}
    </div>
  );
}
