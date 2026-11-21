import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MemoCard } from "@/components/MemoCard";
import { AddMemo } from "@/components/AddMemo";
import { TodoContent } from "@/components/TodoContent";
export default function MemoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFF]">
        <TodoContent />
      </main>
      <Footer />
    </>
  );
}
