import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MemoCard } from "@/components/MemoCard";
import { AddMemo } from "@/components/AddMemo";
import { TodoContent } from "@/components/TodoContent";
export interface TodoSubItem {
  content: string;
  isDone: boolean;
}
export interface DataList {
  date: string;
  list: TodoSubItem[];
}

const TodoItem: DataList[] = [
  {
    date: "Selasa, 20 Mei 2026",
    list: [
      {
        content: "Belajar Bahasa Jepang",
        isDone: false,
      },
      {
        content: "Lanjut Project NokaMemo",
        isDone: false,
      },
    ],
  },
];
export default function MemoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFF]">
        <TodoContent TodoList={TodoItem} />
      </main>
      <Footer />
    </>
  );
}
