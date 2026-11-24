"use client";
import { useState } from "react";
import { MemoCard } from "@/components/MemoCard";
import { PictureCard } from "@/components/PictureCard";
import { Calendar } from "@/components/Calendar";
import { Quotes } from "@/components/Quotes";
import { TodoListCard } from "@/components/TodoListCard";
import { AddMemo } from "@/components/AddMemo";
import { DateOverlay } from "@/components/DateOverlay";
import { TodoOverlay } from "./TodoOverlay";
import { todoLists } from "@/data/todos";
import { TodoList } from "@/data/todos";

interface ImageData {
  alt: string;
  src: string;
}
interface ItemsTodo {
  items: TodoList[];
  selectedIndex: number;
}
const ImageItem: ImageData[] = [
  { alt: "Madohomu", src: "madohomu_1.jpg" },
  { alt: "Madohomu", src: "madohomu.webp" },
];

export function HomeContent() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MemoCard />
      <PictureCard ImageItem={ImageItem[1]} />
      <Calendar />
      <Quotes />
      <div
        onClick={() => setSelectedIndex(0)}
        className="flex flex-col justify-center"
      >
        <TodoListCard todoList={todoLists[0]} />
      </div>
      <AddMemo />
      <DateOverlay />
      <div className="flex flex-col justify-center">
        {selectedIndex !== null && (
          <div
            className={`flex fixed inset-0 z-50 items-center justify-center backdrop-blur-xs bg-[#ffffff3d]`}
            onClick={() => setSelectedIndex(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full md:w-fit"
            >
              <TodoOverlay items={todoLists} selectedIndex={selectedIndex} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
