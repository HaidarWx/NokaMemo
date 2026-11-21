"use client";
import { TodoListCard } from "./TodoListCard";
import { useState } from "react";

export function TodoContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto px-4 py-4">
      <TodoListCard />
      <TodoListCard />
      <TodoListCard />
    </div>
  );
}
