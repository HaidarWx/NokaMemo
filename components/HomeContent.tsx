import { MemoCard } from "@/components/MemoCard";
import { PictureCard } from "@/components/PictureCard";
import { Calendar } from "@/components/Calendar";
import { Quotes } from "@/components/Quotes";
import { TodoListCard } from "@/components/TodoListCard";
import { AddMemo } from "@/components/AddMemo";
import { DateOverlay } from "@/components/DateOverlay";
import { todoLists } from "@/data/todos";
interface ImageData {
  alt: string;
  src: string;
}

const ImageItem: ImageData[] = [
  { alt: "Madohomu", src: "madohomu_1.jpg" },
  { alt: "Madohomu", src: "madohomu.webp" },
];

export function HomeContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MemoCard />
      <PictureCard ImageItem={ImageItem[1]} />
      <Calendar />
      <Quotes />
      <TodoListCard todoList={todoLists[0]} />
      <AddMemo />
      <DateOverlay />
    </div>
  );
}
