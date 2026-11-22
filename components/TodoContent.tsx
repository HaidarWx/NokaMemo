"use client";
import { TodoListCard } from "./TodoListCard";
import { useState } from "react";
import { DataList } from "@/app/todo/page";

interface Todo {
  TodoList: DataList[];
}
export function TodoContent({ TodoList }: Todo) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto px-4 py-4">
      {TodoList.map((e, i) => (
        <TodoListCard key={i} TodoList={e} />
      ))}
    </div>
  );
}
