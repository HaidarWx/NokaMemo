import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TodoContent } from "@/components/TodoContent";
import { todoLists } from "@/data/todos";
export default function MemoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFF]">
        <TodoContent todoList={todoLists} />
      </main>
      <Footer />
    </>
  );
}
