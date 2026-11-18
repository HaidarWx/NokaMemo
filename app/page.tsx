import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Footer";
import { MemoCard } from "@/components/MemoCard";
import { PictureCard } from "@/components/PictureCard";
import { Calendar } from "@/components/Calendar";
import { Quotes } from "@/components/Quotes";
import { TodoList } from "@/components/TodoList";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MemoCard />
          <PictureCard />
          <Calendar />
          <Quotes />
          <TodoList />
        </div>
      </main>
      <Footer />
    </>
  );
}
